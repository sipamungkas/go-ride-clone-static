import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 15,
  },
  groupIcon: {
    alignItems: 'center',
    marginRight: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    shadowColor: COLORS.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.69,
    shadowRadius: 0.2,
    elevation: 7,
  },
  primaryShadow: {
    shadowColor: COLORS.PRIMARY,
  },
  orangeShadow: {
    shadowColor: COLORS.ORANGE,
    backgroundColor: 'transparent',
  },
  primaryCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 6,
  },
  formContainer: {
    flex: 1,
  },
  divider: {
    width: '90%',
    height: 0.4,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginVertical: 4,
  },
  text: {
    flexWrap: 'wrap',
    fontSize: 13,
    width: '90%',
  },
  detail: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});
