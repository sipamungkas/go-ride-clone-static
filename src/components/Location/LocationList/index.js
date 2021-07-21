import React from 'react';
import {View, Text} from 'react-native';
import LocationItem from '../LocationItem';
import styles from './styles';

const LocationList = props => {
  if (
    (props.originText.length > 3 || props.destinationText.length > 3) &&
    props.filteredLocation
  ) {
    return (
      <View style={styles.container}>
        {props.filteredLocation.map(location => (
          <LocationItem
            inputFocus={props.inputFocus}
            key={location.latitude}
            name={location.name}
            address={location.address}
            latitude={location.latitude}
            longitude={location.longitude}
            onPress={() => props.setLocation(location)}
          />
        ))}
      </View>
    );
  } else if (props.filteredLocation && props.filteredLocation.length > 0) {
    return (
      <View style={styles.notFound}>
        <Text>Location not found!</Text>
      </View>
    );
  } else {
    return <View />;
  }
};

export default LocationList;
