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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  primaryShadow: {
    shadowColor: COLORS.PRIMARY,
  },
  orangeShadow: {
    shadowColor: COLORS.ORANGE,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    marginRight: 10,
  },
  primaryCircle: {
    width: 30,
    height: 30,
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
    width: 8,
    height: 8,
    borderRadius: 6,
  },
  information: {
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    color: 'rgba(0,0,0,0.6)',
  },
  setBtn: {
    marginTop: 10,
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  setText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
