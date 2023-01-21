import {Dimensions, StyleSheet} from 'react-native';
import {colors, text} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    padding: 21,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  clock: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 12,
    tintColor: colors.GREY_3,
  },
  headerText: {
    fontSize: text.LARGE,
    fontWeight: '700',
    color: '#202125',
  },
  list: {
    flexGrow: 0,
    width: Dimensions.get('screen').width - 100,
  },
});

export default styles;
