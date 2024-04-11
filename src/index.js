const express = require("express");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const { Problem } = require("./models");

app = express();

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server Started Successfully on port ${PORT}`);
  await connectToDB();
});
