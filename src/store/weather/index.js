import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
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
        temperature: action.payload.main.temp.toFixed(1),
        wind: {
          ...action.payload.wind,
          direction: 315 < windDeg || windDeg < 45 ? 'южный' :
                     45 < windDeg && windDeg < 135 ? 'западный' :
                     135 < windDeg && windDeg < 225 ? 'северный' :
                     225 < windDeg && windDeg < 315 && 'восточный'
        },
        pressure: action.payload.main.pressure,
        humidity: action.payload.main.humidity,
        pop: action.payload.pop
      }
    },
  },
});

export default weatherSlice;
