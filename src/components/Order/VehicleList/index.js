import React from 'react';
import {ScrollView} from 'react-native';
import VehicleItem from '../VehicleItem';
import styles from './styles';
import vehicles from '../../../data/vehicles';
import {getDistance, convertDistance} from 'geolib';
import {shallowEqual, useSelector} from 'react-redux';

const VehicleList = props => {
  const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const {origin, destination} = mapReducer;

  const distance = () => {
    if (origin?.latitude) {
      return getDistance(
        {
          latitude: origin.latitude,
          longitude: origin.longitude,
        },
        {
          latitude: destination.latitude,
          longitude: destination.longitude,
        },
      );
    } else {
      return 0;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {vehicles.map((item, index) => (
        <VehicleItem
          vehicle={item}
          key={item.id}
          distance={convertDistance(distance(), 'km').toFixed(2)}
        />
      ))}
    </ScrollView>
  );
};

export default VehicleList;
