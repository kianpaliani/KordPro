{"changed":true,"filter":false,"title":"chordpro_api.js","tooltip":"/chordpro_api.js","value":"//Handling the login_api\nvar express = require('express');\nvar router = express.Router({mergeParams: true});\n\n//Getting packages\nvar bodyParser = require(\"body-parser\");\n\n//Getting mongoose\nvar mongoose = require(\"./chord_api\").mongoose;\n\n//Get schemas\nvar ChordProSheet = require(\"./chordprosheet.js\");\n\n//Login user\nrouter.post('/save', function(req, res, next) {\n    \n    //Get username and password\n    var chordProSheetContents = req.body.;\n    var password = req.body.password;\n    \n    //Find username\n    User.find({username: username}).exec(function(err, users) {\n        if (!err && users.length > 0) {\n            if (bcrypt.compareSync(password, users[0].hashedPassword)) {\n                res.cookie(\"username\", username);\n                res.send(\"Login Success\");\n                return;\n            }\n        }\n        res.send(\"Login Failed\");\n    });\n});\n\n//Create user\nrouter.post('/', function(req, res, next) {\n    \n    //Get username and password\n    var username = req.body.username;\n    var password = req.body.password;\n    \n    //Generate salted password\n    const saltRounds = 10;\n    var hash = bcrypt.hashSync(password, saltRounds);\n    \n    //Get a new instance of the user\n    var user = new User();\n    \n    //Set user properties\n    user.username = username;\n    user.hashedPassword = hash;\n    user.save(function(err, savedUser) {\n        if (!err) {\n            res.cookie(\"username\", username);\n            res.send(\"Create Account Success\");\n        }else {\n            res.status(500).send(\"Save Failed.\");\n        }\n    });\n});\n\n//, {signed: true}\n//req.signedCookies.username == {}\n\n/*router.route('/:user')\n\n    //Get user\n    .get(function(req, res, next) {\n        res.send('Got a GET request for the api');\n    })\n\n    //Update user\n    .post(function(req, res, next) {\n        res.send('Got a PUT request for the api');\n    })\n\n    //Delete user\n    .delete(function(req, res, next) {\n        res.send('Got a DELETE request for the api');\n    });*/\n\nmodule.exports = router;","undoManager":{"mark":-2,"position":71,"stack":[[{"start":{"row":0,"column":0},"end":{"row":81,"column":24},"action":"insert","lines":["//Handling the login_api","var express = require('express');","var router = express.Router({mergeParams: true});","","//Getting packages","var bcrypt = require('bcrypt');","var bodyParser = require(\"body-parser\");","","//Getting mongoose","var mongoose = require(\"./chord_api\").mongoose;","","//Get schemas","var User = require(\"./user.js\");","","//Login user","router.post('/login', function(req, res, next) {","    ","    //Get username and password","    var username = req.body.username;","    var password = req.body.password;","    ","    //Find username","    User.find({username: username}).exec(function(err, users) {","        if (!err && users.length > 0) {","            if (bcrypt.compareSync(password, users[0].hashedPassword)) {","                res.cookie(\"username\", username);","                res.send(\"Login Success\");","                return;","            }","        }","        res.send(\"Login Failed\");","    });","});","","//Create user","router.post('/', function(req, res, next) {","    ","    //Get username and password","    var username = req.body.username;","    var password = req.body.password;","    ","    //Generate salted password","    const saltRounds = 10;","    var hash = bcrypt.hashSync(password, saltRounds);","    ","    //Get a new instance of the user","    var user = new User();","    ","    //Set user properties","    user.username = username;","    user.hashedPassword = hash;","    user.save(function(err, savedUser) {","        if (!err) {","            res.cookie(\"username\", username);","            res.send(\"Create Account Success\");","        }else {","            res.status(500).send(\"Save Failed.\");","        }","    });","});","","//, {signed: true}","//req.signedCookies.username == {}","","/*router.route('/:user')","","    //Get user","    .get(function(req, res, next) {","        res.send('Got a GET request for the api');","    })","","    //Update user","    .post(function(req, res, next) {","        res.send('Got a PUT request for the api');","    })","","    //Delete user","    .delete(function(req, res, next) {","        res.send('Got a DELETE request for the api');","    });*/","","module.exports = router;"],"id":1}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":31},"action":"remove","lines":["var bcrypt = require('bcrypt');"],"id":2}],[{"start":{"row":4,"column":18},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":3}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":26},"action":"remove","lines":["user"],"id":4},{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["c"]}],[{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["h"],"id":5}],[{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["o"],"id":6}],[{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["r"],"id":7}],[{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["d"],"id":8}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["p"],"id":9}],[{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["r"],"id":10}],[{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"insert","lines":["o"],"id":11}],[{"start":{"row":11,"column":30},"end":{"row":11,"column":31},"action":"insert","lines":["s"],"id":12}],[{"start":{"row":11,"column":31},"end":{"row":11,"column":32},"action":"insert","lines":["h"],"id":13}],[{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":["e"],"id":14}],[{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"insert","lines":["e"],"id":15}],[{"start":{"row":11,"column":34},"end":{"row":11,"column":35},"action":"insert","lines":["t"],"id":16}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":8},"action":"remove","lines":["User"],"id":25}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["C"],"id":26}],[{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":["h"],"id":27}],[{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["o"],"id":28}],[{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["r"],"id":29}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["d"],"id":30}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["P"],"id":31}],[{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["r"],"id":32}],[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["o"],"id":33}],[{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["S"],"id":34}],[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["c"],"id":35}],[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"remove","lines":["c"],"id":36}],[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["h"],"id":37}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["e"],"id":38}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["e"],"id":39}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["t"],"id":40}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":19},"action":"remove","lines":["login"],"id":41},{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":["c"]}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["r"],"id":42}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["e"],"id":43}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["a"],"id":44}],[{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["t"],"id":45}],[{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"insert","lines":["e"],"id":46}],[{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"remove","lines":["e"],"id":47}],[{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"remove","lines":["t"],"id":48}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"remove","lines":["a"],"id":49}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"remove","lines":["e"],"id":50}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"remove","lines":["r"],"id":51}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"remove","lines":["c"],"id":52}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":["s"],"id":53}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["a"],"id":54}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["v"],"id":55}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["e"],"id":56}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":16},"action":"remove","lines":["username"],"id":57},{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["c"]}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["h"],"id":58}],[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["o"],"id":59}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["r"],"id":60}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["d"],"id":61}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["P"],"id":62}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["r"],"id":63}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["o"],"id":64}],[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":["S"],"id":65}],[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["h"],"id":66}],[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["e"],"id":67}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["e"],"id":68}],[{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["t"],"id":69}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":[" "],"id":70}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"remove","lines":[" "],"id":71}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["C"],"id":72}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["o"],"id":73}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["n"],"id":74}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["t"],"id":75}],[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["e"],"id":76}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["n"],"id":77}],[{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["t"],"id":78}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["s"],"id":79}],[{"start":{"row":17,"column":41},"end":{"row":17,"column":49},"action":"remove","lines":["username"],"id":80}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":17,"column":41},"end":{"row":17,"column":41},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1480212682395}