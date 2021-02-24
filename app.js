const { mapBox, weatherstack } = require("./utils");

mapBox("miami", (e, data) => {
  console.log("Error", e);
  console.log("Data", data);
});

weatherstack(-97.39997199999999, 27.8093515, (e, data) => {
  console.log("Error", e);
  console.log("Data", data);
});
