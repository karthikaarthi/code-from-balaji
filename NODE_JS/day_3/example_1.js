const events = require("events");

class MyEvents extends events.EventEmitter {}

const myEvent = new MyEvents();

myEvent.on("Hi", () => {
  console.log("Hi event is work ...");
});

myEvent.on("Temp", () => {
  console.log("Temp event is work ...");
});

myEvent.once("Ram", () => {
  console.log("Ram event is work ...");
});


myEvent.emit("Hi");
myEvent.emit("Hi");

myEvent.emit("Ram");
myEvent.emit("Ram");
myEvent.emit("Ram");
myEvent.emit("Ram");

setTimeout(() => {
  myEvent.emit("Temp");
}, 4000);