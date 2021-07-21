import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marker: {
    marginRight: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  address: {
    color: 'rgba(0,0,0,0.4)',
  },
  distance: {
    color: 'rgba(0,0,0,0.3)',
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 12,
  },
});
