require('dotenv').config();
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}))

//Paths
const auth = require('./routes/auth/auth.js');
const home = require('./routes/home/home.js');
const admin = require('./routes/admin/admin.js');

//Routes
app.use("/authentication", auth);
app.use("/", home);
app.use("/admin", admin);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server started at PORT: " + PORT));