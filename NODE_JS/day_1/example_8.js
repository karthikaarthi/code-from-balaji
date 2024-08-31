const fs = require("fs");

console.log("Process Start ....");

const FILE_PATH = "C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_1\\Files\\sampleText.txt";

const data = "Sam,10,sam@gmail.com,sam1234,1000";

fs.writeFile(FILE_PATH, "a", (err) => {
  if (err) throw err;
  console.log("File write successfully ...");
});


console.log("Process End ....");