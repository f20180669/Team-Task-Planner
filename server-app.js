var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose")

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://127.0.0.1:27017/dbserver")

var signupRoute = require("./server/routes/signup.js") 
var loginRoute = require("./server/routes/login.js")
var createTeam = require("./server/routes/createTeam.js")
var addMembers = require("./server/routes/addMembers")


app.use(signupRoute)
app.use(loginRoute)
app.use(createTeam)
//app.use(addMembers)


app.listen(3000, function () {
    console.log("port 3000")
});




/*
var express = require("express");
var router = express.Router();
var rrh = require();

router.post('/user/isnew', function (req, res) {

})

app.post('/user/signup', function (req, res) {

})
*/

