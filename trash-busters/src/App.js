import './sass/App.scss';
import React from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <Button variant="primary" size="lg" active>
        Google Map API
        </Button>        
      </header>
    </div>
  );
}

export default App;
