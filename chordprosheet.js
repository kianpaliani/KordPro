var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ChordProSheetSchema = new Schema({
    owner: String,
    title: String,
    content: String,
    versionNumber: Number,
    revisedDate: String,
    isPrivate: Boolean,
    oldVersions: [{
    	owner: String,
	    title: String,
	    content: String,
	    versionNumber: Number,
	    revisedDate: String,
	    isPrivate: Boolean
    }]
});

module.exports = mongoose.model("ChordProSheet", ChordProSheetSchema);