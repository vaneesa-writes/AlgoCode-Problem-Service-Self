const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.DB_STRING,
  LOG_DB_URL : process.env.LOG_DB_URL
};
