const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.signUp = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  const user = await UserModel.findOne({ email });

  if (user) {
    return res.status(400).json({
      message: "email already exists."
    });
  }
  const newUser = new UserModel({
    email,
    password,
    firstname,
    lastname
  });

  await newUser.save();
  res.status(201).json({
    message: "User created."
  });
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User not found."
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Invalid password."
    });
  }

  res.status(201).json({
    message: "User logged in."
  });
};
