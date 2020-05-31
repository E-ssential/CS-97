const express = require('express');
const router = express.Router();
const passport = require("passport");

//THIS PAGE IS DEDICATED TO TESTING PURPOSES


router.post('/test1', (req, res, next) =>{
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

//FOR DEBUGGING PURPOSE
// router.route('/')
// .post((req, res, next) => {
//     console.log("body parsing", req);
//     res.send("hello there");

// })
// .get((req, res, next) =>{
//     res.send("stealing from me huh");
//     console.log("someone broke in");
// })

module.exports = router;