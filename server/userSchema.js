const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, 'Username is required']
    },
    created:{
        type: Data,
        required:[true, 'Created data is required']

    }
})

module.exports = userSchema;