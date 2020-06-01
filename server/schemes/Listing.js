const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    username:{
        type: String, 
        lowercase: true,
        required:[true, 'Username is required']
    }, 
    item:{
        type: String,
        lowercase: true,
        required:[true, 'Item Name is required']
    },
    quantity:{
        type: Number,
        min: 1,
        max: 99,
        required:[true, 'Quantity is required']
    },
    address:{
        type: String,
        required:[true, 'Address is required']
    }, 
    time : 
    { 
        type : Date, 
        default: Date.now 
    }
})

module.exports = mongoose.model('listings', listingSchema, 'listingInfo');