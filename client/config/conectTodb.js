const mongoose=require("mongoose") // ייבוא מודול Mongoose

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:' + err)
    }
}

module.exports = connectToDB; // ייצוא הפונקציה