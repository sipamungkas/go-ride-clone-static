import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 10,
    paddingBottom: 200,
    flexGrow: 1,
  },
  contentStyle: {},
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  textContent: {
    marginVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
