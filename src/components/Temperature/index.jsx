import Text from "components/common/Text";
import styles from './Temperature.module.scss';

import CloudWeather from './sky/cloud.svg';
import PartyCloudlyWeather from './sky/partly-cloudy.svg';
import RainWeather from './sky/rain.svg';
import StormWeather from './sky/storm.svg';
import SunWeather from './sky/sun.svg';

const Temperature = () => (
  <div className={styles.container}>
    <div className={styles.temperature}>
      <img src={SunWeather} alt=""/>
      <Text size={180}>19º</Text>
    </div>
    <Text size={25}>Преимущественно солнечно</Text>
  </div>
)

export default Temperature;
