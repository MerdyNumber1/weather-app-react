import Location from "components/Location";
import ToggleDegree from "components/ToggleDegree";
import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <Location/>
    <ToggleDegree />
  </div>
)

export default Header;
