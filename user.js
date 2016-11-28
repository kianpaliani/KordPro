var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema   = new Schema({
    username: {type: String, unique: true},
    hashedPassword: String
});

module.exports = mongoose.model("User", UserSchema);