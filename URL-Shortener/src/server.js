var www = "aol.com"

var util = require('./util.js');
//call random gen - return string with 9 length.

var output = util.stringGen(9);

console.log(output);


var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//routing api with json key value

app.get('/api/v1/url', function(req, res){
    res.json({"items": [{"key": "http://bit.ly/", "value":output}]})
});

app.listen(3000);
