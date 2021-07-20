import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(250,250,250,204)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  groupIcon: {
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'white',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  formContainer: {
    flex: 1,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
  },
  textInput: {
    fontSize: 16,
  },
});
