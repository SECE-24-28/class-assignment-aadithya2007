const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    fName : String,
    email : String,
    phone : Number
});

module.exports = mongoose.model('User', userSchema);