const express = require("express");
const Transaction =require("../models/transaction.model");

const transaction = require("../database/transactions");

const transactionDbRouter=express.Router()
transactionDbRouter.route("/").
post(
     async(req,res)=>{

        try{
            const transactionINDb = await Transaction.insertMany(transaction.data);
            res.json(transactionINDb)
        }
        catch(err){
            res.json({mrssage:"Transactions can't be added"})
        }
     }

)

module.exports= transactionDbRouter;