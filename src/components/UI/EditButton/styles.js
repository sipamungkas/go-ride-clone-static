import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  editBtn: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
  },
  editText: {
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
});
