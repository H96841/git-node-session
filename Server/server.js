// http://localhost:1005/api/products
const dotenv=require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/conectTodb")
// const { default: mongoose } = require("mongoose")
const PORT = process.env.PORT || 7001
const app = express()
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.get("/",(req,res)=>{
res.send("this is the home page")
})

app.use("/api/auth", require("../Server/Router/authRouter"));
app.use("/api/products", require("../Server/Router/productRoute"));
app.use("/api/basket",require("../Server/Router/basketRouter"));
app.listen(PORT, ()=>console.log(`server running on ${PORT}`))