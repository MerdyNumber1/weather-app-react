import styles from './Layout.module.scss'
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const main = useSelector(state => state.weather.main);

  const color = ['Snow', 'Rain', 'Drizzle', 'Thunderstorm', 'Atmosphere'].includes(main) ? '#7290B9' : '#498CEC';
  return (
    <div className={styles.wrapper} style={{background: color}}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default MainLayout
