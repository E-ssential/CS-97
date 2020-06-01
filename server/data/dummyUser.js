
const User= require('../schemes/User.js');
const mongoose = require('mongoose');


const addNewUser = () =>{
    const dummyUser = new User({
        username: 'henryff',
        password: 'test1234',
        email: 'blgas@jojj.com'
    });
    
    dummyUser.save((err) =>{
        console.log(err);
    });
}

module.exports ={addNewUser};