import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';

const PrimaryButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <View style={[styles.setBtn, props.style]}>{props.children}</View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
