import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = props => {
  return (
    <View style={[styles.container, props.styles]}>
      <Icon name="close" size={30} color="black" style={styles.icon} />
      <Text style={styles.title}>Set pickup location</Text>
    </View>
  );
};

export default Header;
