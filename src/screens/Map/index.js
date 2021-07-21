import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';

import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  AnimatedRegion,
  Animated,
  MarkerAnimated,
  Polyline,
  Callout,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import locations from '../../data/locations';
import styles from './styles';

const Map = () => {
  const [position, setPosition] = useState();
  const [originMarker, setOriginMarker] = useState();
  const [region, setRegion] = useState({
    latitude: -6.501872821370105,
    longitude: 110.84462898465667,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const _map = useRef(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      currentPosition => {
        setRegion(prevState => {
          return {
            ...prevState,
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
          };
        });
        setPosition(currentPosition);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    return () => {};
  }, []);

  const IRA = {
    latitude: -6.500998714579703,
    longitude: 110.84593790262774,
  };

  const BAKSO = {
    latitude: -6.501872821370105,
    longitude: 110.84462898465667,
  };

  useEffect(() => {
    if (_map.current && position) {
      _map.current.animateCamera(
        {
          center: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          zoom: 15,
        },
        5000,
      );
    }
  }, [position]);
  console.log(originMarker);
  return (
    <View style={styles.container}>
      <MapView
        showsCompass={false}
        initialRegion={{
          latitude: -6.175221730235031,
          longitude: 106.82718498323636,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={_map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={region}
        onPoiClick={data => {
          console.log(data.name);
        }}
        showsUserLocation={true}
        onRegionChangeComplete={newRegion => {
          setRegion(newRegion);
          setOriginMarker(newRegion);
        }}>
        {/* {originMarker && (
          <MarkerAnimated
            key={'2'}
            coordinate={{
              latitude: originMarker.latitude,
              longitude: originMarker.longitude,
            }}
            title={'Pick up location'}
          />
        )} */}

        {/* <Polyline coordinates={[IRA, BAKSO]} /> */}
      </MapView>
    </View>
  );
};

export default Map;
