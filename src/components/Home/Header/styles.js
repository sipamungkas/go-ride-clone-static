import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  header: {
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    minHeight: 75,
  },
  tabMenu: {
    paddingVertical: 5,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabMenuActive: {backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: 20},
  tabIcon: {
    marginRight: 5,
  },
  text: {
    color: 'white',
  },
  badge: {
    backgroundColor: '#b72d26',
    width: 17,
    height: 17,
    borderRadius: 8,
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
});
