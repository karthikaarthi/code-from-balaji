
console.log("Process Start ...");

setTimeout(() => {
  console.log("Set Timeout worked ...");
}, 3000);

setTimeout((name) => {
  console.log("Name : ", name);
}, 4000, "Balaji");

console.log("Process End ....");