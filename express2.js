var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 9091;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log(`Server runnint at http://${hostname}:${port}`);
})