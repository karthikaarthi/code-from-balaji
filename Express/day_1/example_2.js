const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.end("<h1> Home Page </h1>");
});

app.get("/about", (req, res) => {
  res.end("<h1> About Page </h1>")
});

app.get("/error", (req, res) => {
  res.end("<h1> Page not found : 404 </h1>")
});


app.listen(3000, () => console.log("Server is running ...."));