import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {setVehicleId} from '../../../store/actions/vehicle';

import styles from './styles';

const VehicleItem = props => {
  const vehicleReducer = useSelector(
    state => state.vehicleReducer,
    shallowEqual,
  );
  const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const dispatch = useDispatch();
  const setVehicle = id => {
    dispatch(setVehicleId(id));
  };

  console.log(vehicleReducer, mapReducer);

  return (
    <TouchableOpacity onPress={() => setVehicle(props.id)}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Image
            source={props.image}
            style={styles.image}
            resizeMode="contain"
          />
          <View>
            <Text
              style={[
                styles.name,
                vehicleReducer.vehicleId === props.id && styles.activeName,
              ]}>
              {props.name}
            </Text>
            <Text style={styles.subText}>
              {props.passenger || 0}{' '}
              {props.passenger === '1' ? 'person' : 'people'}
            </Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.price}>{props.price || '100000'}</Text>
          <Text style={styles.subText}>{props.time || '1-2 mins'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VehicleItem;
