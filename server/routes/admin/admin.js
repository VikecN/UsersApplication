const express = require('express');
const {Root} = require("../../controllers/admin/admin.js");

var router = express.Router();

router.get("/", Root);

module.exports = router