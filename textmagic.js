var fs = require("fs");

fs.readFile('dog.txt', 'utf-8', (err, data) => {
  console.log(data)
  fs.writeFile('dog.html', '<!DOCTYPE html><html><body><p>' + data + '</p></body></html>', (err) => {
    console.log("file saved")
  })
})