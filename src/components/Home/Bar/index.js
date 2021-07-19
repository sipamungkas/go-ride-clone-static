import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Bar = props => {
  return (
    <View style={{...styles.bar, marginBottom: props.marginBottom || 20}} />
  );
};

export default Bar;
