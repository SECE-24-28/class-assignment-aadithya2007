const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const router = require("./routs/rout");

const app = express();
const port=process.env.PORT ;
const { connectDB } = require('./config/db');
app.use(express.json());
app.use("/api/v1", router);



connectDB().then(()=>{
    app.listen(port, () => {
        console.log("server is running on", port);
    });
});