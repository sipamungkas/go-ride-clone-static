import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Form = props => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.groupIcon}>
        <View style={styles.iconContainer}>
          <View style={styles.primaryCircle}>
            <Icon name="arrow-up" size={30} color="white" />
          </View>
        </View>
        <Icon name="ellipsis-vertical" size={20} color="rgba(0,0,0,0.5)" />
        <View style={[styles.iconContainer, styles.orangeShadow]}>
          <View style={styles.orangeCircle}>
            <View style={styles.dot} />
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your current location"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Your current location"
        />
      </View>
    </View>
  );
};

export default Form;
