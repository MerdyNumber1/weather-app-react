import { useSelector } from "react-redux";
import InfoCell from "components/InfoCell";
import style from './WeatherInfo.module.scss';

const WeatherInfo = () => {
  const weatherData = useSelector(state => state.weather)

  return (
    <div className={style.container}>
      <div className={style.cellGroup}>
        <InfoCell title="Ветер">{weatherData.wind.speed} м/c, {weatherData.wind.direction}</InfoCell>
        <InfoCell title="Давление">{weatherData.pressure} мм рт. ст.</InfoCell>
      </div>
      <div className={style.cellGroup}>
        <InfoCell title="Влажность">{weatherData.humidity}%</InfoCell>
        <InfoCell title="Вероятность дождя">{weatherData.pop}%</InfoCell>
      </div>
    </div>
  )
}

export default WeatherInfo;
