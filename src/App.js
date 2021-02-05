import MainLayout from "components/Layout";
import MainPage from "components/Page";
import styles from './App.module.scss';
import './index.scss';

const App = () => (
  <div className={styles.wrapper}>
    <MainLayout>
      <MainPage/>
    </MainLayout>
  </div>
)

export default App;
