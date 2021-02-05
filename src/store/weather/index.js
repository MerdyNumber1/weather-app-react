import { createSlice } from '@reduxjs/toolkit';

const weather = createSlice({
  name: 'weather',
  initialState: {

  },
  reducers: {
    setUserName(state, action) {
      state.name = action.payload;
    },
  },
});

export default weather;
