import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  setBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
});
