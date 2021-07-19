import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ProfileIcon = () => {
  return (
    <View style={styles.profile}>
      <Icon name="person" size={22} color="white" />
    </View>
  );
};
export default ProfileIcon;
