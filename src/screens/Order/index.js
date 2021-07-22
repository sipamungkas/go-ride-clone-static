import React, {useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

import OriginMarker from '../../components/Map/OriginMarker';
import DestinationMarker from '../../components/Map/DestinationMarker';

import styles from './styles';
const Order = () => {
  const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const {destination, origin} = mapReducer;
  const _map = useRef(null);

  useEffect(() => {
    if (_map.current) {
      _map.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: {top: 10, bottom: 10, left: 40, right: 40},
      });
    }
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={_map}
        showsCompass={false}
        initialRegion={{
          latitude: -6.175221730235031,
          longitude: 106.82718498323636,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          ...mapReducer.destination,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        {/* {selectMarker && (
          <MarkerAnimated
            key={'2'}
            coordinate={{
              latitude: selectMarker.latitude,
              longitude: selectMarker.longitude,
            }}
            title={'Pick up location'}
          />
        )} */}
        {destination && (
          <Marker
            identifier="destination"
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}>
            <DestinationMarker {...destination} />

            <Callout>{/* <MyCustomCalloutView {...marker} /> */}</Callout>
          </Marker>
        )}
        {origin && (
          <Marker
            identifier="origin"
            coordinate={{
              latitude: origin.latitude,
              longitude: origin.longitude,
            }}>
            <OriginMarker {...origin} />

            <Callout>{/* <MyCustomCalloutView {...marker} /> */}</Callout>
          </Marker>
        )}

        {/* <Polyline coordinates={[IRA, BAKSO]} /> */}
      </MapView>
    </View>
  );
};

export default Order;
