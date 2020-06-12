var express = require("express");
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose")
var userModel = require("./../models/userModel");
var teamModel = require("./../models/teamModel");

router.post('/user/newteam/addmembers', function (req, res) {
  var team = { Name: req.body.Name }
  var user = { userName: req.body.userName }
  userModel.findOne(user, function (err, user) {
    if (err) {
      res.send({ status: "error" + JSON.stringify(err) })
      res.end()
    }
    else {
      teamModel.findOneAndUpdate(
        team,
        { $push: { users: user.userName } },
        { new: true, useFindAndModify: false }
      );
    }
  })

})
