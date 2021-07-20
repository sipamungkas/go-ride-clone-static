import React, {useState, useEffect} from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';
import Header from '../../components/Location/Header';
import Form from '../../components/Location/Form';
import SelectMap from '../../components/Location/SelectMap';
import Illustration from '../../components/Location/Illustration';
import LocationList from '../../components/Location/LocationList';

import styles from './styles';

import locations from '../../data/locations';

const Location = () => {
  const [inputFocus, setInputFocus] = useState(0);
  const [originText, setOriginText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [filteredLocation, setFilteredLocation] = useState([]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      const findLocation = name => {
        setFilteredLocation([]);
        const regex = new RegExp(name, 'i');

        if (name.length <= 3) {
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
      setOrigin(location);
    } else {
      setDestination(location);
    }
  };

  const resetInput = focus => {
    if (focus === 1) {
      setOriginText('');
      setOrigin();
    } else {
      setDestinationText('');
      setDestination();
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
          origin={origin}
          originText={originText}
          destination={destination}
          destinationText={destinationText}
          setInputFocus={setInputFocus}
          resetInput={resetInput}
        />
        <SelectMap style={styles.selectMapContainer} onPress={() => {}} />
        {filteredLocation.length === 0 && originText.length < 3 && (
          <Illustration />
        )}
        {originText.length > 3 && (
          <LocationList
            setLocation={setLocation}
            filteredLocation={filteredLocation}
            originText={originText}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default Location;
