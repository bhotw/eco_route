import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

var lat = '';
var lng = '';

// depends on whether you really only have the zip code
var address = {zipcode};

geocoder.geocode({ 'address': address}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
     lat = results[0].geometry.location.lat();
     lng = results[0].geometry.location.lng();
    });
  } else {
    console.log("Geocode was not successful for the following reason: " + status);
  }
});
console.log('Latitude: ' + lat + ' Longitude: ' + lng);



export default App;
