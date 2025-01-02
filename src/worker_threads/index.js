// Create new threads, different from a fork (which is much slower)
// Each thread runs in its own context, ha sits own block of memory
const { Worker } = require("worker_threads");

// function fib(n) {
//   return n < 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
// }

const doFib = async (iterations) => {
  return new Promise((resolve) => {
    const start = Date.now();
    // ---- Start worker
    const worker = new Worker("./worker.js", {
      workerData: { iterations },
    });
    // ---- Listen for message from worker
    worker.once("message", (data) => {
      console.log(
        `worker [${worker.threadId}]: done in ${Date.now() - start}ms`
      );
      resolve(data);
    });
    // ---- Listen for error from worker
    worker.once("error", (err) => reject(err));
    // const result = fib(iterations);
    // console.log(`doFib done in: ${Date.now() - start}ms`);
    // resolve(result);
  });
};

// const main = async () => {
//   const start = Date.now();
//   const values = await Promise.all([doFib(40), doFib(40), doFib(40)]);

//   console.log("values: ", values);
//   console.log(`fib done in ${Date.now() - start}ms`);
// };

const main = async () => {
  try {
    const start = Date.now();
    const values = await Promise.all([doFib(40), doFib(40), doFib(40)]);

    console.log("values: ", values);
    console.log(`ALL DONE done in ${Date.now() - start}ms`);
  } catch (e) {
    throw e;
  }
};

main().catch(console.error);

// For optimization - not pass data around but rather pass ownership of data
// Let's say we want to spin off some worker threads to resize images, create thumbnails, convert pdf files..

// Create a shared buffer
const sharedBuffer = new SharedArrayBuffer(4);
const buffer = new Uint8Array(sharedBuffer);
buffer.fill(5);

console.log("buffer before modify: ", buffer);

// Create a worker and pass the shared buffer to it
const another_worker = new Worker("./w.js", {
  workerData: { sharedBuffer },
});

another_worker.once("message", () => {
  console.log("buffer after modify: ", buffer);
});
