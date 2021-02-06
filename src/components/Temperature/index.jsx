import { useMemo } from 'react';
import { useSelector } from "react-redux";
import { capitalize } from "utils";
import styles from './Temperature.module.scss';

import CloudWeather from './sky/cloud.svg';
import PartyCloudlyWeather from './sky/partly-cloudy.svg';
import RainWeather from './sky/rain.svg';
import StormWeather from './sky/storm.svg';
import SunWeather from './sky/sun.svg';

const Temperature = () => {
  const { temperature, description, main } = useSelector(state => ({
    temperature: state.weather.temperature,
    description: state.weather.description,
    main: state.weather.main
  }))

  const ActiveWeatherLogo = useMemo(() => {
    switch (main) {
      case 'Snow': return RainWeather
      case 'Rain': return RainWeather
      case 'Drizzle': return RainWeather
      case 'Thunderstorm': return StormWeather
      case 'Atmosphere': return CloudWeather
      case 'Clear': return SunWeather
      case 'Clouds': return PartyCloudlyWeather
      default: return SunWeather
    }
  }, [main])

  return (
    <div className={styles.container}>
      <div className={styles.temperature}>
        <img className={styles.weatherLogo} src={ActiveWeatherLogo} alt=""/>
        <p className={styles.degrees}>{temperature.toFixed(0)}º</p>
      </div>
      <p className={styles.temperatureStatus}>{capitalize(description)}</p>
    </div>
  )
}

export default Temperature;
