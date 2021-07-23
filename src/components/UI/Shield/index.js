import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../Colors';

import styles from './styles';

const Shield = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Pressable onPress={props.onPress}>
        <Icon name="ios-shield-checkmark" color={COLORS.PRIMARY} size={25} />
      </Pressable>
    </View>
  );
};

export default Shield;
