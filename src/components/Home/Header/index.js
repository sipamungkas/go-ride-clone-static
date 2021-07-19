import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.tabMenu}>
        <View style={styles.badge}>
          <Text style={styles.badgeCounter}>5</Text>
        </View>
        <Icon name="sale" size={25} color="#fff" style={styles.tabIcon} />
        <Text style={styles.text}>Promo</Text>
      </View>
      <View style={[styles.tabMenu, styles.tabMenuActive]}>
        <Icon name="home" size={25} color="#fff" style={styles.tabIcon} />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.tabMenu}>
        <View style={styles.badge}>
          <View style={styles.badgeWhiteDot} />
        </View>
        <Icon name="chat" size={25} color="#fff" style={styles.tabIcon} />
        <Text style={styles.text}>Chat</Text>
      </View>
    </View>
  );
};

export default Header;
