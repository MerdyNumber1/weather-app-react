import { useState } from 'react';
import Location from "components/Location";
import ToggleMetrics from "components/ToggleMetrics";
import ChangeLocation from "components/ChangeLocation";
import InputCity from "components/InputCity";
import styles from './Header.module.scss';


const Header = () => {
  const [isCityChanging, setIsCityChanging] = useState(false);
  const onCityChanging = (val) => setIsCityChanging(val)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {isCityChanging && <InputCity onCityChanging={onCityChanging} />}
        {!isCityChanging && <Location/>}
        <ToggleMetrics/>
      </div>
      {!isCityChanging && <ChangeLocation onCityChanging={onCityChanging} />}
    </div>
  )
}

export default Header;
