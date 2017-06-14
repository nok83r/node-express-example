var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 9091;

var app = express();

app.use(morgan('dev'));


var dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
    .all(function(req,res,next) {
        res.writeHead(200, {'Content-Type':'text/plain'});
        next();
    })
    .get(function(req,res,next) {
        res.end('Will send all the dishes to yoy!');
    });

dishRouter.route('/:dishId')
    .all(function(req,res,next){
        res.writeHead(200, {'Content-Type':'text/plain'});
        next();
    })
    .get(function(req,res,next) {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    });

app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log(`Server runnint at http://${hostname}:${port}`);
})