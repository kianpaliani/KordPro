var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema   = new Schema({
    username: {type: String, unique: true},
    hashedPassword: String, 
    admin: {type: Boolean, default: false}
});

module.exports = mongoose.model("User", UserSchema);