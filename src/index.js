const express = require("express");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");

app = express();

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  res.json({ message: "Problem Service is alive." });
});

app.listen(PORT, () => {
  console.log(`Server Started Successfully on port ${PORT}`);
});
