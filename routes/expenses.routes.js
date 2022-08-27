const express = require("express");
const router = express.Router();
const expensesController = require("../controllers/expenses.controller");

// INCOMES ROUTES
router.post("/add", expensesController.addExpense);

module.exports = router;
