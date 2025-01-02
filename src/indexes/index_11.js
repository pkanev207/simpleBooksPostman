// First all the file statements are executed on the call stack
// I/O callbacks are executed after timer callbacks!!

// this set callbacks in the I/O queue during the I/O polling phase
const fs = require("fs");

// control first check/poll if the fs function is completed and on yes set the cb
// (readfile is completed in the I/O polling phase, which is in the event loop, after the first call stack iteration)
// but the execution has passed the I/O queue and the next is the check queue
// I/O queue cb is executed on the next iteration
fs.readFile(__filename, () => {
  // this comes after readFile because I/O queue already has a cb at this point
  // It so happens that the Event loop before leaving the I/O queue and entering the check queue
  // makes another check with the microtask queues!!
  setImmediate(() =>
    console.log("This is inner setImmediate inside readFile 1")
  );
  process.nextTick(() =>
    console.log("This is inner process.nextTick inside readFile 1")
  );
  Promise.resolve().then(() =>
    console.log("This is inner Promise.resolve inside readFile 1")
  );
  setTimeout(
    () => console.log("This is inner setTimeout inside readFile 1"),
    0
  );
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// this set callbacks in the timer queue
setTimeout(() => console.log("this is setTimeout 1"), 0);
// seems like for node setTimeout - 0 is actually 0.1 similar to DOMTimer cpp
// we can never grantee the order of execution between zero milliseconds timer and I/O callback

// To queue callback into the check queue, we can use setImmediate
setImmediate(() => console.log("this is setImmediate 1"));

// we add a for loop that does nothing to avoid time issues
for (let i = 0; i < 2000000000; i++) {}
