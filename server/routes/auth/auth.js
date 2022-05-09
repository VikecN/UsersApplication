const express = require('express');
const {Login, Logout, Register} = require("../../controllers/auth/auth.js")

var router = express.Router();

router.post("/login", Login);

router.get("/logout", Logout);

router.get("/register", Register);

module.exports = router