import './sass/App.scss';
//import Button from 'react-bootstrap/Button';

function App() {
  return (
    //let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      }
      

  //   window.initMap = initMap;
  );
}

export default App;
