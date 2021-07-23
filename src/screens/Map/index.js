import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import OriginMarker from '../../components/Map/OriginMarker';
import DestinationMarker from '../../components/Map/DestinationMarker';
import CardDetail from '../../components/Map/CardDetail';
import BackButton from '../../components/Map/BackButton';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import locations from '../../data/locations';

import {setDestination, setOrigin} from '../../store/actions/map';

import styles from './styles';
import LocateMe from '../../components/UI/LocatMe';

const Map = props => {
  const {inputFocus} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [selectMarker, setSelectMarker] = useState();
  const [region, setRegion] = useState({
    latitude: -6.501872821370105,
    longitude: 110.84462898465667,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const _map = useRef(null);
  const onSetHandler = () => {
    const data = {
      latitude: selectMarker?.latitude || null,
      longitude: selectMarker?.longitude || null,
      name: selectMarker?.name || 'Unnamed road',
      address: selectMarker?.address || 'Unnamed road',
    };

    if (inputFocus === 1) {
      dispatch(setOrigin(data));
    } else {
      dispatch(setDestination(data));
    }
    navigation.goBack();
  };
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
        setSelectMarker({
          name: 'Unnamed road',
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
          address: null,
        });
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    return () => {};
  }, []);

  const onMapPress = data => {
    const marker = {
      name: data.nativeEvent?.name || 'Unnamed road',
      latitude: data.nativeEvent.coordinate.latitude,
      longitude: data.nativeEvent.coordinate.longitude,
      address: findAddressByName(selectMarker?.name || 'Unnamed road'),
    };
    setRegion(prevState => {
      return {...prevState, marker};
    });
    setSelectMarker(marker);
  };

  const locateMe = () => {
    Geolocation.getCurrentPosition(
      currentPosition => {
        setRegion(prevState => {
          return {
            ...prevState,
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
          };
        });
        setSelectMarker({
          name: 'Unnamed road',
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
          address: null,
        });
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const onPoiClickHandler = data => {
    const address = findAddressByName(selectMarker?.name || 'Unnamed road');
    const poi = {
      name: data.nativeEvent.name,
      latitude: data.nativeEvent.coordinate.latitude,
      longitude: data.nativeEvent.coordinate.longitude,
      address,
    };

    setSelectMarker(poi);
    setRegion(prevState => {
      return {...prevState, latitude: poi.latitude, longitude: poi.longitude};
    });
  };

  const findAddressByName = name => {
    const sanitize = name.trim().replace(/(\r\n|\n|\r)/i, ' ');
    const location = locations.find(data => data.name === sanitize);
    return location?.address || 'Unnamed road';
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsCompass={false}
        initialRegion={{
          latitude: -6.175221730235031,
          longitude: 106.82718498323636,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={_map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={region}
        onPoiClick={onPoiClickHandler}
        showsUserLocation={true}
        onRegionChangeComplete={newRegion => {
          setRegion(newRegion);
        }}
        onPress={onMapPress}>
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
        {selectMarker && (
          <Marker
            coordinate={{
              latitude: selectMarker.latitude,
              longitude: selectMarker.longitude,
            }}>
            {inputFocus === 1 ? (
              <OriginMarker {...selectMarker} />
            ) : (
              <DestinationMarker {...selectMarker} />
            )}
            <Callout>{/* <MyCustomCalloutView {...marker} /> */}</Callout>
          </Marker>
        )}

        {/* <Polyline coordinates={[IRA, BAKSO]} /> */}
      </MapView>
      <BackButton inputFocus={inputFocus} onPress={() => navigation.goBack()} />
      <LocateMe
        style={[
          styles.locateMe,
          inputFocus === 1 ? styles.pickup : styles.destination,
        ]}
        onPress={locateMe}
      />
      <CardDetail
        onEdit={() => navigation.goBack()}
        onSet={onSetHandler}
        inputFocus={inputFocus}
        name={selectMarker?.name || 'Unnamed road'}
        address={selectMarker?.address || null}
      />
    </View>
  );
};

export default Map;
