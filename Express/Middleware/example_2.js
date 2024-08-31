const express = require("express");
const app = express();

function configUserName(req, res, next) {
  req.userName = "Ram";
  next();
}

function configUserPassword(req, res, next) {
  req.password = "ram!@$$";
  next();
}

app.use(configUserName);
app.use(configUserPassword);

app.get("/", (req, res) => {
  res.json({
    userName: req.userName,
    password: req.password
  });
});

app.listen(3000, () => console.log("Server is running ..."));