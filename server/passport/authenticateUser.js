
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
        
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },

        (req, username, password, done) =>{

        // console.log(username, password);
        console.log(req.body);
        //For Register  
        if(req.body.isSignUp){
            //determine it is a register attempt
            const newUser = new User({
            username: username,
            password: password,
            email: req.body.email
            });
            
            
            
            newUser.save()
            .then(
                user => {
                    
                    return done(null,user);
                }
            )
            .catch(
                err => {
                    console.log('there is error');
                    console.log(err);
                    return done(null, false, {message:err});
                }
            )
        }
        
        //For Login
        else{
            User.findOne({username: username})
            .then(user => {
                
                let attemptPassword = password;
                if(!user){
                    return done(null, false, {message:'This username/password does not exist'})
                }
                else{
                    console.log("will verify now");
                    
                    user.comparePassword(attemptPassword, function(err, isMatch) {
                        if (err){
                            console.log('hihi');
                            return done(null, false, {message:'This username/password does not exist'})
                        }
                        console.log(attemptPassword, isMatch); // -> Password123: true
                    });
                }

            })
        }
    }  
));

module.exports = passport;