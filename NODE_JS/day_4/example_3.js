const http = require("http");

const server = http.createServer(requestHandler);


function requestHandler(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html",
    "myOwnHeader": "some text"
  });
  res.end("<h1> HI </h1>");
}

server.listen(3000, () => console.log("Server is running ...."));