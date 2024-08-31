const fs = require("fs");

console.log("Process Start ....");

const SRC_FILE_PATH = "C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_1\\Files\\sampleText.txt";
const DIST_FILE_PATH = "C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_1\\Files\\temp.txt";

fs.copyFile(SRC_FILE_PATH, DIST_FILE_PATH, (err) => {
  if (err) throw err;
  console.log("Success ....");
});

console.log("Process End ....");