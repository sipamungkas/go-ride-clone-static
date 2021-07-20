import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 50,
  },
  textContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  image: {
    backgroundColor: 'rgba(228,22,145,255)',
    height: 90,
    width: 90,
    borderRadius: 25,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(0,0,0,0.5)',
  },
});
