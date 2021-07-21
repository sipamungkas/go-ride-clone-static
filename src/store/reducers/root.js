import {combineReducers} from 'redux';

import {mapReducer} from './map';

const rootReducer = combineReducers({
  mapReducer,
});

export default rootReducer;
