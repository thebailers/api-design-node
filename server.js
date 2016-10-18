// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express')
var port = 3000

var jsonData = {count: 12, message: 'hey'};

// var fs = require('fs')

var app = express()

app.get('/', function (req, res) {
  
  // fs.readFile('index.html', function (err, buffer) {
  //   var html = buffer.toString()

  //   res.setHeader('Content-Type', 'text/html')
  //   res.send(html)
  // })
  
  res.sendFile(__dirname + '/index.html')
})

app.get('/data', function (req, res) {
  res.json(jsonData)
})

app.listen(port, function () {
  console.log('Listening on http://localhost:', port)
})
