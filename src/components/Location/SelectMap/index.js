import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import COLORS from '../../../Colors';

import styles from './styles';

const SelectMap = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={props.style}>
        <View style={styles.container}>
          <Icon
            name="map"
            size={20}
            color={COLORS.PRIMARY}
            style={styles.icon}
          />
          <Text style={styles.text}>Select via map</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SelectMap;
