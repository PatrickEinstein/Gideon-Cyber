const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOSE_URL);
    console.log(
      "MongoDB connected",
      connect.connection.host,
      connect.connection.port
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
