const fs = require("fs");

const readStream = fs.createReadStream("./Files/User_Records.csv", "utf-8");


let i = 1;
readStream.on("data", (chunk) => {
  // console.log(chunk); // chunk ==> File data as string
  console.log("Running Count: ", i++);
});


readStream.on("error", (err) => {
  console.log(err.message);
});

