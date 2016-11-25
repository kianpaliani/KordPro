//Handling the chord_api
var express = require('express');
var router = express.Router({mergeParams: true});

//Getting mongoose
var mongoose = require("./chord_api").mongoose;

//Get schemas
var User = require("./user.js");

//router.post('/login', function(req, res, next) {
    //var username = req.body.username;
    //var password = req.body.password;
    //if (checkCookie())
    //res.send('Got a GET request for the api');
//});

//router.post('/', function(req, res, next) {
    //res.send('Got a GET request for the api');
//});

router.route('/:user')

    .get(function(req, res, next) {
        res.send('Got a GET request for the api');
    })

    .post(function(req, res, next) {
        res.send('Got a PUT request for the api');
    })

    .delete(function(req, res, next) {
        res.send('Got a DELETE request for the api');
    });

module.exports = router;