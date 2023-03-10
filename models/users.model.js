const mongoose=require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({

    username : {type : String, unique : true },
    email : {type : String, unique : true },
    password : {type : String},
})

module.exports = mongoose.model("user", userSchema)