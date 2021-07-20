import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import IconIsto from 'react-native-vector-icons/Fontisto';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Bar from '../Bar';
import {useNavigation} from '@react-navigation/native';

const FAB = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Bar marginBottom={10} />

      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
          <View style={styles.iconContainer}>
            <View style={styles.circle}>
              <IconIsto name="motorcycle" size={20} color="white" />
            </View>
            <Text style={styles.text}>GoRide</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.iconContainer}>
            <View style={styles.circle}>
              <IconIsto name="car" size={20} color="white" />
            </View>
            <Text style={styles.text}>GoCar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.iconContainer}>
            <View style={[styles.circle, styles.red]}>
              <IconFA name="spoon" size={20} color="white" />
            </View>
            <Text style={styles.text}>GoFood</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.iconContainer}>
            <View style={[styles.circle, styles.red]}>
              <IconFA name="shopping-cart" size={20} color="white" />
            </View>
            <Text style={styles.text}>GoMart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FAB;
