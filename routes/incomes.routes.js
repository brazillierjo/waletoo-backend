const express = require("express");
const router = express.Router();
const incomesController = require("../controllers/incomes.controller");

// INCOMES ROUTES
router.post("/add", incomesController.addIncome);

module.exports = router;
