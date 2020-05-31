const express = require('express');
const router = express.Router();
const passport = require("passport");



router.post("/register-login",
            //this section checks the authentication
        (req, res, next) =>{
            
            passport.authenticate('local'
            ,   
            { 
                successRedirect: '/',
                failureRedirect: '/listingsForm'
            }
            ,
            //this will be called if authenticate was successful
            (err, user, info) => {
                if(req.body.isSignUp){

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
                        return res.status(200).json({success: `created ${user.username}`});
                    }
                }
                else{
                    console.log(req.user);
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
                        
                        return res.status(200).json({success:`Welcome back ${user.username}`});
                    }
                }
            })(req,res,next)
        }




);
module.exports = router;