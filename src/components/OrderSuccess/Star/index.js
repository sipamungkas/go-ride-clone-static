import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Star = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.container}>
        <Icon
          name="star"
          size={30}
          color={props.active ? 'rgba(250,173,57,255)' : 'rgba(0,0,0,0.2)'}
        />
        <Text>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default Star;
