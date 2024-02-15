

const express = require("express");

const transactionDataRouter = express.Router();

const transactionDataHandle = require("../controller/transactionsDataController");

transactionDataRouter.route("/transactionsdata").get(transactionDataHandle)

module.exports =transactionDataRouter ;

