import './sass/App.scss';
import React from 'react';
import MainBody from "./components/MainBody";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import {BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent></NavbarComponent>
        <MainBody></MainBody>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
