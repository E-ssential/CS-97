const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../schemes/User.js');

router.get('/', (req,res) => {
    res.send('server is up and running');
});

router.route('/create')
.post((req,res,next) =>{
    res.send("Created Posted");
    console.log('create Posted');
}
).get((req,res,next) =>{
    res.send("Get Request to create");
});




module.exports = router;