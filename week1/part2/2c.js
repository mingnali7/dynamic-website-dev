var fs = require("fs");

fs.readFile('2c.txt', 'utf-8', (err, data) => {
  fs.writeFile('2c.html', '<!DOCTYPE html><html><body><p>' + data + '</p></body></html>', (err) => {
    console.log("dog.txt is transformed to dog.html")
  })
})