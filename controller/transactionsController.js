const Transaction = require("../models/transaction.model")

const transactionHandle= async(req,res)=>{
    try{
   const transaction = await Transaction.find({});
   res.json(transaction);
    }
    catch(err){
        console.log(err);
    }



}

module.exports = transactionHandle;