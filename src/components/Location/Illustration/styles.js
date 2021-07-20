import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  image: {
    backgroundColor: 'rgba(228,22,145,255)',
    height: 60,
    width: 60,
    borderRadius: 18,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
  },
});
