const crypto = require("node:crypto");
// like fs - uses libuv for some of the methods
// Maximum thread we can use with libuv is 1024 threads & it uses 4 thread by default.
process.env.UV_THREADPOOL_SIZE = 5;
// increases thread pool size of libuv - improves time but limited by available CPU cores
// if we increase it beyond the cpu cores on our machine
// the average time taken for method to be executed also increases
// If you're running a Windows OS and running via a .js file you'll need to set the
// UV_THREADPOOL_SIZE prior to calling the script via node.
// Example in cmd:
// SET UV_THREADPOOL_SIZE=5 && node index.js (no spaces around the =) - in the package.json
// Or in Powershell: $env:UV_THREADPOOL_SIZE = 5 && node my-file-to-run.js

const MAX_CALLS = 5; // proves that libuv have 4 threads
const start = Date.now();

// function to hash passwords before storing them - uses libuv tread pool
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
//   if (err) throw err;
//   // Prints derivedKey
//   console.log(derivedKey.toString("hex"));
//   console.log("Hash: ", Date.now() - start);
// });

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);

for (let i = 0; i < MAX_CALLS; i++) {
  // each call runs in a separate tread in the libuv tread pool (4 threads)
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
