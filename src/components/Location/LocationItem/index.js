import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const LocationItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Icon
          style={styles.marker}
          name="map-marker-alt"
          size={30}
          color="rgba(0,0,0,0.3)"
        />
        <View style={styles.location}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.address}>{props.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationItem;
