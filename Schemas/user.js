const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {type : String, required : true},
    middleName : String,
    lastName: {type : String, required : true},
    dateOfBirth : {type : Date, required : true},
    userName : {type : String, required : true},
    password : {type : String, required : true},
    token : {type : String, required : true},
    gender : {type : String, required : true},
    phoneNumber : {type : Double, required : true},
    email : {type : String, required : true},
    bio : {type : String, required : true}
})

exports.module = mongoose.model("User", userSchema)