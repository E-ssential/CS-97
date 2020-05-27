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
            passport.authenticate('local'
            ,   
            {   successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: 'Invalid username or password.' 
            }),

            //this will be called if authenticate was successful
            (req,res) => {
                console.log('hello');
            }




);
module.exports = router;