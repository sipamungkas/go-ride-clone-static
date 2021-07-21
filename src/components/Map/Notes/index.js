import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../Colors';
import styles from './styles';

const Notes = () => {
  return (
    <View style={styles.container}>
      <Icon name="document-text-outline" size={20} color={COLORS.PRIMARY} />
      <TextInput
        style={styles.textInput}
        placeholder="Add notes for your driver"
      />
    </View>
  );
};

export default Notes;
