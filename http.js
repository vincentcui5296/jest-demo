const axios = require("axios");

exports.fetchData = () => {
  console.log("Fetching data...");
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.data;
    });
};
