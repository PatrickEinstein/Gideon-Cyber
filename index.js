const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const url = "mongodb+srv://admin:admin@cluster0.cfeljvx.mongodb.net/user-login";


const app = express();
app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


  const MONGOSE_URL = "mongodb+srv://admin:admin@cluster0.cfeljvx.mongodb.net/optice-login";

  mongoose.connect(MONGOSE_URL)
  .then( ( ) =>( console.log("Mongo Db connected sucessfully")))
  .catch(( error) => ( console.log(`error => ${error}`)))


const port = process.env.PORT || 7000;


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
