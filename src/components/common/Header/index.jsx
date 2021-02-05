import Location from "components/Location";
import ToggleMetrics from "components/ToggleMetrics";
import ChangeLocation from "components/ChangeLocation";
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <Location/>
      <ToggleMetrics />
    </div>
    <ChangeLocation />
  </div>
)

export default Header;
