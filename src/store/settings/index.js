import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    city: 'Омск',
    metric: 'C'
  },
  reducers: {
    changeCity(state, action) {
      state.city = action.payload;
    },
    changeMetric(state, action) {
      state.metric = action.payload;
    }
  },
});

export default settingsSlice;
