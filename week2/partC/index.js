let express = require('express')
let app = express()
let path = require('path')


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.get('/submit', function (req, res) {
  let website = req.query.url
  res.redirect(website)
})


app.listen(8000, () => console.log('listening on port 8000!'))