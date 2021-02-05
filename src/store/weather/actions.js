import weatherSlice from "./index";
import settingsSlice from "../settings";

const { setWeather } = weatherSlice.actions;
const { changeCity } = settingsSlice.actions;

export const getWeather = () => async (dispatch, getState) => {
  return fetch('https://api.openweathermap.org/data/2.5/weather?' + new URLSearchParams({
    q: getState().settings.city,
    appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    units: getState().settings.metric === 'F' ? 'standard' : 'metric'
  }))
    .then(res => res.json())
    .then(weather => {
      dispatch(setWeather(weather))
      dispatch(changeCity(weather.name))
    })
}
