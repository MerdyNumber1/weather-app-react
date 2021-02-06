import { Provider } from 'react-redux';
import store from "./store";
import MainLayout from "components/Layout";
import MainPage from "components/Page";
import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        <MainPage/>
      </MainLayout>
    </Provider>
  )
}

export default App;
