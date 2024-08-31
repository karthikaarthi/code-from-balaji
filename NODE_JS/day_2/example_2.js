const fs = require("fs");

const writeStream = fs.createWriteStream("./Files/output.csv");

writeStream.write("Sample Text");

writeStream.end();

writeStream.on("finish", () => {
  console.log("Finish ...");
});

writeStream.on("error", (err) => {
  console.log(err.message);
});
