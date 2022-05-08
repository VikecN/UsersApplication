require('dotenv').config();
require("./configuration/database").connect();
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { API_PORT } = process.env;

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Paths
const auth = require('./routes/auth/auth.js');
const home = require('./routes/home/home.js');
const admin = require('./routes/admin/admin.js');

//Routes
app.use("/authentication", auth);
app.use("/", home);
app.use("/admin", admin);

app.listen(API_PORT, console.log(`Server started on PORT: ${API_PORT}`))