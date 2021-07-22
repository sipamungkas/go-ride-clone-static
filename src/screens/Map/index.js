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
// import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {setDestination, setOrigin} from '../../store/actions/map';

import styles from './styles';

const Map = props => {
  const {inputFocus} = props.route.params;
  // const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [position, setPosition] = useState();
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
      name: 'Unnamed road',
      address: 'Unnamed Road',
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
        onPoiClick={data => {
          console.log(data.name);
        }}
        showsUserLocation={true}
        onRegionChangeComplete={newRegion => {
          setRegion(newRegion);
          setSelectMarker(newRegion);
        }}>
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
      <CardDetail
        onEdit={() => navigation.goBack()}
        onSet={onSetHandler}
        inputFocus={inputFocus}
        name="Bakso"
        address="DK. KRAJAN, RT.008/RW.003, Nepal, Kaligarang, Keling, Kabupaten Jepara, Jawa Tengah 59456"
      />
    </View>
  );
};

export default Map;
