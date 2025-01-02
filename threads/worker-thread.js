const { parentPort } = require("node:worker_threads");

let j = 0;
// simulate CPU work
for (let i = 0; i < 6000000000; i++) {
  j++;
}

parentPort.postMessage(j);
