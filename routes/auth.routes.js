const authController = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();

// USER ROUTES
router.post("/register", authController.signUp);

module.exports = router;
