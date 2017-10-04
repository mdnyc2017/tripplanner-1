const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiZXhkZWF0aCIsImEiOiJjajhicWxuaG4wMHFjMzBvMHpkdzRtYnZyIn0.kNonHRsejLn91odCmMXQzA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);

fetch('/api')
  .then(result => result.json())
  .then(data => {
    const hotels = document.getElementById('hotels-choices');
    data.hotels.forEach(hotel => {
      console.log(hotel.name);
    });
  })
  .catch(console.error);

