import React, {useEffect} from 'react';
import {FlatList, LogBox, Text, View} from 'react-native';
import GopayCard from '../Gopay';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import COLORS from '../../../Colors';
import Badge from '../Badge';

const payments = [1, 2];

const Payment = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.indicatorActive]} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        inverted
        keyExtractor={item => item}
        data={payments}
        renderItem={() => <GopayCard />}
      />

      <View style={styles.groupIcon}>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Icon name="arrow-up" color={COLORS.BLUE} size={15} />
          </View>
          <Text style={styles.text}>Bayar</Text>
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Icon name="add" color={COLORS.BLUE} size={20} />
          </View>
          <Text style={styles.text}>Top Up</Text>
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <View style={styles.badgeContainer}>
              <Badge counter={6} outline />
            </View>
            <Icon name="rocket" color={COLORS.BLUE} size={14} />
          </View>
          <Text style={styles.text}>Eksplor</Text>
        </View>
      </View>
    </View>
  );
};

export default Payment;
