import { useState } from 'react';
import { useDispatch } from "react-redux";
import styles from './InputCity.module.scss';
import settingsSlice from "store/settings";
import { getWeather } from "store/weather/actions";

const { changeCity } = settingsSlice.actions

const InputCity = ({ onCityChanging }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const onChangeCity = (e) => setCity(e.target.value)

  const onSubmitCity = () => {
    dispatch(changeCity(city));
    dispatch(getWeather());
    onCityChanging(false);
  }

  return (
    <form className={styles.inputBox} onSubmit={onSubmitCity}>
      <input onChange={onChangeCity} className={styles.input} type="text"/>
      <button
        type="submit"
        onClick={onSubmitCity}
        className={styles.submit}
      >OK</button>
    </form>
  )
}

export default InputCity;
