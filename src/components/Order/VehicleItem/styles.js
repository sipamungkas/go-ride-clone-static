import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 60,
  },
  rightContent: {
    marginRight: 15,
  },
  price: {
    textAlign: 'right',
    fontSize: 15,
    color: 'rgba(0,0,0,0.5)',
  },
  subText: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.4)',
    textAlign: 'right',
  },
  name: {
    color: 'rgba(0,0,0,0.5)',
  },
  activeName: {
    fontSize: 15,
    color: 'rgb(0,0,0)',
  },
  activePrice: {
    fontSize: 14,
    color: 'rgb(0,0,0)',
  },
});
