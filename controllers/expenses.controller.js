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
    message: "New expense added."
  });
};

module.exports.getExpenses = async (req, res) => {
  const expense = await IncomeModel.find({ user: req.params.userId });

  res.status(200).json(expense);
};

module.exports.updateExpense = async (req, res) => {
  const { label, amount } = req.body;
  await ExpenseModel.findByIdAndUpdate(req.params.id, {
    label,
    amount
  });

  res.status(200).json({
    message: "Expense updated."
  });
};

module.exports.deleteExpense = async (req, res) => {
  await ExpenseModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Expense deleted."
  });
};