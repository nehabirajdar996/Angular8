const mongoose=require("mongoose")
const Schema=mongoose.Schema
const todoSchema=new Schema({
    title:String,
    description:String,
    completed:String
})

const Todo=mongoose.model('arpitacollections',todoSchema)// collection name
module.exports=Todo