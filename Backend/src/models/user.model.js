const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username is already taken"],
        required:true
    },
    email:{
        type:String,
        unique:[true,"Account exists with this email address"],
        required:true
    },
    password:{
        type:String,
        require:true
    }
 })

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;