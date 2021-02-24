const request = require("postman-request");
require("dotenv").config();

const mapBox = (address, callback) => {
  const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.MAPBOX_API}&limit=1`;
  request({ url: mapboxURL, json: true }, (e, res) => {
    if (e) {
      callback("Unable to connect to location services", undefined);
    } else if (res.body.features.length === 0) {
      callback("Unable to find location.  Try another search", undefined);
    } else {
      const { place_name, center } = res.body.features[0];

      callback(
        undefined,
        `For ${place_name} the longitude is: ${center[1]} and the latitude is: ${center[0]}}`
      );
    }
  });
};



module.exports = mapBox;