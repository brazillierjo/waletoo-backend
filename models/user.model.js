const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "L'e-mail est requis"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Le mot de passe est requis"]
  },
  firstname: {
    type: String,
    required: [true, "Le prénom est requis"]
  },
  lastname: {
    type: String,
    required: [true, "Le nom est requis"]
  }
});

UserSchema.pre("save", async function(next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function(newPassword) {
  const user = this;
  const isMatch = await bcrypt.compare(newPassword, user.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
