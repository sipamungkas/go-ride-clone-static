/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/navigators/rootNavigators';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/store/store';

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
