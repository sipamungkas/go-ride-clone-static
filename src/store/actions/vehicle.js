import {SET_VEHICLE_ID, SET_FEE} from './actionTypes';

export const setVehicle = vehicle => {
  return {type: SET_VEHICLE_ID, payload: vehicle};
};

export const setVehicleFee = fee => {
  return {type: SET_FEE, payload: fee};
};
