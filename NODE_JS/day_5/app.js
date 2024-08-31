const http = require("http");
const fs = require("fs");


const indexHTML = fs.readFileSync("C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_5\\views\\index.html", "utf-8");
const aboutHTML = fs.readFileSync("C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_5\\views\\about.html", "utf-8")
const contactHTML = fs.readFileSync("C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_5\\views\\contact.html", "utf-8")
const errorHTML = fs.readFileSync("C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_5\\views\\404.html", "utf-8");

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  const url = req.url.toLowerCase();

  if (url == "/" || url == "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(indexHTML);
  } 
  else if (url == "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(aboutHTML);
  }
  else if (url == "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(contactHTML);
  }
  else {
    res.writeHead(404, {
      "Content-Type": "text/html"
    });
    res.end(errorHTML);
  }
} 

server.listen(3000, () => console.log("Server is running ...."));