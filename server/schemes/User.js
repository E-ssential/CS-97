const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;



const userSchema = new mongoose.Schema({
    username:{
        type: String,
        lowercase:true,
        unique: true,
        required:[true, 'Username is required'], 
        match:[/^[a-zA-Z0-9]+$/, 'is an invalid username'],
        index: true
    },
    password:{
        type: String,
        required:[true, 'Password is required']
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:[true, 'Email is required'],
        match:[/\S+@\S+\.\S+/, 'is an invalid email'],
        index: true, 
        uniqueCaseInsensitive: true
    }
}, {timestap: true})

userSchema.plugin(uniqueValidator, {message: '{PATH}'});


//encrypt the password
userSchema.pre('save', function(next) {
    var user = this;
// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        console.log("hashedPassword stored");
        user.password = hash;
        next();
    });
});
});

//validatePassword
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};



userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userSchema, 'userInfo');