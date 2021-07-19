/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigators/rootNavigators';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
