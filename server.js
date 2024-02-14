const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDb =require("./config/dbcongig");
const transactionDbRouter = require("./routes/transactionDataImport");
//importing routes of transactions

const transactionRouter =require("./routes/transactions.router");
//config
dotenv.config();
//mongodb conf
connectDb();
//app
const app =express();
app.use(cors());
app.use(express.json());

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("hello user")
});

app.use("api/transactions",transactionRouter);
app.use("/api/transactionsdata",transactionDbRouter)

// app.listen(PORT,()=>{
//     console.log("server running")
// })

//mongo connect
mongoose.connection.once("open",()=>{
    console.log("mongo connected");
    app.listen(process.env.PORT || PORT,()=>{
        console.log("mongo and server running")
    })
})