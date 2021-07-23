import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Callout,
  Polyline,
} from 'react-native-maps';

import OriginMarker from '../../components/Map/OriginMarker';
import DestinationMarker from '../../components/Map/DestinationMarker';
import {getDirections} from '../../services/api/OpenRouteService';
import {convert} from '../../utils/routes/convertORSCoordsToPolyline';
import COLORS from '../../Colors';
import CardDetail from '../../components/Order/CardDetail';
import CardOriginDestination from '../../components/Order/CardOriginDestination';
import BackButton from '../../components/UI/BackButton';
import {useDispatch} from 'react-redux';
import {setVehicleFee} from '../../store/actions/vehicle';
import Icon from 'react-native-vector-icons/Fontisto';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import CardOrderInProgress from '../../components/Order/CardOrderInProgress';
import LocateMe from '../../components/UI/LocatMe';
import Shield from '../../components/UI/Shield';

const Order = () => {
  const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const vehicleReducer = useSelector(
    state => state.vehicleReducer,
    shallowEqual,
  );
  const {totalFee} = vehicleReducer;
  const [routesCoordinates, setRoutesCoordinates] = useState(null);
  const [orderInProgress, setOrderInProgress] = useState(false);
  const dispatch = useDispatch();
  const {destination, origin} = mapReducer;
  const navigation = useNavigation();
  const _map = useRef(null);

  useEffect(() => {
    const originData = [origin.longitude, origin.latitude];
    const destinationData = [destination.longitude, destination.latitude];
    getDirections(originData, destinationData)
      .then(res => {
        const routes = res.data.features[0].geometry.coordinates;
        const formattedRoutes = convert(routes);

        setRoutesCoordinates(formattedRoutes);
      })
      .catch(err => console.log(err));
  }, [destination, origin]);

  useState(() => {
    dispatch(setVehicleFee(0));
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (orderInProgress) {
        setOrderInProgress(false);
        navigation.navigate('OrderSuccess');
      }
    }, 10000);
    return () => {
      clearTimeout(identifier);
    };
  }, [orderInProgress, navigation]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (_map.current) {
        _map.current.fitToSuppliedMarkers(['origin', 'destination'], {
          edgePadding: {
            top: 400,
            bottom: 50,
            left: 200,
            right: 200,
          },
        });
      }
    }, 2000);
    return () => {
      clearTimeout(identifier);
    };
  }, [orderInProgress, vehicleReducer]);

  const locateMe = () => {
    if (_map.current) {
      _map.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: {
          top: 500,
          bottom: 300,
          left: 300,
          right: 300,
        },
      });
    }
  };

  const order = () => {
    if (totalFee <= 0) {
      return;
    }
    setOrderInProgress(true);
  };

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
          ...destination,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsMyLocationButton={false}
        showsUserLocation={true}>
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
        {orderInProgress && (
          <Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}>
            <Icon name="motorcycle" />
          </Marker>
        )}

        {routesCoordinates && (
          <Polyline
            coordinates={routesCoordinates}
            strokeColor={COLORS.PRIMARY}
            strokeWidth={3}
          />
        )}
      </MapView>
      {!orderInProgress && (
        <CardDetail onSet={order} disabled={totalFee === 0} />
      )}
      {orderInProgress && (
        <CardOrderInProgress
          onSet={() => {
            navigation.navigate('OrderSuccess');
          }}
        />
      )}
      <CardOriginDestination />
      <BackButton
        style={[
          styles.backButton,
          orderInProgress ? styles.backBtnOIP : styles.backBtnDefault,
        ]}
        onPress={() =>
          navigation.replace('Location', {reset: true, inputFocus: 1})
        }
      />
      <LocateMe
        style={[
          styles.locateMe,
          orderInProgress ? styles.backBtnOIP : styles.backBtnDefault,
        ]}
        onPress={locateMe}
      />
      <Shield
        style={[
          styles.locateMe,
          orderInProgress ? styles.shieldOIP : styles.shieldDefault,
        ]}
        onPress={() => {}}
      />
    </View>
  );
};

export default Order;
