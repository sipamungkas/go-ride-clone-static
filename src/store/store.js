import {createStore, applyMiddleware} from 'redux';

import rootReducer from './reducers/root';

const store = createStore(rootReducer);

export default store;
