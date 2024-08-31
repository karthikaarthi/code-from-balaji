const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  // res.json({`
  //   "message": "welcome to express server"
  // });

  // res.redirect("http://caddcae.com/");

  // res.send("<h1> Hi </h1>");

  // res.sendFile(path.join(__dirname, "./Files/content.txt"));

  // res.statusCode(200);
  // res.set({
  //   "Content-Type": "text/html"
  // });

  // res.end("<h1> Hi </h1>");

  res.download(path.join(__dirname, "./Files/content.txt"));
});

app.listen(3000, () => console.log("Server is running ...."));