
const User = require('../schemes/User')
const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.serializeUser((user,done) =>{
    done(null,user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(
        
        id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    new LocalStrategy(

        (username, password, done) =>{
        console.log(username);
        User.findOne({username: username})
            .then(user => {
                console.log(user);
                if(!user){
                    console.log("User not found");
                }

                else{
                    console.log("User found");
                }
            }


    
    )}
));

module.exports = passport;