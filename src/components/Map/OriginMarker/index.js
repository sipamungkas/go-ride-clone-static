import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const OriginMarker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.primaryCircle}>
          <Icon name="arrow-up" size={20} color="white" />
        </View>
      </View>
      <View style={styles.pin} />
    </View>
  );
};

export default OriginMarker;
