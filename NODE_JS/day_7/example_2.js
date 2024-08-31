const path = require("path");

const FILE_PATH = path.join(__dirname, "./example_2.js"); 
// console.log(FILE_PATH);

console.log("BaseName: ", path.basename(FILE_PATH));
console.log("DirName: ", path.dirname(FILE_PATH));
console.log("ExtName: ", path.extname(FILE_PATH));
console.log("Output: ", path.isAbsolute(FILE_PATH));

const parsedPath = path.parse(FILE_PATH);

console.log(parsedPath);
console.log("StringPath: ", path.format(path.parse(FILE_PATH)));