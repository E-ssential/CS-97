const express = require('express');
const router = express.Router();
const passport = require("passport");



router.post("/register-login",
            //this section checks the authentication
        (req, res, next) =>{
            
            passport.authenticate('local'
            ,             
            //this will be called if authenticate was successful
            (err, user, info) => {
                if(req.body.isSignUp){

                    if(err){
                        return res.status(400).json({errors:err});
                    }
                    if(!user){
                        
                        var errStr = info.message.split(': ')[1];
                        return res.status(400).send(errStr + " is already taken");
                    }
                    else{   
                        req.login(user, (err)=>{
                            if(err){
                                throw err;
                            }
                        });
                        return res.status(200).json({success: user.username});
                    }
                }
                else{
                    
                    if(err){
                        return res.status(400).json({errors:err});
                    }
                    if(!user){
                        return res.status(400).json({errors:info});
                    }
                    else{
                        req.login(user, (err)=>{
                            if(err){
                                throw err;
                            }
                        });
                        
                        return res.status(200).json({success:user.username});
                    }
                }
            })(req,res,next)
        }
);

//Check if the user is logged in
router.get('/isLoggedIn', (req, res) => {
    if(!req.user){
        res.status(400).json({errors:"User is not signed in"});
    }
    else{
        res.status(200).json({id:req.user._id, username: req.user.username, email: req.user.username});
    }
})

//sign the user out
router.get('/logout', (req, res)=>{
    req.logout();
    res.status(200).send("successfully logged out");
})
module.exports = router;