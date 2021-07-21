import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const BackButton = props => {
  return (
    <View
      style={[
        styles.container,
        props.inputFocus === 1 ? styles.pickup : styles.destination,
      ]}>
      <Pressable onPress={props.onPress}>
        <Icon name="arrow-back-outline" color="black" size={25} />
      </Pressable>
    </View>
  );
};

export default BackButton;
