//Handling the login_api
var express = require('express');
var router = express.Router({mergeParams: true});

//Getting mongoose
var mongoose = require("./chord_api").mongoose;

//Get schemas
var ChordProSheet = require("./chordprosheet.js");

//Save chordprosheet
router.post('/save', function(req, res, next) {
    
    //Get chordprosheet content
    var owner = req.body.username;
    var name = req.body.name;
    var content = req.body.content;
    var privacyOption = req.body.privacyOption;
    
    if (!req.signedCookies.username || req.signedCookies.username != owner) {
        res.send("Save not allowed");
        return;
    }
    
    //Find the chordprosheet with that specific title
    ChordProSheet.find({title: name}).exec(function(err, chordProSheets) {
        if (!err && chordProSheets.length > 0) {
            
            chordProSheets[0].owner = owner;
            chordProSheets[0].title = name;
            chordProSheets[0].content = content;
            chordProSheets[0].isPrivate = privacyOption;
            chordProSheets[0].versionNumber = chordProSheets[0].versionNumber + 1;
            chordProSheets[0].revisedDate = new Date();
            
            chordProSheets[0].save(function(err, savedChordProSheet) {
                if (!err) {
                    res.send("Save Success");
                }else {
                    res.status(500).send("Save Failed");
                }
            });
            
        } else if (!err && chordProSheets.length == 0) {
            
            //Get a new instance of the chordprosheet
            var chordProSheet = new ChordProSheet();
            
            //Setting the values of the chordprosheet
            chordProSheet.owner = owner;
            chordProSheet.title = name;
            chordProSheet.content = content;
            chordProSheet.isPrivate = privacyOption;
            chordProSheet.versionNumber = 1;
            chordProSheet.revisedDate = new Date();
            
            chordProSheet.save(function(err, savedChordProSheet) {
                if (!err) {
                    res.send("Save Success");
                }else {
                    res.status(500).send("Save Failed");
                }
            });
            
        } else {
            res.send("Save Failed");
        }
    });
});

router.get('/public', function(req, res, next) {
    ChordProSheet.find({isPrivate: false}).exec(function(err, chordProSheets) {
        if (!err && chordProSheets.length > 0) {
            res.send(chordProSheets);
        } else if (!err && chordProSheets.length == 0) {
            res.send({});
        } else {
            res.status(500).send("Save Failed");
        }
    });
});

router.post('/user', function(req, res, next) {
    
    var owner = req.body.username;
    
    if (!req.signedCookies.username || req.signedCookies.username != owner) {
        res.send("Get not allowed");
        return;
    }
    
    ChordProSheet.find({owner: owner}).exec(function(err, chordProSheets) {
        if (!err && chordProSheets.length > 0) {
            res.send(chordProSheets);
        } else if (!err && chordProSheets.length == 0) {
            res.send([]);
        } else {
            res.status(500).send("Save Failed");
        }
    });
});

module.exports = router;