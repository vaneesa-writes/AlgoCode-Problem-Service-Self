const { DB_URL, NODE_ENV } = require("./server.config");
const mongoose = require("mongoose");
const logger = require("./logger.config");

async function connectToDB() {
  if (NODE_ENV === "development") {
    try {
      await mongoose.connect(DB_URL);
      logger.info("Successfully Connected to Databse...");
    } catch (error) {
      logger.warn("Couldn't connect to databse....");
      logger.info(error);
    }
  } else {
    logger.warn("Check the environment ");
  }
}

module.exports = connectToDB;
