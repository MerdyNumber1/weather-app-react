import { combineReducers } from 'redux';
import weather from './weather';
import settings from "./settings";

const reducers = combineReducers({
  weather: weather.reducer,
  settings: settings.reducer
});

export default reducers;
