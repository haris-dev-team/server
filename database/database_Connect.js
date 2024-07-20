const mongoose = require("mongoose");

const database_Connect = () => {
  mongoose.connect(process.env.MONGODB_URL);

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to database");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
  });
};

module.exports = { database_Connect };
