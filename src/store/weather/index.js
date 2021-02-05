import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    temperature: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    pressure: 0,
    humidity: 0,
    precipitationChance: 0,
  },
  reducers: {
    setWeather(state, action) {
      console.log(action.payload)
      return {
        temperature: action.payload.main.temp,
        wind: action.payload.wind,
        pressure: action.payload.main.pressure,
        humidity: action.payload.main.humidity,
        precipitationChance: action.payload.snow
      }
    },
  },
});

export default weatherSlice;
