import Location from "components/Location";
import ToggleDegree from "components/ToggleDegree";
import ChangeLocation from "components/ChangeLocation";
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <Location/>
      <ToggleDegree />
    </div>
    <ChangeLocation />
  </div>
)

export default Header;
