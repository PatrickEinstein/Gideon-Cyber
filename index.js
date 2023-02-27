const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cors = require("cors")



const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors());

app.use("/users", userRoutes );


app.get("/", (req, res )=>{
  res.send(" Server is listening");
})



  const MONGOSE_URL = "mongodb+srv://admin:admin@cluster0.cfeljvx.mongodb.net/optice-login";

  mongoose.connect(MONGOSE_URL, {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then( ( ) =>( 
    console.log("Mongo Db connected sucessfully")))
  .catch(( error) => ( console.log(`error => ${error}`)))


const port = process.env.PORT || 7000;


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
