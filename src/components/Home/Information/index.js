import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Information = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.content}</Text>
    </View>
  );
};

export default Information;
