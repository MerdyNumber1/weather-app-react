import { useSelector } from "react-redux";
import InfoCell from "components/InfoCell";
import style from './WeatherInfo.module.scss';

const WeatherInfo = () => {
  const { windSpeed, windDirection, pressure, humidity, pop } = useSelector(state => ({
    windSpeed: state.weather.wind.speed,
    windDirection: state.weather.wind.direction,
    pressure: state.weather.pressure,
    humidity: state.weather.humidity,
    pop: state.weather.pop
  }))

  return (
    <div className={style.container}>
      <div className={style.cellGroup}>
        <InfoCell title="Ветер">{windSpeed.toFixed(1)} м/c, {windDirection}</InfoCell>
        <InfoCell title="Давление">{pressure} мм рт. ст.</InfoCell>
      </div>
      <div className={style.cellGroup}>
        <InfoCell title="Влажность">{humidity}%</InfoCell>
        <InfoCell title="Вероятность дождя">{pop}%</InfoCell>
      </div>
    </div>
  )
}

export default WeatherInfo;
