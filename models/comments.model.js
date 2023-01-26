const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    author : {type : mongoose.Schema.Types.ObjectId, ref : 'user',
     default : mongoose.Types.ObjectId()
    } ,
    content : { type : String, required : true},
    post : {type : mongoose.Schema.Types.ObjectId, ref : 'post'} ,
    date : {type : Date, default : Date.now}
})

module.exports = mongoose.model('comment', commentSchema)