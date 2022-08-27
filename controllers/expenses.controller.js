const ExpenseModel = require("../models/expense.model");

module.exports.addExpense = async (req, res) => {
  const { user, label, amount } = req.body;
  const newExpense = new ExpenseModel({
    user,
    label,
    amount
  });

  await newExpense.save();

  res.status(201).json({
    message: "New expense added"
  });
};
