const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
let httpResponse = require("express-http-response");


dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(express.static("./public"));


//database connection
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
app.use(express.json());
app.use(httpResponse.Middleware)

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});