import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StatusBar } from 'react-native';
import { Navigation } from './pages/navigation';


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="auto" />
        <Navigation/>
    </Provider>
  );
}