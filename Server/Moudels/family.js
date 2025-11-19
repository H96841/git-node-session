const mongoose = require("mongoose")
const children = require("./children")

const familySchema = new mongoose.Schema({
fatherName:{
    type:String,
    required:true,
},
motherName:{
    type:String,
    required:true,
},
fatherAge:{
    type:Number,
    required:false
},
motherAge:{
    type:Number,
    required:false
},
children:[{
    type:children,
    default:0
}]


},{timestamps:true})

module.exports=mongoose.model("family",familySchema)