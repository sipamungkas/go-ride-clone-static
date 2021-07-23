import React from 'react';
import {View, Text} from 'react-native';
import Box from '../../UI/Box';
import styles from './styles';

const Income = () => {
  return (
    <Box marginTop={30} style={styles.boxStyle}>
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>Pendapatan</Text>
        <Text style={styles.rightText}>Rp.12.000</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>Poin</Text>
        <Text style={styles.rightText}>+1</Text>
      </View>
    </Box>
  );
};

export default Income;
