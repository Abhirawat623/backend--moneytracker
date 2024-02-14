const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//config
dotenv.config();
//app
const app =express();
app.use(cors());
app.use(express.json());

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("hello user")
});

app.listen(PORT,()=>{
    console.log("server running")
})