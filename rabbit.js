console.log("Hi from my super cool app");
const request = require('request');
var args = process.argv.slice(2)

request(args[0], function (err, res, body) {
  console.log(body)
})