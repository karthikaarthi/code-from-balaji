const fs = require("fs");

const readStream = fs.createReadStream("./Files/User_Records.csv", "utf-8");
const writeStream = fs.createWriteStream("./Files/output.csv");

readStream.on("data", (chunk) => {
    writeStream.write(chunk);
});

writeStream.on("error", (err) => {
  console.log(err.message);
});

readStream.on("error", (err) => {
  console.log(err.message);
});