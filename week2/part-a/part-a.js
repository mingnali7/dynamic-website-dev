let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("hello, world")
})

app.listen(8000, function () {
  console.log("server is up")
})