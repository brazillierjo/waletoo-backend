const express = require("express");
const router = express.Router();
const expensesController = require("../controllers/expenses.controller");

// INCOMES ROUTES
router.get("/get", expensesController.getExpenses);
router.post("/add", expensesController.addExpense);
router.get("/get/:id", expensesController.getExpense);
router.put("/update/:id", expensesController.updateExpense);
router.delete("/delete/:id", expensesController.deleteExpense);

module.exports = router;
