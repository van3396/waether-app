const { mapBox, weatherstack } = require("./utils");

mapBox("Miami", (e, data) => {
  console.log("Error", e);
  console.log("Data", data);

  weatherstack(data.latitude, data.longitude, (e, data) => {
    console.log("Error", e);
    console.log("Data", data);
  });
});
