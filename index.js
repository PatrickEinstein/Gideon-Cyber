const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const User =require("./models/userModel")
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use("/users", userRoutes );

app.get("/", (req, res )=>{
  res.send(" Server is listening");
})
app.use(errorHandler);


  const MONGOSE_URL = "mongodb+srv://admin:admin@cluster0.cfeljvx.mongodb.net/optice-login";

  mongoose.connect(MONGOSE_URL)
  .then( ( ) =>( 
    console.log("Mongo Db connected sucessfully")))
  .catch(( error) => ( console.log(`error => ${error}`)))


const port = process.env.PORT || 7000;


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
