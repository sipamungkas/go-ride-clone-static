import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Star from '../Star';
import styles from './styles';

const stars = [
  {id: 1, text: 'Kasar'},
  {id: 2, text: 'Jengkelin'},
  {id: 3, text: 'Nyebelin'},
  {id: 4, text: 'Oke lah'},
  {id: 5, text: 'Baik bgt!'},
];

const Rate = () => {
  const [rate, setRate] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bagaimana customer Anda?</Text>
      <View style={styles.starsContainer}>
        {stars.map(star => (
          <Star
            key={star.id}
            id={star.id}
            active={star.id <= rate}
            text={star.text}
            onPress={() => setRate(star.id)}
          />
        ))}
      </View>
    </View>
  );
};

export default Rate;
