const http = require("node:http");
// suitable for resizing images, videos or even encrypt files
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow") {
    const worker = new Worker("./worker-thread.js");
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Slow Page ${j}`);
    });
  }
});

server.listen(8000, () => console.log("Server listening on port 8000"));
