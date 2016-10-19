var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();
app.use(bodyParser.json());

var port = 3000;

var db = mongojs('birds');
var sightingsCollection = db.collection('sightings');

app.post('/api/sighting', function(req, res) {
  sightingsCollection.insert(req.body, function(err, sighting) {
    res.send(sighting);
  });
});

app.get('/api/sighting', function(req, res) {
  console.log('GET sighting');
  res.end();
});

app.delete('/api/sighting', function(req, res) {
  console.log('DELETE sighting');
  res.end();
});

app.put('/api/sighting', function(req, res) {
  console.log('PUT sighting');
  res.end();
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
