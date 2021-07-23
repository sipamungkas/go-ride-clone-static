import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const LocateMe = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Pressable onPress={props.onPress}>
        <Icon name="crosshairs-gps" color="black" size={25} />
      </Pressable>
    </View>
  );
};

export default LocateMe;
