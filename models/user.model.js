const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
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
  },
  { collection: "users" }
);

UserSchema.pre("save", async function(next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

UserSchema.methods.validatePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
