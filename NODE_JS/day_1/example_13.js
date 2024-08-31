const fs = require("fs");

console.log("Process Start ....");

setTimeout(() => {
  fs.unlinkSync("./Files/temp.txt");
}, 3000);

console.log("Process End ....");