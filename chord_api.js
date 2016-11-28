//Handling the chord_api
var express = require('express');
var router = express.Router({mergeParams: true});

//Get mongoose
var mongoose = require("mongoose");
module.exports.mongoose = mongoose.connect("mongodb://localhost:27017/chordpro");

//Do not cache
router.use(function(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

//Sub route for login
var login = require('./login_api');
router.use('/login', login);

//Sub route for chordprosheet
var chordProSheet = require('./chordprosheet_api');
router.use('/chordprosheet', chordProSheet);

module.exports = router;