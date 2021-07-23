import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Screens
import Home from '../screens/Home';
import Location from '../screens/Location';
import Map from '../screens/Map';
import Order from '../screens/Order';
import OrderSuccess from '../screens/OrderSuccess';

//action

// color

// socket and notifications

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
