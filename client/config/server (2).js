require('dotenv').config(); // טוען את משתני הסביבה מקובץ .env
const express = require('express'); // ייבוא מודול Express
const app = express(); // יצירת מופע של Express
//const cors=require('cors');


const PORT = process.env.PORT || 3000; // הגדרת פורט

app.get('/', (req, res) => {
    res.send('Hello World!'); // תגובה בסיסית
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // הודעה על הפעלת השרת
});