import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <Icon name="search-outline" size={25} color="rgba(0,0,0,0.7)" />
      <TextInput
        style={styles.textInput}
        placeholder="Pesen kopi, yuk?"
        placeholderTextColor="rgba(0,0,0,0.5)"
      />
    </View>
  );
};

export default SearchBox;
