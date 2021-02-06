import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    city: 'Челябинск',
    metric: 'C',
    geolocation: {
      latitude: null,
      longitude: null
    }
  },
  reducers: {
    changeCity(state, action) {
      state.city = action.payload;
    },
    setMetric(state, action) {
      state.metric = action.payload;
    },
    changeGeolocation(state, action) {
      state.geolocation = action.payload;
    }
  },
});

export default settingsSlice;
