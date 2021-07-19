import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';

import Header from '../../components/Home/Header';
import Bar from '../../components/Home/Bar';
import SearchBox from '../../components/Home/SearchBox';
import ProfileIcon from '../../components/Home/Profile';
import Payment from '../../components/Home/Payment';

import styles from './styles';
import COLORS from '../../Colors';

const Home = () => {
  return (
    <View>
      <StatusBar animated backgroundColor={COLORS.SECONDARY} />
      <Header />
      <ScrollView style={styles.container}>
        <Bar />
        <View style={styles.searchContainer}>
          <SearchBox />
          <ProfileIcon />
        </View>
        <Payment />
      </ScrollView>
    </View>
  );
};

export default Home;
