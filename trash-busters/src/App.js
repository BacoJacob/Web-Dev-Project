import logo from './logo.svg';
import './sass/App.scss';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, React!</h1>
        <Button variant="primary" size="lg" active>
        Google Map API
        </Button>        
      </header>
    </div>
  );
}

export default App;
