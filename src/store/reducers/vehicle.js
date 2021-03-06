import {SET_FEE, SET_VEHICLE_ID, SET_TIME} from '../actions/actionTypes';

const initialState = {
  vehicle: {},
  totalFee: 0,
  time: 0,
};

export const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLE_ID:
      return {
        ...state,
        vehicle: action.payload,
      };
    case SET_FEE:
      return {
        ...state,
        totalFee: action.payload,
      };
    case SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
    default:
      return {...state};
  }
};
