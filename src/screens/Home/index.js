import React, {useState} from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

import Header from '../../components/Home/Header';
import Bar from '../../components/Home/Bar';
import SearchBox from '../../components/Home/SearchBox';
import ProfileIcon from '../../components/Home/Profile';
import Payment from '../../components/Home/Payment';
import ContentMenuList from '../../components/Home/ContentMenuList';

import styles from './styles';
import COLORS from '../../Colors';

const Home = () => {
  const [contentMenu, setContentMenu] = useState(0);

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
        <Text style={styles.textContent}>Konten buat kamu</Text>
        <ContentMenuList
          contentMenu={contentMenu}
          setContentMenu={setContentMenu}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
