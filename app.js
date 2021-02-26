const { mapBox, weatherstack } = require("./utils");

const addy = process.argv[2];

if (!addy) {
  return console.log("Please provide a address.");
} else {
  mapBox(addy, (e, data) => {
    if (e) {
      return console.log(e);
    }

    weatherstack(data.latitude, data.longitude, (e, forecastData) => {
      if (e) {
        return console.log(e);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
