let express = require('express')
let app = express()
let path = require('path')


app.get('/', (req, res) => res.sendFile(path.join("/Users/mingnali/Dropbox/MAC2/NYU/2019 Spring/DWD/untitled folder/dynamic-website-dev/week1/part1" + '/index.html')))

app.listen(8000, () => console.log('listening on port 8000!'))