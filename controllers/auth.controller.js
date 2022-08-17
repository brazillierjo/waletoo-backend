const UserModel = require("../models/user.model");

module.exports.signUp = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  const user = await UserModel.create({
    email,
    password,
    firstname,
    lastname
  });

  res.status(201).send({ user });
};
