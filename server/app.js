const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
let httpResponse = require("express-http-response");
var cors = require('cors')

dotenv.config({ path: "./config/config.env" });
const app = express();
const authRoute = require("./routes");


// database connection
mongoose.connect(
  process.env.DB_URL,
  () => {
    console.log('Connected to MongoDB');
  }
);
mongoose.set('debug', true);

//requiring Model
require('./model/Equation')

//middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());
app.use(authRoute);
app.use(httpResponse.Middleware)

app.listen(3001, () => {
  console.log("listening on port " + 3001);
});