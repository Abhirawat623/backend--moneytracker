const Transaction = require("../models/transaction.model");


const transactionDataHandle = async (req, res) => {
  const transactiontype = req.query.type;
  try {
    let transactions;

    if (transactiontype) {
        transactions = await Transaction.find({ type: transactiontype });
    } else {
        transactions = await Transaction.find({});
    }
    transactions
      ? res.json(transactions)
      : res.status(404).json({ message: "no data found" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = transactionDataHandle;