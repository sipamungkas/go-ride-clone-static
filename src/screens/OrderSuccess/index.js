import React from 'react';
import {View, Text} from 'react-native';
import Bar from '../../components/Home/Bar';
import Header from '../../components/OrderSuccess/Header';
import Income from '../../components/OrderSuccess/Income';
import PayWith from '../../components/OrderSuccess/PayWith';
import Rate from '../../components/OrderSuccess/Rate';

import styles from './styles';

const OrderSuccess = () => {
  return (
    <View style={styles.container}>
      <Bar marginBottom={1} />
      <Bar />
      <Header />
      <PayWith />
      <Income />
      <Text style={styles.orderId}>GR1203998109238</Text>
      <Rate />
    </View>
  );
};

export default OrderSuccess;
