var fs = require('fs');
const request = require('request');
var args = process.argv.slice(2)

data = "<!DOCTYPE html><html><body><p>what you generated:</p><h1>" + args[0] + "</h1></body></html>"
fs.writeFile('new.html', data, function (err, data) {
  console.log("new html file is generated as new.html")
})