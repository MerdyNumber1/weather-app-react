import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Header from 'components/common/Header'
import Temperature from 'components/Temperature';
import WeatherInfo from "components/WeatherInfo";
import { getWeather } from "store/weather/actions";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather())
  }, [])

  return (
    <>
      <Header/>
      <Temperature/>
      <WeatherInfo/>
    </>
  )
}

export default MainPage
