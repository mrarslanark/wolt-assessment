import moment from 'moment';
import {StatusType} from '../components/ResturantTimings';

/**
 * Converts seconds to hours (12 hour format)
 * @param {number} seconds - Seconds provided as number to be converted
 * @returns {string}
 */
export function formatSecondsToHour(seconds: number): string {
  if (typeof seconds === 'string') {
    return seconds;
  }
  return moment.utc(seconds * 1000).format('h A');
}

/**
 * Checks if the current day is today
 * @param {string} day - Current day passed as a string
 * @returns {boolean}
 */
export function isToday(day: string): boolean {
  return moment().format('dddd').toLowerCase() === day;
}

/**
 * Gets the next object from multiple objects
 * @param {object} obj - Object with multiple objects
 * @param {string} key - Key as a string for the current object
 * @returns {object[]}
 */
function nextObj(obj: any, key: string): object[] {
  const keys = Object.keys(obj);
  const index = keys.indexOf(key);
  if (
    index === -1 ||
    keys[index + 1] === undefined ||
    obj[keys[index + 1]] === undefined
  ) {
    return obj[keys[0]];
  }
  return obj[keys[index + 1]];
}

/**
 * Gets the next key from a list of multiple objects
 * @param {string} key - Current object key
 * @param {obj} obj - List of multiple objects
 * @returns {string}
 */
function findNext(key: string, obj: StatusType): string {
  const keys = Object.keys(obj);
  const nextKey = keys[(keys.indexOf(key) + 1) % keys.length];
  return nextKey;
}

/**
 * Converts the opening and closing time for respresentation
 * @param {object[]} arr - Array of objects which requires conversion
 * @returns {string}
 */
function convertTimingToString(arr: any[]): string {
  const timings = arr.map((item: any) => formatSecondsToHour(item.value));
  let str = '';
  for (let i = 0; i < timings.length; i++) {
    str += `${timings[i]}${
      i % 2 !== 0 && i !== timings.length - 1
        ? ', '
        : i === timings.length - 1
        ? ''
        : ' - '
    }`;
  }
  return str;
}

/**
 * Normalizes the data by arranging objects based on opening and closing time
 * @param {object} obj - Object which includes store timings
 * @returns {object}
 */
export function normalizeData(obj: StatusType): object {
  for (const [day, timing] of Object.entries(obj)) {
    if (timing.length > 0 && typeof timing === 'object') {
      const findWithoutCloseTime = timing.find(
        (time: any, index: number) =>
          time.type === 'close' && index === timing.length - 1,
      );
      if (findWithoutCloseTime === undefined) {
        const firstElementOfNextElement = nextObj(obj, day)[0];
        obj[day].push(firstElementOfNextElement);
        const nextKey = findNext(day, obj);
        obj[nextKey].shift();
      }
      obj[day] = convertTimingToString(timing);
    }
  }
  return obj;
}
