const express = require("express");
const app = express();

app.get("/:id/:userName/:password", (req, res) => {
  console.log("HostName: ", req.hostname);
  console.log("Ip: ", req.ip);
  console.log("Protocol: ", req.protocol);
  console.log("PathName: ", req.path);
  console.log("Params: ", req.params);
  console.log("Querystring: ", req.query);
  console.log("Route: ", req.route);
  console.log("Secure: ", req.secure);
  console.log("Subdomains: ", req.subdomains);
});

app.listen(3000, () => console.log("Server is running ...."));