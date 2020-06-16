var mongo = require("mongodb")
var mongoose = require("mongoose")


var eventSchema = mongoose.Schema({
    title: String,
    start: Date,
    end: Date
    
});//var userSchema = mongoose.Schema({



// module.exports = router;
module.exports = mongoose.model('event_details', eventSchema);