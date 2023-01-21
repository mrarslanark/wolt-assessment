import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.BLACK,
    textTransform: 'capitalize',
  },
  today: {
    color: colors.GREEN,
    textTransform: 'uppercase',
    fontSize: 12,
  },
  closed: {
    flex: 1,
    textAlign: 'right',
    color: colors.GREY_3,
    fontWeight: '400',
  },
  timing: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '400',
    fontSize: 16,
    color: colors.BLACK,
  },
});

export default styles;
