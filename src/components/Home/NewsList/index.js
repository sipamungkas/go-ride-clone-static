import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import NewsItem from '../NewsItem';

import styles from './styles';

const NewsList = props => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </ScrollView>
  );
};

export default NewsList;
