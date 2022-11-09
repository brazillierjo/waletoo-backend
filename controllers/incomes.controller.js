const IncomeModel = require("../models/income.model");

module.exports.addIncome = async (req, res) => {
  const { user, label, amount } = req.body;
  const newIncome = new IncomeModel({
    user,
    label,
    amount
  });

  await newIncome.save();

  res.status(201).json({
    message: "New income added."
  });
};

module.exports.getIncomes = async (req, res) => {
  const income = await IncomeModel.find({ user: req.params.userId });

  res.status(200).json(income);
};

module.exports.updateIncome = async (req, res) => {
  const { label, amount } = req.body;
  await IncomeModel.findByIdAndUpdate(req.params.id, {
    label,
    amount
  });

  res.status(200).json({
    message: "Income updated."
  });
};

module.exports.deleteIncome = async (req, res) => {
  await IncomeModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Income deleted."
  });
};