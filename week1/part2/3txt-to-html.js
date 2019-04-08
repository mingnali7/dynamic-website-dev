var fs = require("fs");

fs.readFile('dog.txt', 'utf-8', (err, data) => {
  fs.writeFile('dog.html', '<!DOCTYPE html><html><body><p>' + data + '</p></body></html>', (err) => {
    console.log("dog.txt is transformed to dog.html")
  })
})