import React from 'react';
import {Text, View} from 'react-native';

import {isToday} from '../../utils';
import styles from './styles';

type DayItemViewType = {
  item: any;
};

const DayItemView: React.FC<DayItemViewType> = ({item}): JSX.Element => {
  const [day, timing] = item;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.day}>
        {day} <Text style={styles.today}>{isToday(day) ? 'Today' : ''}</Text>
      </Text>
      <Text style={timing.length === 0 ? styles.closed : styles.timing}>
        {timing.length === 0 ? 'Closed' : timing}
      </Text>
    </View>
  );
};

export default DayItemView;
