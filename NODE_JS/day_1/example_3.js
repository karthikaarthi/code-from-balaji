console.log("Process Start ...");

setInterval(() => {
  console.log("Set Interval worked ....");
}, 1000);

setInterval((name) => {
  console.log("Name : ", name);
}, 2000, "Ram");

console.log("Process End ....");