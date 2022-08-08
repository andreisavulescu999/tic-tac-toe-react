import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Game from './components/Game';
import Background from './layout/Background';

function App() {
  return (
    <div className="App">
      <Header/>
        <Game/>
    </div>
  );
}

export default App;
