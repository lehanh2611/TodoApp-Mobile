import {Provider} from 'react-redux';
import Home from './Screen/homeScreen/Home';
import {store} from './redux/store';
import TNotification from './components/common/TNotification';
import {StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
        <TNotification />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
