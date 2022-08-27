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
