const { workerData, parentPort } = require("worker_threads");

function fib(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

const result = fib(workerData.iterations);
// this is gonna send the data from the worker back up to the parent
parentPort.postMessage(result);
