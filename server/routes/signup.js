var express = require("express");
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose")
var userModel = require("./../models/userModel")

router.post('/user/signup', function (req, res) {

    var condition = { userName: req.body.userName }

    var userDetails = {
        userName: req.body.userName,
        passWord: req.body.passWord,
        
    }

    userModel.findOne(condition, function (err, userDetails) {
        if (err) {
            res.send({ status: "error" + JSON.stringify(err) })
            res.end()
        }
        else {
            if (userDetails) {
                res.send({ status: "Error: User already exists!" + JSON.stringify(err) })
                res.end()
            }
            else {
                var userDetails = {
                    userName: req.body.userName,
                    passWord: req.body.passWord,
                    name: req.body.name,
                    dob: req.body.dob,
                    company: req.body.company
                } 
                userModel.create(userDetails)

                res.send({ Status: "User added successfully" })
                res.end()

            }
        }
    })
})

// can add end points

module.exports = router



    //userModel.create(userDetails)

    // userModel.findOne(condition, function (err, userDetails) {
    //     if (err) {
    //         res.send({ status: "error" + JSON.stringify(err) })
    //         res.end()
    //     } else {
    //         if (userDetails) {
    //             res.send({ status: "error: user exists in the database" })
    //             res.end()
    //         } else {
    //             userModel.create(userDetails, function (err, doc, rows) {
    //                 if (err) {
    //                     res.send({ status: "error" + JSON.stringify(err) })
    //                     res.end()
    //                 }
    //                 else {
    //                     db.dbserver.save(doc)
    //                     // if (err) {
    //                     //     res.send({ status: "error" + JSON.stringify(err) })
    //                     //     res.end()
    //                     // }
    //                     // else {
    //                     res.send({ status: "User added successfully" })
    //                     res.end()
    //                     //}

    //                 }
    //             })
    //         }
    //     }

    // });


    // {
                // if (err) {
                //     res.send({ status: "error" + JSON.stringify(err) })
                //     res.end()
                // }
                // else {
                //     res.send({ status: "User added successfully" })
                //     res.end()
                // }