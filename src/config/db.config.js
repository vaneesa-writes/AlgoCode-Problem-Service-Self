const { DB_URL, NODE_ENV } = require("./server.config");
const mongoose = require("mongoose");

async function connectToDB() {
  if (NODE_ENV == "development") {
    try {
      await mongoose.connect(DB_URL);
      console.log("Successfully Connected to Databse...");
    } catch (error) {
      console.log("Couldn't connect to databse....");
      console.log(error);
    }
  } else {
    console.log("Check the environment ");
  }
}

module.exports = connectToDB;
