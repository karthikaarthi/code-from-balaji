const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Welcome To Express Server </h1>");
});

app.listen(3000, () => console.log("Server is running ...."));


