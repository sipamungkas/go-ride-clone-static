import {SET_VEHICLE_ID} from './actionTypes';

export const setVehicleId = id => {
  return {type: SET_VEHICLE_ID, payload: id};
};
