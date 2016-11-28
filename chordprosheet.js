var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ChordProSheetSchema = new Schema({
    owner: {type: String, unique: true},
    title: {type: String, unique: true},
    content: String,
    versionNumber: Number,
    revisedDate: String,
    isPrivate: Boolean
});

module.exports = mongoose.model("ChordProSheet", ChordProSheetSchema);