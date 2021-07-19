import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

const ContentMenu = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={[styles.container, props.active && styles.active]}>
        <Text style={props.active ? styles.textActive : styles.text}>
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default ContentMenu;
