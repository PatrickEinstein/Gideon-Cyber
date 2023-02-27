const { default: mongoose } = require("mongoose");

const connectDb = async () => {

  const MONGOSE_URL = "mongodb+srv://admin:admin@cluster0.cfeljvx.mongodb.net/optice-login";
  try {
    const connect = await mongoose.connect(MONGOSE_URL);
    console.log(
      "MongoDB connected",
    )
  } catch (error) {
    console.log(`there is an error ${error}`)
  }
};

module.exports = connectDb;
