//Handling the login_api
var express = require('express');
var router = express.Router({mergeParams: true});

//Getting packages
var bcrypt = require('bcrypt');
var bodyParser = require("body-parser");

//Getting mongoose
var mongoose = require("./chord_api").mongoose;

//Get schemas
var User = require("./user.js");

//Login user
router.post('/login', function(req, res, next) {
    
    if (req.signedCookies.username) {
        res.send("Login Success");
        return;
    }
    
    //Get username and password
    var username = req.body.username;
    var password = req.body.password;
    
    if (!password || !username) {
        res.send("Login Failed");
        return;
    }
    
    //Find username
    User.find({username: username}).exec(function(err, users) {
        if (!err && users.length > 0) {
            if (bcrypt.compareSync(password, users[0].hashedPassword)) {
                res.cookie("username", username,  {signed: true});
                res.send("Login Success");
                return;
            }
        }
        res.send("Login Failed");
    });
});

//Create user
router.post('/', function(req, res, next) {
    
    //Get username and password
    var username = req.body.username;
    var password = req.body.password;
    
    //Generate salted password
    const saltRounds = 10;
    var hash = bcrypt.hashSync(password, saltRounds);
    
    //Get a new instance of the user
    var user = new User();
    
    //Set user properties
    user.username = username;
    user.hashedPassword = hash;
    user.save(function(err, savedUser) {
        if (!err) {
            res.cookie("username", username, {signed: true});
            res.send("Create Account Success");
        }else {
            res.status(500).send("Save Failed");
        }
    });
});

module.exports = router;