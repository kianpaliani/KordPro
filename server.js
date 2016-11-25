/*global path*/

//Require packages we need
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var logger = require('morgan'); // helps log all requests
var cookieParser = require('cookie-parser'); 

//Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure logger and parsers
app.use(logger('dev'));
app.use(cookieParser());

//Set port to 8080
var port = process.env.PORT || 8080;

//The ReST API
var api = require('./chord_api');
app.use('/api', api);

//Serving up the angular2 project
app.use('/',express.static(__dirname+'/angular2-lab5/dist'));

// Serve up semantic
app.use('/semantic', express.static(__dirname+'/semantic'))

//For any route that doesn't exist, serve up the index.html page
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname+'/angular2-lab5/dist','index.html'));
});

// Function to handle client errors
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Starting the server
app.listen(port, function () {
    console.log("Server listening on port 8080!");
});
console.log("Magic happens on port " + port);

module.exports = app; 