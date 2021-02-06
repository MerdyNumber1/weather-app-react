import { createSlice } from '@reduxjs/toolkit';
import { celToFah, fahToCel } from "utils";

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    description: '',
    main: '',
    temperature: 0,
    wind: {
      speed: 0,
      deg: 0,
      direction: 'северный'
    },
    pressure: 0,
    humidity: 0,
    pop: 0,
  },
  reducers: {
    setWeather(state, action) {
      const windDeg = action.payload.wind.deg

      return {
        description: action.payload.weather[0].description,
        main: action.payload.weather[0].main,
        temperature: action.payload.main.temp,
        wind: {
          ...action.payload.wind,
          direction: 315 < windDeg || windDeg < 45 ? 'южный' :
                     45 < windDeg && windDeg < 135 ? 'западный' :
                     135 < windDeg && windDeg < 225 ? 'северный' :
                     225 < windDeg && windDeg < 315 && 'восточный'
        },
        pressure: action.payload.main.pressure,
        humidity: action.payload.main.humidity,
        pop: action.payload.pop * 100
      }
    },

    convertTemperature(state, { payload: metric }) {
      if(metric === 'C') state.temperature = fahToCel(state.temperature)
      else if (metric === 'F') state.temperature = celToFah(state.temperature)
    }
  },
});

export default weatherSlice;
