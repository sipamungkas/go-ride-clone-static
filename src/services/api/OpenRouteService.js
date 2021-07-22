import axios from 'axios';
import {OPEN_ROUTE_SERVICE_KEY} from '@env';

export const getDirections = (origin, destination) => {
  return axios.post(
    'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
    {
      coordinates: [origin, destination],
    },
    {
      headers: {Authorization: OPEN_ROUTE_SERVICE_KEY},
    },
  );
};
