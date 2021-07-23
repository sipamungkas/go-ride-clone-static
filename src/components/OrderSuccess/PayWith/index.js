import React from 'react';
import {View, Text, Image} from 'react-native';
import Box from '../../UI/Box';
import styles from './styles';

const PayWith = () => {
  return (
    <Box marginTop={30}>
      <View>
        <View style={styles.payWithContainer}>
          <Text style={styles.payWithText}>Dibayar pakai</Text>
          <Text style={styles.service}>LinkAja</Text>
        </View>
        <View style={styles.serviceDetail}>
          <Image
            source={require('../../../assets/images/link-aja.png')}
            style={styles.image}
          />
          <Text style={styles.totalFee}>RP.15.000</Text>
        </View>
      </View>
    </Box>
  );
};

export default PayWith;
