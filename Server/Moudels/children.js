const mongoose = require("mongoose")

const childrenSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
age:{
    type:Number,
    required:false
},
},{timestamps:true})

module.exports=mongoose.model("children",childrenSchema)