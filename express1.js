var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 9091;

var app = express();

app.use(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Hello World</h1></body></html>');
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
    console.log(`Server runnint at http://${hostname}:${port}`);
});