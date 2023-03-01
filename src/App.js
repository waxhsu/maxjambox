import logo from './newLogo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          I am max
          {/* slide off to left */}
          software engineer
          pixel artist
          dancer
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
