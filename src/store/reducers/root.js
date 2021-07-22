import {combineReducers} from 'redux';

import {mapReducer} from './map';
import {vehicleReducer} from './vehicle';

const rootReducer = combineReducers({
  mapReducer,
  vehicleReducer,
});

export default rootReducer;
