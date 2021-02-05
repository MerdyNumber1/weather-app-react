import MainLayout from "components/Layout";
import MainPage from "components/Page";
import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <MainLayout>
      <MainPage/>
    </MainLayout>
  </div>
)

export default App;
