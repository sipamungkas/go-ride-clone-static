import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const PrimaryButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.setBtn, props.style]}>{props.children}</View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
