var mongo = require("mongodb")
var mongoose = require("mongoose")

var teamSchema = mongoose.Schema({
    Name: String,
    Description: String,
    users : Array 
}); 
   
  module.exports = mongoose.model('team_details', teamSchema);