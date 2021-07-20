import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from '../../components/Location/Header';
import Form from '../../components/Location/Form';
import SelectMap from '../../components/Location/SelectMap';

import styles from './styles';

const Location = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" animated barStyle="dark-content" />
      <Header />
      <Form style={styles.formContainer} />
      <SelectMap style={styles.selectMapContainer} onPress={() => {}} />
    </View>
  );
};

export default Location;
