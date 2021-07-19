import React from 'react';
import {ScrollView} from 'react-native';
import ContentMenu from '../ContentMenu';
import styles from './styles';

const MenuList = [
  'Apa aja',
  'COVID-19',
  'Donasi',
  'Makanan',
  'J3K',
  'Games',
  'Bioskop',
];

const ContentMenuList = props => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {MenuList.map((menu, index) => (
        <ContentMenu
          key={menu}
          text={menu}
          active={index === props.contentMenu}
          onPress={() => {
            props.setContentMenu(index);
          }}
        />
      ))}
    </ScrollView>
  );
};

export default ContentMenuList;
