import { Provider } from 'react-redux';
import store from "./store";
import MainLayout from "components/Layout";
import MainPage from "components/Page";
import styles from './App.module.scss';
import './index.scss';

const App = () => (
  <Provider store={store}>
    <div className={styles.wrapper}>
      <MainLayout>
        <MainPage/>
      </MainLayout>
    </div>
  </Provider>
)

export default App;
