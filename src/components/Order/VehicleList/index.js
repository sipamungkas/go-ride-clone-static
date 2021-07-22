import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import VehicleItem from '../VehicleItem';
import styles from './styles';
import vehicles from '../../../data/vehicles';

const VehicleList = props => {
  return (
    <ScrollView style={styles.container}>
      {vehicles.map((item, index) => (
        <VehicleItem
          key={item.id}
          name={item.name}
          id={item.id}
          image={item.image}
          passenger={item.pasenger}
        />
      ))}
    </ScrollView>
  );
};

export default VehicleList;
