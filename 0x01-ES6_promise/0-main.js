const prom = require("./0-promise.js");

const response = prom.getResponseFromAPI();
console.log(response instanceof Promise);
