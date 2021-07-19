import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  container: {
    paddingTop: 10,
    height: 90,
    position: 'absolute',
    elevation: 2,
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: -5,
    paddingBottom: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  red: {
    backgroundColor: COLORS.RED,
  },
  text: {
    marginTop: 3,
  },
});
