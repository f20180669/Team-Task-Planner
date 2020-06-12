var express = require("express");
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose")
var userModel = require("./../models/userModel");
var teamModel = require("./../models/teamModel");

router.post('/user/newteam', function (req, res) {

    var condition = { Name: req.body.Name }
 
    var Team = {
        Name: req.body.Name,
        Description: req.body.Description,
    }

    teamModel.findOne(condition, function (err, Team) {
        if (err) {
            res.send({ status: "error" + JSON.stringify(err) })
            res.end()
        }
        else {
            if (Team) {
                res.send({ status: "Error: Team already exists!" + JSON.stringify(err) })
                res.end()
            }
            else {
                var Team = {
                    Name: req.body.Name,
                    Description: req.body.Description,
                }


                teamModel.create(Team)


                res.send({ Status: "Team added successfully" })
                res.end()

            }
        }

    })

})



// var addUserToTeam= function(team, user) {
//     var teamName = {Name: req.body.Name}
//     return teamModel.findOneAndUpdate(
//       teamName,
//       { $push: { users: user.userName } },
//       { new: true, useFindAndModify: false }
//     );
//   };

//   var addTeamToUser = function(user, team) {
//     return userModel.findOneAndUpdate(
//       user,
//       { $push: { teams: team.Name } },
//       { new: true, useFindAndModify: false }
//     );
//   };

module.exports = router