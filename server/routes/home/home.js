const express = require('express');
const {Home} = require("../../controllers/home/home.js")

var router = express.Router();

router.get("/", Home);

module.exports = router