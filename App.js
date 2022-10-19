import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/home'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <Home/>
      </GestureHandlerRootView>
    </Provider>
  );
}