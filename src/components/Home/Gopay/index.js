import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

import GopayLogo from '../../../assets/logo/gopay-logo.svg';

const Gopay = () => {
  return (
    <View style={styles.container}>
      <GopayLogo heigth={20} width={70} style={styles.logo} />
      <Text style={styles.balance}>Rp14.500</Text>
      <Text style={styles.cta}>Klik & cek riwayat</Text>
    </View>
  );
};

export default Gopay;
