const express = require("express");

const transactionRouter = express.Router();

const transactionHandle = require("../controller/transactionsController");

transactionRouter.route("/").get(transactionHandle)

module.exports =transactionRouter;