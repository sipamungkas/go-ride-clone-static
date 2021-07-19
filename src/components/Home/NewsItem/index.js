import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

const Information = props => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../../assets/images/j3k.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Information;
