import {StyleSheet} from 'react-native';
import COLORS from '../../../Colors';

export default StyleSheet.create({
  greenContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    height: 70,
    width: '100%',
    paddingBottom: 25,
    paddingHorizontal: 20,
    paddingTop: 5,
    bottom: 140,
    // transform: [{translateY: 20}],
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  driverAndMotorInformation: {
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  driverText: {
    marginLeft: 10,
    color: 'white',
  },
  driverDuration: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(26,130,15,255)',
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
  },
  driverDurationText: {
    color: 'white',
  },
  motorNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  driverInformation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverName: {
    color: 'rgba(0,0,0,0.6)',
  },
  trophyContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginLeft: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  icon: {
    marginRight: 10,
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
    padding: 15,
  },
  done: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },

  setText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  ratingContainer: {
    position: 'absolute',
    bottom: 10,
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1,
    padding: 1,
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 12,
  },

  image: {
    height: 80,
    width: 80,
  },
});
