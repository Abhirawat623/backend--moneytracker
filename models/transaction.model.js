const mongoose = require("mongoose");

const transactionSchema =new mongoose.Schema({
    description:{type:String,required:true},
    type:{type:String,required:true},
    amount:{type:String,required:true}
},
{timestamps:true});

const Transaction= mongoose.model("transaction",transactionSchema);

module.exports= Transaction;