import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, shallowEqual} from 'react-redux';
import EditButton from '../../UI/EditButton';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Form = props => {
  const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const {origin, destination} = mapReducer;
  const navigation = useNavigation();

  const showName = data => {
    if (data?.name === data?.address) {
      return data?.name;
    }
    return `${data?.name}, ${data?.address}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.groupIcon}>
        <View style={styles.iconContainer}>
          <View style={styles.primaryCircle}>
            <Icon name="arrow-up" size={20} color="white" />
          </View>
        </View>

        <View style={[styles.iconContainer, styles.orangeShadow]}>
          <View style={styles.orangeCircle}>
            <View style={styles.dot} />
          </View>
        </View>
      </View>
      <View style={styles.detail}>
        <View style={styles.formContainer}>
          <Text style={styles.text} numberOfLines={1}>
            {showName(origin)}
          </Text>
          <View style={styles.divider} />
          <Text style={styles.text} numberOfLines={1}>
            {showName(destination)}
          </Text>
        </View>
        <EditButton
          onPress={() =>
            navigation.replace('Location', {reset: true, inputFocus: 1})
          }
        />
      </View>
    </View>
  );
};

export default Form;
