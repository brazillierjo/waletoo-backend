const express = require("express");
const router = express.Router();
const incomesController = require("../controllers/incomes.controller");

// INCOMES ROUTES
router.post("/add", incomesController.addIncome);
router.get("/get/:userId", incomesController.getIncomes);
router.put("/update/:id", incomesController.updateIncome);
router.delete("/delete/:id", incomesController.deleteIncome);

module.exports = router;
