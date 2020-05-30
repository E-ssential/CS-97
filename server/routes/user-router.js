const express = require('express');
const router = express.Router();
const passport = require("passport");


router.get('/', (req, res, next) =>{
    // passport.authenticate('local', 
    // (err, user, info) => {
    //     if(!user){
                        
    //         return res.status(400).json({errors:info});
    //     }
    //     else{   
    //         console.log(user);
    //         return res.status(200).json({success: `created ${user.username}`});
    //     }



    // })(req, res, next);
    res.send('hello');
    console.log("someone broke in");

})

module.exports = router;