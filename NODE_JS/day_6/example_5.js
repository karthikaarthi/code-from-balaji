const http = require("http");
const fs = require("fs");

const FILE_PATH = "C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_6\\views\\form.html";
const formHTML = fs.readFileSync(FILE_PATH, "utf-8");

const server = http.createServer((req, res) => {
  if (req.url == "/form") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(formHTML);
  }
  else {
    const formatURL = "http://localhost:3000" + req.url;
    const url = new URL(formatURL);
    console.log("UserName: ", url.searchParams.get("userName"));
    console.log("Age: ", url.searchParams.get("age"));
    console.log("Email: ", url.searchParams.get("email"));
    console.log("Password: ", url.searchParams.get("password"));
    console.log("Gender: ", url.searchParams.get("gender"));
    console.log("Coures: ", url.searchParams.getAll("coures"));
    res.end("Ok");
  }
});

server.listen(3000, () => console.log("Server is running ...."));
