import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {
  setVehicleFee,
  setVehicle,
  setEstTime,
} from '../../../store/actions/vehicle';
import {rupiahFormatter} from '../../../utils/currency/currencyFormatter';

import styles from './styles';

const VehicleItem = props => {
  const vehicleReducer = useSelector(
    state => state.vehicleReducer,
    shallowEqual,
  );
  const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const dispatch = useDispatch();

  const [fee, setFee] = useState(0);

  const {vehicle, distance} = props;
  const setVehicleData = (data, time) => {
    dispatch(setVehicle(data));
    dispatch(setVehicleFee(fee));
    dispatch(setEstTime(time));
  };

  useEffect(() => {
    const normalizeDistance = distance < 1 ? 1 : distance;
    const calculatedFee =
      Math.ceil((vehicle.fee * normalizeDistance) / 1000) * 3000 +
      vehicle.serviceFee;
    setFee(calculatedFee);
    return () => {};
  }, [vehicle, distance]);

  const estTime = () => {
    const min = distance / vehicle.minSpeed;
    const max = distance / vehicle.maxSpeed;
    if (Math.ceil(max * 60) === Math.ceil(min * 60)) {
      return `${Math.ceil(min * 60)} mins`;
    }

    return `${Math.ceil(max * 60)}-${Math.ceil(min * 60)} mins`;
  };

  console.log(vehicleReducer, mapReducer);

  return (
    <TouchableOpacity onPress={() => setVehicleData(vehicle, estTime())}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Image
            source={vehicle.image}
            style={styles.image}
            resizeMode="contain"
          />
          <View>
            <Text
              style={[
                styles.name,
                vehicleReducer.vehicle.id === vehicle.id && styles.activeName,
              ]}>
              {vehicle.name}
            </Text>
            <Text style={styles.subText}>
              {vehicle.passenger || 0}
              {vehicle.passenger === '1' ? ' person' : ' people'}
            </Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.price}>{rupiahFormatter(fee)}</Text>
          <Text style={styles.subText}>{estTime()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VehicleItem;
