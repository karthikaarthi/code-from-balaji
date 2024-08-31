const express = require("express");
const app = express();

function configUserInformation(req, res, next) {
  req.userName = "Ram";
  req.password = "ram!@#$";
  next();
}

app.use(configUserInformation);

app.get("/", (req, res) => {
  res.json({
    userName: req.userName,
    password: req.password
  });
});

app.listen(3000, () => console.log("Server is running ..."));