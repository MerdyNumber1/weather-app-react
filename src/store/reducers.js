import { combineReducers } from 'redux';
import weather from './weather';

const reducers = combineReducers({
  weather: weather.reducer,
});

export default reducers;
