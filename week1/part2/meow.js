var fs = require('fs');
const request = require('request');
var args = process.argv.slice(2)

data = "<!DOCTYPE html><html><body><h1>meow</h1><p>" + args[0] + "</p></body></html>"
console.log(data)
fs.writeFile('new.html', data, function (err, data) {})