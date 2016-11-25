/*global app*/

//Handling the chord_api
var express = require('express');
var router = express.Router({mergeParams: true});

//Get mongoose
var mongoose = require("mongoose");
module.exports.mongoose = mongoose.connect("mongodb://localhost:27017/chordpro");

var login = require('./login_api');
router.use('/login', login);

/*router.get('/', function(req, res, next) {
    res.send('Got a GET request for the api');
});*/

module.exports = router;