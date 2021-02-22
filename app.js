const request = require("postman-request");
require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=37.8267,-122.4233&units=f`;

// request({ url: url, json: true }, (err, res) => {
//   const { weather_descriptions,temperature, feelslike } = res.body.current;
//   console.log(
//     `${weather_descriptions[0]}. It is currently ${temperature} degrees out.  It feels like ${feelslike} degrees out.`
//   );
// });

const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API}&limit=1`;

request({ url: mapboxURL, json: true }, (err, res) => {
  const {features} = res.body
  const lat = features[0].center[0]
  const long = features[0].center[1]
  console.log(`lat: ${lat} long: ${long}`)
});
