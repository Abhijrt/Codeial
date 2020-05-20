const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true,
        unique : true
    }
},{
    timestamps : true
});

const User = mongoose.model('User',userSchema);
console.log("Connected to data base");
module.exports = User;