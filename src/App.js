import { store } from './app/store';
import { Provider } from 'react-redux';
import Navigation from './navigation/navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
