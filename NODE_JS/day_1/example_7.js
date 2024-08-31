const fs = require("fs");

console.log("Process Start ....");

const data = "Ram,10,ram@gmail.com,ram1234,1000";

fs.writeFileSync("./Files/sampleText.txt", data);

console.log("Process End ....");