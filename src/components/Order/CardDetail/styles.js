import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
    padding: 15,
  },
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
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  setText: {
    color: 'white',
    fontWeight: 'bold',
  },
  paymentContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  linkAjaText: {
    fontWeight: 'bold',
  },
  paylaterContainer: {
    backgroundColor: 'rgba(0,178,214,255)',
    justifyContent: 'space-between',
    height: 30,
  },
  tryPaylater: {
    color: 'white',
    fontSize: 13,
  },
  tryButton: {
    position: 'absolute',
    right: 0,
    height: 30,
    width: 47,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#009abd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tryText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
