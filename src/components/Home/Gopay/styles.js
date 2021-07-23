import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  container: {
    marginTop: 5,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    height: 80,
    width: 150,
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  logo: {
    position: 'absolute',
    top: -15,
    left: 10,
  },
  balance: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cta: {
    color: COLORS.PRIMARY,
  },
});
