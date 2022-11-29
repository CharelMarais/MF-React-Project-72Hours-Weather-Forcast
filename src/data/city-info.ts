import { City } from '../models/models';

// get current hour for GMT time
let currDate = new Date();
let currentGmtTime: number = currDate.getHours() - 2;

// Locations that can be selected at City's to view weather
export const pretoria: City = {
  id: 1,
  name: 'Pretoria',
  longitude: 28.194351,
  latitude: -25.751642,
  time: currentGmtTime,
  gmtDiff: 2,
};
const hongKong: City = {
  id: 2,
  name: 'Hong Kong',
  longitude: 114.159064,
  latitude: 22.281076,
  time: currentGmtTime,
  gmtDiff: 8,
};
const newYork: City = {
  id: 3,
  name: 'New York',
  longitude: -74.007339,
  latitude: 40.700439,
  time: currentGmtTime,
  gmtDiff: -4,
};
const london: City = {
  id: 4,
  name: 'London',
  longitude: -0.127287,
  latitude: 51.5065,
  time: currentGmtTime,
  gmtDiff: 1,
};
const sydney: City = {
  id: 5,
  name: 'Sydney',
  longitude: 151.208439,
  latitude: -33.871836,
  time: currentGmtTime,
  gmtDiff: 11,
};

// variable array to get the info stored in the variables
export const cityVariables: City[] = [
  pretoria,
  hongKong,
  newYork,
  london,
  sydney,
];
