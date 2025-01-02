// Event Loop - it's just a C program, the core of Libuv, alive while the app is up and running
const https = require("node:https");
// this is network input/output  operation and not a CPU bound operation
// It does not use the thread pool
// Libuv instead delegates the work to the operating system kernel and whenever possible,
// it will poll the kernel and see if the request has completed
// polling - check the status of (a device), especially as part of a repeated cycle
const MAX_CALLS = 12;
const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
