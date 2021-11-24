import { Provider } from 'react-redux';
import './App.css';
import MovieTable from './components/MovieTable';
import Store from './redux/store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <MovieTable/>
    </div>
    </Provider>
  );
}

export default App;
