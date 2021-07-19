import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  badge: {
    backgroundColor: '#b72d26',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    position: 'absolute',
    top: -1,
    right: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeCounter: {
    color: 'white',
    fontSize: 8,
  },
  badgeWhiteDot: {
    width: 3,
    height: 3,
    borderRadius: 2.5,
    backgroundColor: 'white',
  },
  badgeOutline: {
    borderWidth: 2,
    borderColor: 'white',
  },
});
