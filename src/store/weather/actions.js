import weatherSlice from "./index";
import settingsSlice from "../settings";

const { setWeather } = weatherSlice.actions;
const { changeCity } = settingsSlice.actions;

export const getWeather = (latitude = null, longitude = null) => async (dispatch, getState) => {
  const params =  new URLSearchParams({
    appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    units: getState().settings.metric === 'F' ? 'imperial' : 'metric',
    lang: 'ru',
    cnt: 1,
  })

  if(latitude && longitude) {
    params.append('lat', latitude);
    params.append('lon', longitude);
  } else {
    params.append('q', getState().settings.city)
  }

  return fetch(`https://api.openweathermap.org/data/2.5/forecast?${params}`)
    .then(res => res.json())
    .then(weather => {
      if(weather && weather.list.length) {
        dispatch(setWeather(weather.list[0]))
        dispatch(changeCity(weather.city.name))
      }
    })
    .catch(() => console.log('city not found'))
}
