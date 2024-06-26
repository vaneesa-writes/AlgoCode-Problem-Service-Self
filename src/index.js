const express = require("express");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const { Problem } = require("./models");
const bodyParser = require("body-parser");
const logger = require("./config/logger.config");

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  logger.info(`Server Started Successfully on port ${PORT}`);
  await connectToDB();
});
