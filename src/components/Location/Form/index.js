import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Form = props => {
  const showName = data => {
    if (data?.name === data?.address) {
      return data?.name;
    }
    return `${data?.name}, ${data?.address}`;
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.groupIcon}>
        <View style={styles.iconContainer}>
          <View style={styles.primaryCircle}>
            <Icon name="arrow-up" size={20} color="white" />
          </View>
        </View>
        <Icon name="ellipsis-vertical" size={15} color="rgba(0,0,0,0.3)" />
        <View style={[styles.iconContainer, styles.orangeShadow]}>
          <View style={styles.orangeCircle}>
            <View style={styles.dot} />
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          value={showName(props.origin || props.originText)}
          onFocus={() => {
            props.setInputFocus(1);
            props.resetInput(1);
          }}
          style={styles.textInput}
          placeholder="Your current location"
          onChangeText={text => props.setTextInput(text)}
        />
        <View style={styles.divider} />
        <TextInput
          value={showName(props.destination || props.destinationText)}
          onFocus={() => {
            props.setInputFocus(2);
            props.resetInput(2);
          }}
          style={styles.textInput}
          placeholder="Your destination"
          onChangeText={text => props.setTextInput(text)}
        />
      </View>
    </View>
  );
};

export default Form;
