import React from 'react';

import {Text, View} from 'react-native';

import styles from './styles';

const Badge = props => {
  return (
    <View style={[styles.badge, props.outline && styles.badgeOutline]}>
      {props.dot && <View style={styles.badgeWhiteDot} />}
      {props.counter && (
        <Text style={styles.badgeCounter}>{props.counter}</Text>
      )}
    </View>
  );
};

export default Badge;
