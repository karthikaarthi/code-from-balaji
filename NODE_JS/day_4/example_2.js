const http = require("http");

const server = http.createServer((req, res) => {
  const URL = req.url.toLowerCase();
  
  if (URL == "/" || URL == "/home") {
    res.end("<h1> Home Page </h1>");
  } 
  else if (URL == "/about") {
    res.end("<h1> About Page </h1>");
  }
  else if (URL == "/contact") {
    res.end("<h1> Contact Page </h1>");
  }
  else {
    res.end("<h1> Page Not Found Error Code: 404 </h1>")
  }
   
});

server.listen(3000, () => console.log("Server is running on port 3000!"));
