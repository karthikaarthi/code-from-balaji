const url = require("url");

const newURL = url.format({
  protocol: "https",
  host: "localhost",
  pathname: "/index.html",
  query: {
    userName: "Balaji",
    email: "balaji@gmail.com",
    password: "balaji1234"
  }
});

console.log("New URL: " + newURL);