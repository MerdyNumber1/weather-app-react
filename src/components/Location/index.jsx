import { useSelector } from "react-redux";
import style from './Location.module.scss';

const Location = () => {
  const city = useSelector(state => state.settings.city)

  return <p className={style.city}>{city}</p>
}

export default Location;
