import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import Header from '../../components/Location/Header';
import Form from '../../components/Location/Form';
import SelectMap from '../../components/Location/SelectMap';
import Illustration from '../../components/Location/Illustration';

import styles from './styles';

const Location = () => {
  return (
    <View style={styles.viewContainer}>
      <StatusBar backgroundColor="#fff" animated barStyle="dark-content" />
      <Header />
      <ScrollView style={styles.container}>
        <Form style={styles.formContainer} />
        <SelectMap style={styles.selectMapContainer} onPress={() => {}} />
        <Illustration />
      </ScrollView>
    </View>
  );
};

export default Location;
