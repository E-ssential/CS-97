
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
                    return done(null, false, {message:err.message});
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
                            
                            return done(null, false, {message:err})
                        }
                        if(!isMatch){
                            
                            return done(null, false, {message:'This username/password does not exist'})
                        }
                        return done(null, user), {message:'Successfully Logged In'};
                    });
                }

            })
        }
    }  
));

module.exports = passport;