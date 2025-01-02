const fs = require("fs");
const readableStream = fs.createReadStream(__filename);
readableStream.close();
// this is how we set cbs on close queue
readableStream.on("close", () => {
  console.log("this is from readableStream close event callback");
});
// Close queue cbs are executed after all other queues cbs in a given iteration of the Event loop
setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));

// fs.readFile(__filename, () => {
//   setTimeout(() => console.log("this is setTimeout 2"), 0);
//   process.nextTick(() => console.log("this is process.nextTick 2"));
//   console.log("this is readFile 1");
// });
// fs.readFile(__filename, () => {
//   console.log("this is readFile 2");
// });
