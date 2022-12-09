
import './App.css';

import Home from './components/Home';
import Provider from './services/Provider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider >
      <Home />  
      </Provider>
      </header>
    </div>
  );
}

export default App;
