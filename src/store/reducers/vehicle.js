import {SET_VEHICLE_ID} from '../actions/actionTypes';

const initialState = {
  vehicleId: null,
};

export const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLE_ID:
      return {
        ...state,
        vehicleId: action.payload,
      };

    default:
      return {...state};
  }
};
