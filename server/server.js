var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.static("build"));
app.use(cors());

var port = 3000;
app.listen(port);
console.log('Running on port: '+port);