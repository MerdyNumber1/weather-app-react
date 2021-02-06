import settingsSlice from "./index";
import weatherSlice from "store/weather";

const { changeGeolocation, setMetric } = settingsSlice.actions;
const { convertTemperature } = weatherSlice.actions;

export const getGeolocation = () => dispatch => {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      const geolocation = { latitude: coords.latitude, longitude: coords.longitude }
      dispatch(changeGeolocation(geolocation))
      resolve(geolocation);
    }, reject);
  })
}

export const changeMetric = (metric) => dispatch => {
    dispatch(convertTemperature(metric));
    dispatch(setMetric(metric))
}
