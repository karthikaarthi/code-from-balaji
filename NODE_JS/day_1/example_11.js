const fs = require("fs");

console.log("Process Start ....");

fs.copyFileSync("./Files/sampleText.txt", "./Files/temp.txt");

console.log("Process End ....");