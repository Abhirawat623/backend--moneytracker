const express = require("express");

const transactionRouter = express.Router();

const transactionHandle = require("../controller/transactionsController");

transactionRouter.route("/transactions").post(transactionHandle)

module.exports =transactionRouter;