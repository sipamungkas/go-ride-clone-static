import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Screens
import Home from '../screens/Home';
import Location from '../screens/Location';

//action

// color

// socket and notifications

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={Home}
          // options={({route}) => ({
          //   headerTitle: getHeaderTitle(route),
          // })}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          // options={({route}) => ({
          //   headerTitle: getHeaderTitle(route),
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
