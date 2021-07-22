import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const EditButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.editBtn}>
        <Text style={styles.editText}>Edit</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EditButton;
