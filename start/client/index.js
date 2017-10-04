const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiZXhkZWF0aCIsImEiOiJjajhicWxuaG4wMHFjMzBvMHpkdzRtYnZyIn0.kNonHRsejLn91odCmMXQzA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const marker = buildMarker("activities", [-74.009, 40.705]);
// marker.addTo(map);

fetch('/api')
  .then(result => result.json())
  .then(data => {
    const hotels = document.getElementById('hotels-choices');
    const restaurants = document.getElementById('restaurants-choices');
    const activities = document.getElementById('activities-choices');
    const hotelsAdd = document.getElementById('hotels-add');
    const hotelsItinerary = document.getElementById('hotels-list');
    
    data.hotels.forEach(hotel => {
      let option = new Option(hotel.name);
      hotels.append(option)

    

    data.restaurants.forEach(restaurant => {
      let option = new Option(restaurant.name);
      restaurants.append(option)
    });

    data.activities.forEach(activity => {
      let option = new Option(activity.name);
      activities.append(option)
    });
  
  })
    let marker = buildMarker('hotels', hotels['place']['location'])
    marker.addTo(map)

    hotelsAdd.addEventListener('click', (event) =>{
    hotelsItinerary.append(document.getElementById('hotels-choices').value)
 });
})
  .catch(console.error);

  
  const restaurantsAdd = document.getElementById('restaurants-add');
  const activitiesAdd = document.getElementById('activities-add');



  const restaurantsItinerary = document.getElementById('restaurants-list');
  const activitiesItinerary = document.getElementById('activities-list');


 

  restaurantsAdd.addEventListener('click', (event) =>{


    restaurantsItinerary.append(document.getElementById('restaurants-choices').value)
   });

   activitiesAdd.addEventListener('click', (event) =>{


    activitiesItinerary.append(document.getElementById('activities-choices').value)
   })


  //three add buttons:
  //hotels-add appends hotel choices to hotels-list
  //restaurants-add appends restaurants to restaurants-list
  //activities-add appends activities to activities-list