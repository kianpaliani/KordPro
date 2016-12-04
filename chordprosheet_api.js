//Handling the login_api
var express = require('express');
var router = express.Router({mergeParams: true});

//Get schemas
var ChordProSheet = require("./chordprosheet.js");

//Save chordprosheet
router.post('/save', function(req, res, next) {
    
    //Checks to see if the user is loggedin
    if (!req.signedCookies.username) {
        res.send("Save not allowed");
        return;
    }
    
    //Get chordprosheet content
    var owner = req.signedCookies.username;
    var title = req.body.name;
    var content = req.body.content;
    var privacyOption = req.body.privacyOption;
    var newChordSheet = req.body.newChordSheet;
    var oldChordSheetName = req.body.oldChordSheetName;

    //Checks to see if a new chordprosheet is being created
    if (newChordSheet) {
        ChordProSheet.find({owner: owner, title: title}).exec(function(err, chordProSheets) {
            if (!err) {
                //If no other chordprosheet by that owner has the same title
                if (chordProSheets.length == 0) {
                    //Get a new instance of the chordprosheet
                    var chordProSheet = new ChordProSheet();
                    
                    //Setting the values of the chordprosheet
                    chordProSheet.owner = owner;
                    chordProSheet.title = title;
                    chordProSheet.content = content;
                    chordProSheet.isPrivate = privacyOption;
                    chordProSheet.versionNumber = 1;
                    chordProSheet.revisedDate = new Date();
                    
                    chordProSheet.save(function(err, savedChordProSheet) {
                        if (!err) {
                            res.send("Save Success");
                        }else {
                            console.log(err);
                            console.log("fail 1");
                            res.status(500).send("Save Failed");
                        }
                    });
                }
                else {
                    console.log("ChordProSheet with that title already exists1");
                    res.send("ChordProSheet with that title already exists");
                }
            } else {
                res.status(500).send("Title comparison failed failed");
            }
        });
    } else { //Editing a chordprosheet
        ChordProSheet.find({owner: owner, title: oldChordSheetName}).exec(function(err, chordProSheets1) {
            
            if (!err) {
                
                //Checking to make sure that something in the chordprosheet has changed
                if (chordProSheets1[0].title == title && chordProSheets1[0].content == content && chordProSheets1[0].isPrivate == (privacyOption == "true")) {
                    res.send("Nothing has been edited");
                    return;
                }
                
                //Check to see if new title is different than old title
                if (title != oldChordSheetName) {
                    ChordProSheet.find({owner: owner, title: title}).exec(function(err, chordProSheets2) {
                        //If no other chordprosheet by that owner has the same title
                        if (!err && chordProSheets2.length == 0) {
                            
                            chordProSheets1[0].title = title;
                            chordProSheets1[0].content = content;
                            chordProSheets1[0].isPrivate = privacyOption;
                            chordProSheets1[0].versionNumber = chordProSheets1[0].versionNumber + 1;
                            chordProSheets1[0].revisedDate = new Date();
                            
                            chordProSheets1[0].save(function(err, savedChordProSheet) {
                                if (!err) {
                                    res.send("Save Success");
                                } else {
                                    console.log("failed 2");
                                    res.status(500).send("Save Failed");
                                }
                            });
                        } else {
                            console.log("ChordProSheet with that title already exists2");
                            res.send("ChordProSheet with that title already exists");
                        }
                    });
                } else { //If title remained the same
                    chordProSheets1[0].title = title;
                    chordProSheets1[0].content = content;
                    chordProSheets1[0].isPrivate = privacyOption;
                    chordProSheets1[0].versionNumber = chordProSheets1[0].versionNumber + 1;
                    chordProSheets1[0].revisedDate = new Date();
                    
                    chordProSheets1[0].save(function(err, savedChordProSheet) {
                        if (!err) {
                            res.send("Save Success");
                        } else {
                            console.log("failed 3");
                            res.status(500).send("Save Failed");
                        }
                    });
                }
            } else {
                res.status(500).send("Get chordprosheet failed");
            }
        });
    }
});

//Get all the public chordsheets
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

//Get all the chordsheets for the loggedin user and public chordsheets
router.get('/', function(req, res, next) {
    
    //Checks to see if the user is logged in
    if (!req.signedCookies.username) {
        res.send("Get not allowed");
        return;
    }
    
    var owner = req.signedCookies.username;
    
    //Gets all the chordsheets for the loggedin user and public chordsheets
    ChordProSheet.find({$or: [{owner: owner}, {isPrivate: false}]}).exec(function(err, chordProSheets) {
        if (!err && chordProSheets.length > 0) {
            res.send(chordProSheets);
        } else if (!err && chordProSheets.length == 0) {
            res.send([]);
        } else {
            res.status(500).send("Save failed");
        }
    });
});

//Get a specific chordprosheet for a loggedin user
router.get('/:title', function(req, res, next) {
    
    console.log("shouldn't be here");
    
    //Checks to see if the user is logged in
    if (!req.signedCookies.username) {
        res.send("Get not allowed");
        return;
    }
    
    var owner = req.signedCookies.username;
    var title = req.params.title;
    
    //Gets a specific chordprosheet for the loggedin user
    ChordProSheet.find({owner: owner, title: title}).exec(function(err, chordProSheets) {
        if (!err) {
            res.send(chordProSheets[0]);
            //res.send("hello");
        } else {
            res.status(500).send("Get chordprosheet failed");
        }
    });
});

//Delete a specific chordprosheet for a loggedinu user
router.delete('/:title', function(req, res, next) {
    
    if (!req.signedCookies.username) {
        res.send("Delete not allowed");
        return;
    }
    
    var owner = req.signedCookies.username;
    var title = req.params.title;
    
    ChordProSheet.remove({owner: owner, title: title}).exec(function(err, chordProSheets) {
        if (!err) {
            res.send("ChordProSheet deleted");
        } else {
            res.status(500).send("Delete failed");
        }
    });
});

//Get a specific chordprosheet for full screen view
router.get('/:title/:owner', function(req, res, next) {
    
    var user = req.signedCookies.username;
    
    var title = req.params.title;
    var owner = req.params.owner;
    
    //Gets a specific chordprosheet for the loggedin user
    ChordProSheet.find({owner: owner, title: title}).exec(function(err, chordProSheets) {
        if (!err) {
            if (user == owner || !chordProSheets[0].isPrivate) {
                res.send(chordProSheets[0]);
            } else {
                res.send("You do not have permission to view this chordprosheet");
            }
        } else {
            res.status(500).send("Get chordprosheet failed");
        }
    });
});

module.exports = router;