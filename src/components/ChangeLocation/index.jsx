import styles from "./ChangeLocation.module.scss";
import LocationLogo from "./location.svg";

const ChangeLocation = () => (
  <div className={styles.buttons}>
      <div className={styles.button}>
        <p className={styles.buttonText}>Сменить город</p>
      </div>
      <div className={`${styles.myLocation} ${styles.button}`} >
        <img
          className={styles.myLocationLogo}
          src={LocationLogo}
          alt=""
        />
        <p className={styles.buttonText}>Мое местоположение</p>
      </div>
    </div>
)

export default ChangeLocation;
