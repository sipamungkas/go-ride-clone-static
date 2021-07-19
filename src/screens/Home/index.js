import React, {useState} from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

import Header from '../../components/Home/Header';
import Bar from '../../components/Home/Bar';
import SearchBox from '../../components/Home/SearchBox';
import ProfileIcon from '../../components/Home/Profile';
import Payment from '../../components/Home/Payment';
import ContentMenuList from '../../components/Home/ContentMenuList';
import Information from '../../components/Home/Information';
import NewsList from '../../components/Home/NewsList';

import styles from './styles';
import COLORS from '../../Colors';

const Home = () => {
  const [contentMenu, setContentMenu] = useState(0);

  return (
    <>
      <StatusBar animated backgroundColor={COLORS.SECONDARY} />
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentStyle}>
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
        <Information
          title="Psst.. Keamanan kamu, prioritas kami."
          content="Deretan Rekan Usaha Gopay dengan protokol kebersihan buat belanja bulanan hingga beli vitamin harian!"
        />
        <NewsList />
        <Information
          title="Jangan lupa 3 M"
          content="Saat menerima pesanan kamu jangan lupa untuk menjaga jarak, cuci tangan setelah menerima pesanan kamu. Cek kebersihan selalu."
        />
      </ScrollView>
    </>
  );
};

export default Home;
