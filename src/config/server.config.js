const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.DB_STRING);

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.DB_STRING,
};
