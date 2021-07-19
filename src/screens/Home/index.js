import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import COLORS from '../../Colors';
import Header from '../../components/Home/Header';
import Bar from '../../components/Home/Bar';
import styles from './styles';

const Home = () => {
  return (
    <View>
      <StatusBar animated backgroundColor={COLORS.PRIMARY} />
      <Header />
      <ScrollView style={styles.container}>
        <Bar />
      </ScrollView>
    </View>
  );
};

export default Home;
