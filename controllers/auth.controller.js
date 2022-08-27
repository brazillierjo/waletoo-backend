const UserModel = require("../models/user.model");

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
      message: "email not found."
    });
  }
  if (user.password !== password) {
    return res.status(400).json({
      message: "wrong password."
    });
  }

  res.status(200).json({
    message: "User signed in."
  });
};
