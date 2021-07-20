import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import locations from '../../../data/locations';

const Form = props => {
  const [originText, setOriginText] = useState();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const findLocation = (name, type) => {
    const regex = new RegExp(name, 'i');
    // const regex = /${name}\/i;
    const data = locations.filter(
      location => location.name.match(regex) || location.address.match(regex),
    );
    console.log(data);
    if (type === 1) {
      setOrigin(data);
    } else {
      setDestination(data);
    }
  };

  console.log(origin, 'origin');
  console.log(destination, 'destination');

  useEffect(() => {
    const identifier = setTimeout(() => {
      findLocation(originText);
    }, 2000);
    return () => {
      clearTimeout(identifier);
    };
  }, [originText]);

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
          style={styles.textInput}
          placeholder="Your current location"
          onChangeText={text => setOriginText(text)}
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
