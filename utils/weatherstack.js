const request = require("postman-request");
require("dotenv").config();

const weatherstack = (latitude, longitude, callback) => {
  const weatherstackURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=${longitude},${latitude}&units=f`;
  request({ url: weatherstackURL, json: true }, (e, res) => {
    if (e) {
      callback("Unable to connect to weather services.", undefined);
    } else if (res.body.error) {
      callback("Unable to find location.", undefined);
    } else {
      const { region } = res.body.location;
      const { temperature,  weather_descriptions} = res.body.current;
      callback(
        undefined,
        `In ${region} the current temperature is ${temperature} degrees and ${weather_descriptions[0]}.`
      );
    }
  });
};

module.exports = weatherstack;
