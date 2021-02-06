import { useDispatch } from "react-redux";
import styles from "./ChangeLocation.module.scss";
import LocationLogo from "./location.svg";
import { getGeolocation } from "store/settings/actions";
import { getWeather } from "store/weather/actions";

const ChangeLocation = ({ onCityChanging }) => {
  const dispatch = useDispatch();
  const onGetMyLocation = () => dispatch(getGeolocation())
    .then(({ latitude, longitude }) => {
      dispatch(getWeather(latitude, longitude))
    })

  return (
    <div className={styles.buttons}>
      <div className={styles.button}>
        <p
          className={styles.buttonText}
          onClick={() => onCityChanging(true)}
        >Сменить город</p>
      </div>
      <div className={`${styles.myLocation} ${styles.button}`}>
        <img
          className={styles.myLocationLogo}
          src={LocationLogo}
          alt=""
        />
        <p onClick={onGetMyLocation} className={styles.buttonText}>Мое местоположение</p>
      </div>
    </div>
  )
}

export default ChangeLocation;
