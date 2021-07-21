import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const DestinationMarker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.orangeCircle}>
          <View style={styles.dot} />
        </View>
      </View>
      <View style={styles.pin} />
    </View>
  );
};

export default DestinationMarker;
