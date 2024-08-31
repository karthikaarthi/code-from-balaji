const fs = require("fs");

console.log("Process Start ....");

const data = fs.readFileSync("./Files/sampleText.txt", "utf-8");
console.log("Data From File: ", data);

console.log("Process End ....");