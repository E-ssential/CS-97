const express = require('express');
const passport = require("passport");
const router = express.Router();

const User = require('../schemes/User.js');


router.route('/create')
.post((req,res,next) =>{
    res.send("Created Posted");
    console.log('create Posted');
}
).get((req,res,next) =>{
    res.send("Get Request to create");
});




module.exports = router;