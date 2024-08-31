const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer();

const indexHTML = fs.readFileSync(path.join(__dirname, "./views/index.html"), "utf-8");
const userRecordsHTML = fs.readFileSync(path.join(__dirname, "./views/userRecords.html"), "utf-8");

server.on("request", (req, res) => {
  const url = req.url.toLowerCase();

  if (url == "/") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(indexHTML);
  }

  if (url == "/user") {
    req.on("data", (chunk) => {
      const data = Buffer.from(chunk).toString();
      const user = querystring.parse(data, "&");
      const finalHTML = userRecordsHTML.replace("{{userName}}", user.userName)
                                       .replace("{{age}}", user.age)
                                       .replace("{{email}}", user.email)
                                       .replace("{{password}}", user.password)
                                       .replace("{{dob}}", user.dob)
                                       .replace("{{gender}}", user.gender)
                                       .replace("{{courses}}", user.courses)
                                       .replace("{{hobbies}}", user.hobbies)
                                       .replace("{{address}}", user.address);
      res.end(finalHTML);
    });
  }
});

server.listen(3000, () => console.log("Server is running ...."));