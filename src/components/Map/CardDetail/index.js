import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Notes from '../Notes';
import EditButton from '../../UI/EditButton';

import styles from './styles';

const CardDetail = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {props.inputFocus === 1
            ? 'Set pickup location'
            : 'Set Destination location'}
        </Text>
        <EditButton onPress={props.onEdit} />
      </View>
      <View style={styles.information}>
        {props.inputFocus === 1 ? (
          <View style={styles.iconContainer}>
            <View style={styles.primaryCircle}>
              <Icon name="arrow-up" size={20} color="white" />
            </View>
          </View>
        ) : (
          <View style={[styles.iconContainer, styles.orangeShadow]}>
            <View style={styles.orangeCircle}>
              <View style={styles.dot} />
            </View>
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.address}>{props.address}</Text>
        </View>
      </View>
      {props.inputFocus === 1 && <Notes />}
      <TouchableOpacity onPress={props.onSet}>
        <View style={styles.setBtn}>
          <Text style={styles.setText}>
            {props.inputFocus === 1
              ? 'Set pickup location'
              : 'Set destination location'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardDetail;
