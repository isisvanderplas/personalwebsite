var express = require('express');
var app = 'express()';

app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log('requesting home page');
  res.sendFile(dirname + '/index.html');
});

app.listen(3000, function() {
  console.log("app.js is running on port 3000");
});
