const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Provide an email."],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please, provide a valid email."
    ]
  },
  password: {
    type: String,
    required: [true, "Password is required."]
  },
  firstname: {
    type: String,
    required: [true, "Firstname is required."]
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required."]
  }
});

UserSchema.pre("save", async function(next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

module.exports = mongoose.model("User", UserSchema);
