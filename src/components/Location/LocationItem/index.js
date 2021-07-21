import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {shallowEqual, useSelector} from 'react-redux';
import {getDistance} from 'geolib';

import styles from './styles';

const LocationItem = props => {
  const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const distance = () => {
    if (mapReducer?.origin?.latitude) {
      return getDistance(
        {
          latitude: mapReducer.origin.latitude,
          longitude: mapReducer.origin.longitude,
        },
        {
          latitude: props.latitude,
          longitude: props.longitude,
        },
      );
    } else {
      return 0;
    }
  };
  const convertDistanceToKm = () => {
    const distanceInKm = distance() === 0 ? 0 : distance() / 1000;
    return `${Number(distanceInKm).toFixed(1)} km`;
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.marker}>
          <Icon name="map-marker-alt" size={30} color="rgba(0,0,0,0.3)" />
          {distance() > 0 && (
            <Text style={styles.distance}>{convertDistanceToKm(distance)}</Text>
          )}
        </View>
        <View style={styles.location}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.address}>{props.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationItem;
