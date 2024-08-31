const fs = require("fs");

console.log("Process Start ....");

const FILE_PATH = "C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_1\\Files\\sampleText.txt";

const data = "\nKumar,10,kumar@gmail.com,kumar1234,1000";

fs.appendFile(FILE_PATH, data, (err) => {
  if (err) throw err;
  console.log("Apped file complete ....");
});

console.log("Process End ....");