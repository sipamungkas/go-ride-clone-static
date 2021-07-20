import React from 'react';
import {View, Text} from 'react-native';
import LocationItem from '../LocationItem';
import styles from './styles';

const LocationList = props => {
  if (props.originText.length > 3 && props.filteredLocation.length > 0) {
    return (
      <View style={styles.container}>
        {props.filteredLocation.map(location => (
          <LocationItem
            name={location.name}
            address={location.address}
            onPress={() => props.setLocation(location)}
          />
        ))}
      </View>
    );
  }
  return <Text>Location not found!</Text>;
};

export default LocationList;
