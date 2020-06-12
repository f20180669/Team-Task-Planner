var mongo = require("mongodb")
var mongoose = require("mongoose")
var bcrypt = require("bcrypt")
SALT_WORK_FACTOR = 10

var userSchema = mongoose.Schema({
    userName: String,
    passWord: String,
    name: String,
    dob: Date,
    company: String
});//var userSchema = mongoose.Schema({

userSchema.pre('save', function (next) {
    var user = this
 
    //only hash the password if it has been modified or is new
    if (!user.isModified('passWord')) return next();

    // generate a salt 
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) {
            return next(err);
        }

        // hash the password using our new salt
        bcrypt.hash(user.passWord, salt, function (err, hash) {

            if (err) {
                return next(err);
            }

            // override clear text password with the hashed one
            user.passWord = hash;
            next();
        })
    })
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.passWord, function (err, isMatch) {
        if (err) {
            return cb(err);
        }

        cb(null, isMatch)
    })
}
// module.exports = router;
module.exports = mongoose.model('user_details', userSchema);