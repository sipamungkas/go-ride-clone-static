import React, {useState, useEffect} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import Header from '../../components/Location/Header';
import Form from '../../components/Location/Form';
import SelectMap from '../../components/Location/SelectMap';
import Illustration from '../../components/Location/Illustration';
import LocationList from '../../components/Location/LocationList';
import {useNavigation} from '@react-navigation/core';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {setDestination, setOrigin} from '../../store/actions/map';
import Geolocation from 'react-native-geolocation-service';

import styles from './styles';
import locations from '../../data/locations';

const Location = () => {
  const navigation = useNavigation();
  const [inputFocus, setInputFocus] = useState(0);
  const [originText, setOriginText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  // const [origin, setOrigin] = useState();
  // const [destination, setDestination] = useState();
  const [filteredLocation, setFilteredLocation] = useState([]);
  const mapReducer = useSelector(state => state.mapReducer, shallowEqual);
  const dispatch = useDispatch();

  // get and set current coordinates as Origin/pickup
  useEffect(() => {
    Geolocation.getCurrentPosition(
      currentPosition => {
        dispatch(
          setOrigin({
            name: 'Your current location',
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
            address: 'Your current location',
          }),
        );
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    return () => {};
  }, [dispatch]);

  // find location after user input (1s after no input to prevent api spamming)
  useEffect(() => {
    const identifier = setTimeout(() => {
      const findLocation = name => {
        setFilteredLocation(null);
        const regex = new RegExp(name, 'i');

        if (name.length < 3) {
          return;
        }
        // const regex = /${name}\/i;
        const data = locations.filter(
          location =>
            location.name.match(regex) || location.address.match(regex),
        );
        setFilteredLocation(data);
      };

      if (inputFocus === 1) {
        findLocation(originText);
      } else {
        findLocation(destinationText);
      }
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [originText, destinationText, inputFocus]);

  const setLocation = location => {
    if (inputFocus === 1) {
      setOriginText('');
      dispatch(setOrigin(location));
      setFilteredLocation(null);
    } else {
      setDestinationText('');
      dispatch(setDestination(location));
      setFilteredLocation(null);
    }
  };

  const resetInput = focus => {
    if (focus === 1) {
      setOriginText('');
      dispatch(setOrigin());
    } else {
      setDestinationText('');
      dispatch(setDestination());
    }
  };

  return (
    <View style={styles.viewContainer}>
      <StatusBar backgroundColor="#fff" animated barStyle="dark-content" />
      <Header />
      <ScrollView style={styles.container}>
        <Form
          style={styles.formContainer}
          setTextInput={inputFocus === 1 ? setOriginText : setDestinationText}
          origin={mapReducer.origin}
          originText={originText}
          destination={mapReducer.destination}
          destinationText={destinationText}
          setInputFocus={setInputFocus}
          resetInput={resetInput}
        />
        <SelectMap
          style={styles.selectMapContainer}
          onPress={() =>
            navigation.navigate('Map', {inputFocus: inputFocus || 1})
          }
        />
        {!filteredLocation && <Illustration />}
        {(originText.length >= 3 || destinationText.length >= 3) && (
          <LocationList
            inputFocus={inputFocus}
            setLocation={setLocation}
            filteredLocation={filteredLocation}
            originText={originText}
            destinationText={destinationText}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default Location;
