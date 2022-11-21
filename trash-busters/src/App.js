import './sass/App.scss';
import React from 'react';
import MainBody from "./components/MainBody";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
}

export default App;
