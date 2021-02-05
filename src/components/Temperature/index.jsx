import { useSelector } from "react-redux";
import styles from './Temperature.module.scss';

import CloudWeather from './sky/cloud.svg';
import PartyCloudlyWeather from './sky/partly-cloudy.svg';
import RainWeather from './sky/rain.svg';
import StormWeather from './sky/storm.svg';
import SunWeather from './sky/sun.svg';

const Temperature = () => {
  const temperature = useSelector(state => state.weather.temperature)

  return (
    <div className={styles.container}>
      <div className={styles.temperature}>
        <img className={styles.weatherLogo} src={SunWeather} alt=""/>
        <p className={styles.degrees}>{temperature}º</p>
      </div>
      <p className={styles.temperatureStatus}>Преимущественно солнечно</p>
    </div>
  )
}

export default Temperature;
