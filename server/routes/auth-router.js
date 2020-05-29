const express = require('express');
const router = express.Router();
const passport = require("passport");

router.route('/')
.post((req, res, next) => {
    console.log("body parsing", req.body);
    res.send("hello there");

})
.get((req, res, next) =>{
    res.send("stealing from me huh");
    console.log("someone broke in");
})

router.post("/register-login",
            //this section checks the authentication
        (req, res, next) =>{
            
            passport.authenticate('local'
            ,   
            {   successRedirect: '/',
                failureFlash: true,
                successFlash: 'Welcome!' 
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
                        console.log(user);
                        return res.status(200).json({success: `created ${user.username}`});
                    }
                }
            })(req,res,next)
        }




);
module.exports = router;