import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import COLORS from '../../Colors';
import Header from '../../components/Home/Header';

export default function Home() {
  return (
    <View>
      <StatusBar animated backgroundColor={COLORS.PRIMARY} />
      <Header />
      <Text>Hello World!</Text>
    </View>
  );
}
