let express = require('express')
let mustache = require('mustache-express')

let app = express()

app.engine('html', mustache())
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function (req, res) {
  res.render('index', {
    'name': 'Mingna'
  })
})

app.get('/submit', function (req, res) {
  res.render('index', {
    'result': req.query.bandName
  })
})

app.get('/submit', function (req, res) {
  res.render('part-b', {
    'insult': insult
  })
})

app.listen(8000, function () {
  console.log("sever is up")
})


"meow"