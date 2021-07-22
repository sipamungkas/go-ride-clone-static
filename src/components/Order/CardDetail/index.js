import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Bar from '../../Home/Bar';
import Icon from 'react-native-vector-icons/Ionicons';
import {rupiahFormatter} from '../../../utils/currency/currencyFormatter';
import styles from './styles';
import VehicleList from '../VehicleList';

const CardDetail = props => {
  const {distance} = props;
  const fee = () => {
    const normalizeDistance = distance < 1 ? 1 : distance;
    const price = normalizeDistance * props.fee + props.serviceFee;
    return price;
  };
  return (
    <View style={styles.container}>
      <Bar marginBottom={0} />
      <VehicleList />
      <TouchableOpacity onPress={props.onSet}>
        <View style={styles.setBtn}>
          <Text style={styles.setText}>Order GoRide</Text>
          <View style={styles.rightContainer}>
            <Text style={styles.price}>{rupiahFormatter(fee())}</Text>
            <Icon name="arrow-forward-circle" size={30} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardDetail;
