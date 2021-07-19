import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Badge from '../Badge';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.tabMenu}>
        <View style={styles.badgeContainer}>
          <Badge counter={5} />
        </View>
        <Icon name="sale" size={25} color="#fff" style={styles.tabIcon} />
        <Text style={styles.text}>Promo</Text>
      </View>
      <View style={[styles.tabMenu, styles.tabMenuActive]}>
        <Icon name="home" size={25} color="#fff" style={styles.tabIcon} />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.tabMenu}>
        <View style={styles.badgeContainer}>
          <Badge dot />
        </View>
        <Icon name="chat" size={25} color="#fff" style={styles.tabIcon} />
        <Text style={styles.text}>Chat</Text>
      </View>
    </View>
  );
};

export default Header;
