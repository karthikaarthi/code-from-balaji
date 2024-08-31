console.log("Process Start ...");

let i = 1;

const id = setInterval(function() {
  if (i == 5) {
    clearInterval(id);
  }
  console.log(i++);
}, 1000);

console.log("Process End ....");