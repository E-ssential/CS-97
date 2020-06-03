const express = require('express');
const router = express.Router();
const passport = require("passport");
const User = require('../schemes/User')


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
        return res.status(400).json({errors:"User is not signed in"});
    }
    else{
        return res.status(200).json({id:req.user._id, username: req.user.username, email: req.user.email});
    }
})

//Add Room 
router.post('/addRoom', (req, res) => {

    if(!req.user){
        return res.status(400).send("You are not logged in!")
    }
    else{
        User.findById(req.user._id)
        .then(
            foundUser => {
                if(foundUser.rooms.includes(req.body.newRoom)){
                    console.log("Room already exist");
                    return res.status(400).send("This room already exist");
                }
                else{
                    foundUser.rooms.push(req.body.newRoom);
                }
                foundUser.save()
                .then(
                    result => {
                    console.log("Successfully updated room");
                    return res.status(200).send(`Successfully added ${req.body.newRoom}`)
                    }
                )
                .catch(err => console.log(err));
            }
        )
        .catch( err => {
            return res.status(400).send(err);
        })

    }

})

//get Room 

router.get('/getRooms', (req, res) =>{
    
    if(!req.user){
        return res.status(400).send("You are not logged in!");
    }

    else{
        User.findById(req.user._id)
        .then(
            foundUser =>{
                console.log("Sending the rooms of user");
                return res.status(200).send(foundUser.rooms);
            }
        )
        .catch(
            err => {
                return res.status(400).send(err);
            }
        )   
    }

})


//sign the user out
router.get('/logout', (req, res)=>{
    req.logout();
    return res.status(200).send("successfully logged out");
})
module.exports = router;