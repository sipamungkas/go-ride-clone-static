import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 3,
  },
  text: {
    color: 'black',
  },
  active: {
    borderColor: COLORS.PRIMARY,
    backgroundColor: COLORS.PRIMARY,
  },
  textActive: {
    color: 'white',
  },
});
