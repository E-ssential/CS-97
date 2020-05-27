const bcrypt = require('bcryptjs');
const User = require('../schemes/User')
const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.serializerUser((user,done) =>{
    done(null,user.id);
})

passport.deserializerUser((id, done) => {
    User.findById(
        
        id, (err, user) => {
        done(err, user);
    });
});