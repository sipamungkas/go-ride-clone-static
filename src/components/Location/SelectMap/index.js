import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import COLORS from '../../../Colors';

import styles from './styles';

const SelectMap = props => {
  return (
    <View style={props.style}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
          <Icon
            name="map"
            size={15}
            color={COLORS.PRIMARY}
            style={styles.icon}
          />
          <Text style={styles.text}>Select via map</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SelectMap;
