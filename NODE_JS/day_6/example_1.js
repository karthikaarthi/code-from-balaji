const url = require("url");

const URL = "http://localhost:8080/index.html?userName=Balaji&password=balaji1234";
const  parsedURL = url.parse(URL);
// console.log(parsedURL);
console.log("Protocol: ", parsedURL.protocol);
console.log("Host: ", parsedURL.host);
console.log("HostName: ", parsedURL.hostname);
console.log("Port: ", parsedURL.port);
console.log("QueryString: ", parsedURL.query);
console.log("PathName: ", parsedURL.pathname);