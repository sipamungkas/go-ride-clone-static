import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Bar from '../../Home/Bar';
import Icon from 'react-native-vector-icons/Ionicons';
import {rupiahFormatter} from '../../../utils/currency/currencyFormatter';
import styles from './styles';
import VehicleList from '../VehicleList';
import PrimaryButton from '../../UI/PrimaryButton';
import {shallowEqual, useSelector} from 'react-redux';

const CardDetail = props => {
  const vehicleReducer = useSelector(
    state => state.vehicleReducer,
    shallowEqual,
  );

  return (
    <View style={styles.container}>
      <Bar marginBottom={1} />
      <VehicleList />
      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfo}>
          <Image
            source={require('../../../assets/images/link-aja.png')}
            style={styles.image}
          />
          <Text style={styles.linkAjaText}>LinkAja</Text>
        </View>
        <Icon name="ellipsis-horizontal-circle-sharp" size={25} />
      </View>

      <PrimaryButton style={styles.paylaterContainer}>
        <Text style={styles.tryPaylater}>
          Try paylater and pay at the end of the month
        </Text>
        <View style={styles.tryButton}>
          <Text style={styles.tryText}>Try</Text>
        </View>
      </PrimaryButton>

      <PrimaryButton onPress={props.onSet} disabled={props.disabled}>
        <Text style={styles.setText}>Order GoRide</Text>
        <View style={styles.rightContainer}>
          <Text style={styles.price}>
            {rupiahFormatter(vehicleReducer.totalFee)}
          </Text>
          <Icon name="arrow-forward-circle" size={30} color="#fff" />
        </View>
      </PrimaryButton>
    </View>
  );
};

export default CardDetail;
