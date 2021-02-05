import InfoCell from "components/InfoCell";
import style from './WeatherInfo.module.scss';

const WeatherInfo = () => (
  <div className={style.container}>
    <InfoCell title="Ветер">5 м/c, западный</InfoCell>
    <InfoCell title="Давление">752 мм рт. ст.</InfoCell>
    <InfoCell title="Влажность">60%</InfoCell>
    <InfoCell title="Вероятность дождя">10%</InfoCell>
  </div>
)

export default WeatherInfo;
