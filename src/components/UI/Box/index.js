import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Box = props => {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: props.marginTop || 0,
          marginBottom: props.marginBottom || 0,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

export default Box;
