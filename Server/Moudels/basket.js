const mongoose = require("mongoose")
const product = require("./Product")

const basketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    arrProdect: [{
        prodectId: {
            type: mongoose.Schema.ObjectId,
            ref:"Prodect",
            required: true
        },

    }]
},{timestamps:true})
