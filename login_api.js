//Handling the login_api
var express = require('express');
var router = express.Router({mergeParams: true});

//Getting packages
var bcrypt = require('bcrypt');
var bodyParser = require("body-parser");

//Get schemas
var User = require("./user.js");

//Gets the currently logged in user's username
router.get('/user', function(req, res, next) {
    if (req.signedCookies.username) {
        res.send(req.signedCookies.username);
    } else {
        res.send("User not logged in");
    }
});

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
    
    //Find username
    User.find({username: username}).exec(function(err, users) {
        if (!err && users.length == 0) {
            //Create user
            user.save(function(err, savedUser) {
                if (!err) {
                    res.cookie("username", username, {signed: true});
                    res.send("Create Account Success");
                }else {
                    res.status(500).send("Save Failed");
                }
            });
        } else if (!err && users.length > 0) {
            res.send("Username already exists");
        } else {
            res.send("Find username error");
        }
    });
});

module.exports = router;