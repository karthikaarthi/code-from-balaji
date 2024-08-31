const http = require("http");

const server = http.createServer((req, res) => {
  res.end("<h1> Welcome To Node Js Server </h1>");
});

server.listen(3000, () => console.log("Server is running on port 3000!"));

