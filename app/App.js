import {Provider} from 'react-redux';
import Home from './Screen/homeScreen/Home';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
