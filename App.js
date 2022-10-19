import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/home'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, Text } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="auto" />
        <GestureHandlerRootView>
          <Home/>
        </GestureHandlerRootView>
    </Provider>
  );
}