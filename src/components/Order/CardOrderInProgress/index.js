import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Bar from '../../Home/Bar';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFI from 'react-native-vector-icons/Fontisto';

import styles from './styles';

import PrimaryButton from '../../UI/PrimaryButton';
import {shallowEqual, useSelector} from 'react-redux';

const CardOrderInProgress = props => {
  const vehicleReducer = useSelector(
    state => state.vehicleReducer,
    shallowEqual,
  );

  const {time} = vehicleReducer;

  return (
    <>
      <View style={styles.greenContainer}>
        <View style={styles.iconContainer}>
          <IconFI name="angle-dobule-right" size={15} color="#fff" />
        </View>
        <Text style={styles.driverText}>Driver akan sampai dalam </Text>
        <View style={styles.driverDuration}>
          <Text style={styles.driverDurationText}>{time}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Bar marginBottom={1} />
        <View style={styles.rowContainer}>
          <View style={styles.driverAndMotorInformation}>
            <Text style={styles.motorNumber}>R6508HP</Text>
            <View style={styles.driverInformation}>
              <Text style={styles.driverName}>Samikin</Text>
              <View style={styles.trophyContainer}>
                <Icon
                  name="trophy"
                  size={20}
                  color="#d77435"
                  style={styles.icon}
                />
                <Text style={styles.trophyText}>Driver unggulan</Text>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/gojek-driver.png')}
            />
            <View style={styles.ratingContainer}>
              <Icon name="star" size={12} color="#fabd01" />
              <Text style={styles.ratingText}>5.0</Text>
            </View>
          </View>
        </View>
        <PrimaryButton style={styles.done} onPress={props.onSet}>
          <Text style={styles.setText}>Perjalanan Selesai</Text>
        </PrimaryButton>
      </View>
    </>
  );
};

export default CardOrderInProgress;
