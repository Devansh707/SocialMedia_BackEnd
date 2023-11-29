const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {type : String, required : true},
    middleName : String,
    lastName: {type : String, required : true},
    dateOfBirth : {type : Date, required : true},
    userName : {type : String, required : true},
    password : {type : String, required : true},
    gender : {type : String, required : true},
    phoneNumber : {type : Number, required : true},
    email : {type : String, required : true},
    bio : {type : String, required : true},
    createdOn : {type: Date, default : Date.now(), required : true},
    lastUpdatedOn: {type: Date, required : true}
})

module.exports = mongoose.model("User", userSchema)