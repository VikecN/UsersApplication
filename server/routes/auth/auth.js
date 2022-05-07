const express = require('express');

var router = express.Router();

router.get("/login", (req, res) => {
    res.send("Login Page.");
});

router.get("/logout", (req, res) => {
    res.redirect('/login');
});

router.get("/register", (req, res) => {
    res.send("Register Page.");
});

module.exports = router