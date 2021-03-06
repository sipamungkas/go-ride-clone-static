import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  header: {
    backgroundColor: COLORS.SECONDARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    minHeight: 85,
    paddingBottom: 20,
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
  badgeContainer: {
    width: 17,
    height: 17,
    position: 'absolute',
    top: -1,
    right: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
