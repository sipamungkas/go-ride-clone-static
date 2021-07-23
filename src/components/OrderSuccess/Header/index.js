import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="motorcycle" size={30} color="#fff" />
      </View>
      <Text style={styles.text}>Terima Kasih!</Text>
    </View>
  );
};

export default Header;
