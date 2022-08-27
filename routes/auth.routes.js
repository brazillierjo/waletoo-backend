const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// USER ROUTES
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);


module.exports = router;
