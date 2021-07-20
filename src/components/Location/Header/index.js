import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

import styles from './styles';

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.styles]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="close" size={30} color="black" style={styles.icon} />
      </Pressable>
      <Text style={styles.title}>Set pickup location</Text>
    </View>
  );
};

export default Header;
