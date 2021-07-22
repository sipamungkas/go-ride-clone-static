import {SET_DESTINATION, SET_ORIGIN} from '../actions/actionTypes';

const initialState = {
  origin: {},
  destination: {},
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DESTINATION:
      return {
        ...state,
        destination: action.payload,
      };
    case SET_ORIGIN:
      return {
        ...state,
        origin: action.payload,
      };
    default:
      return {...state};
  }
};
