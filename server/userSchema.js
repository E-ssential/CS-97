const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');

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
        index: true
    }
}, {timestap: true})

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

//encrypt the password
userSchema.methods.setPassword = (password) => {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

//validatePassword
userSchema.methods.validPassword = (password) => {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
}



module.exports = mongoose.model('UserModsadel', userSchema);