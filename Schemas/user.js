const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {type : String, required : true},
    middleName : String,
    lastName: {type : String, required : true},
    dateOfBirth : {type : Date, required : true},
    userName : {type : String, required : true},
    password : {type : String, required : true},
    gender : {type : Boolean, required : true},
    phoneNumber : {type : Number},
    email : {type : String},
    bio : {type : String},
    createdOn : {type: Date, default : Date.now(), required : true},
    lastUpdatedOn: {type: Date, required : true},
    lastLoggedIn : {type: Date, required : true},
    profilePic : {type: String}
})

module.exports = mongoose.model("User", userSchema)