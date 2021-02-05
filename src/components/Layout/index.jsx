import styles from './Layout.module.scss'

const MainLayout = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default MainLayout
