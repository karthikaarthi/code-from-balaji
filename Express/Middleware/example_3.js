const express = require("express");
const app = express();

function configUserName(req, res, next) {
  next("Ram");
}

function configUserEmail(data, req, res, next) {
  req.email = data + "@gmail.com";
  next(data);
}

function configPassword(data, req, res, next) {
  req.password = data + "!@#$";
  next(data);
}

app.use(configUserName);
app.use(configUserEmail);
app.use(configPassword);

app.get("/", (req, res) => {
  res.json({
    email: req.email,
    password: req.password
  });
});

app.listen(3000, () => console.log("Server is running ..."));