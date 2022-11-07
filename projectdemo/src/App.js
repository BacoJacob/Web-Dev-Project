import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Button variant="primary" size="lg" active>
        Google Map API
      </Button>
      <Button variant="danger" onClick={() => { localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); window.location.reload();}}> Change Mode </Button>
      </div>
    )
  }
}

export default App
