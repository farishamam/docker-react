import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Which port is this using? what does it matter? Removed ports 80:80 from docker-compose.yaml.
          Added EXPOSE 80 in docker file. This allows the container that is running on EBS AWS to be 
          to be reachable on port 80.
          That did not work, so i added port mapping back to compose, and pushed again.
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
