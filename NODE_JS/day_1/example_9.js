const fs = require("fs");

console.log("Process Start ....");

const data = "\nRam,10,ram@gmail.com,ram1234,1000";

fs.appendFileSync("./Files/sampleText.txt", data);

console.log("Process End ....");