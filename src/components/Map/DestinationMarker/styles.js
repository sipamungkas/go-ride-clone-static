import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    borderColor: 'white',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },

  primaryCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pin: {
    height: 10,
    width: 1,
    backgroundColor: 'black',
  },
  orangeCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: COLORS.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 6,
  },
});
