import Text from "components/common/Text";
import styles from './Location.module.scss';
import LocationLogo from './location.svg'

const Location = () => (
  <div>
    <Text size={50}>Омск</Text>
    <div className={styles.buttons}>
      <div className={styles.button}>
        <Text opacity={0.6}>Сменить город</Text>
      </div>
      <div className={`${styles.myLocation} ${styles.button}`} >
        <img
          className={styles.myLocationLogo}
          src={LocationLogo}
          alt=""
        />
        <Text opacity={0.6} inline>Мое местоположение</Text>
      </div>
    </div>
  </div>
)

export default Location;
