const { workerData, parentPort } = require("worker_threads");

// Access the shared buffer
const buffer = new Uint8Array(workerData.sharedBuffer);

for (let i = 0; i < buffer.length; i++) {
  buffer[i] = 7;
}

// grab the sharedBuffer and mutated it and no passing it, just tell the parent that it's done
parentPort.postMessage("done");
