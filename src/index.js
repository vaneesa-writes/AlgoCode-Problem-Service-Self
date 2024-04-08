const express = require("express");
const { PORT } = require("./config/server.config");

app = express();

app.get("/ping", (req, res) => {
  res.json({ message: "Problem Service is alive." });
});

app.listen(PORT, () => {
  console.log(`Server Started Successfully on port ${PORT}`);
});
