const fs = require("fs");

console.log("Process Start ....");

const FILE_PATH = "C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_1\\Files\\temp.txt";

fs.unlink(FILE_PATH, (err) => {
  if (err) throw err;
  console.log("Deleted ....");
});

console.log("Process End ....");