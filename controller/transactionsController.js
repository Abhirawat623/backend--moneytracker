const Transaction = require("../models/transaction.model")

const transactionHandle= async(req,res)=>{
    try{
    
        const newTransaction= new Transaction({
            description: req.body.description,
            type:req.body.type,
            amount:req.body.amount
        })
        
        const savedTransaction = await newTransaction.save();
        res.status(200).json(savedTransaction);
    }
    catch(error){
       res.status(500).json({message:"Error adding transactions"})
    }
}

module.exports = transactionHandle;