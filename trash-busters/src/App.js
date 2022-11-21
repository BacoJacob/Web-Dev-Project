import './sass/App.scss';

//import Button from 'react-bootstrap/Button';
const google = window.google

function App() {
  return new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    // mapId: 'MAP_ID'
    //<index />
    
    
  });
}

export default App;
