var express = require("express");
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose")
var userModel = require("./../models/userModel")

router.post('/user/login', function (req, res) {

    var condition = {
        userName: req.body.userName,
    }

    var userDetails = {
        userName: req.body.userName,
        passWord: req.body.passWord,
    }

    userModel.findOne(condition, function (err, user) {
        if (err) {
            res.send({ status: "error" + JSON.stringify(err) })
            res.end()
        }
        else {

            var pwd = {
                passWord: req.body.passWord
            }

            user.comparePassword(req.body.passWord, function (err, isMatch) {
                if (err) {
                    res.send({ status: "error" + JSON.stringify(err) })
                    res.end()
                }
                else {
                    res.send({ status: isMatch })
                    res.end()
                }
            })


            // if (userDetails) {
            //     res.send({ status: "Login Sucessful! User exists" + JSON.stringify(err) })
            //     res.end()
            // }
            // else {
            //     res.send({ Status: "Error! Incorrect username or password!" })
            //     res.end()

            // }
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