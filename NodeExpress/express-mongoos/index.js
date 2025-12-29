const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB  = require('./config/db');
const router = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', require('./routes/userRoute'));

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
});