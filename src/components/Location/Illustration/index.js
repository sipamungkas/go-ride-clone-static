import React from 'react';
import {View, Text, Image} from 'react-native';
import ThumbsUp from '../../../assets/images/thumbs-up.png';
import styles from './styles';

const Illustration = () => {
  return (
    <View style={styles.container}>
      <Image source={ThumbsUp} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>That's right, order Gojek now</Text>
        <Text style={styles.subtitle}>
          Less stress on the road, more joy on the ride. Aaah
        </Text>
      </View>
    </View>
  );
};

export default Illustration;
