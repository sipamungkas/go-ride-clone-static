import {SET_ORIGIN, SET_DESTINATION} from './actionTypes';

export const setOrigin = location => {
  return {
    type: SET_ORIGIN,
    payload: location,
  };
};

export const setDestination = location => {
  return {
    type: SET_DESTINATION,
    payload: location,
  };
};
