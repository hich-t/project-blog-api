const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({

    title : {type : String, required : true},
    content : {type : String, required : true},
    author : {type :  mongoose.Schema.Types.ObjectID, ref : 'user',
    default : mongoose.Types.ObjectId()} ,
    date : {type : Date, default : Date.now()},

})

module.exports = mongoose.model('post', postSchema)