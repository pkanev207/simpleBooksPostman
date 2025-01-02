const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

// run with pm2 start no-cluster.js -i 0 // to figure the optimum number of workers to create
// pm2 stop no-cluster.js

//NOT working on Windows!!!
// console.log(OS.cpus().length);
// process.env.NODE_CLUSTER_SCHED_POLICY = cluster.SCHED_RR;
// process.env.NODE_CLUSTER_SCHED_POLICY = 2;
// console.log(`process.env.NODE_CLUSTER_SCHED_POLICY: ${process.env.NODE_CLUSTER_SCHED_POLICY}`);

//import * as cluster from 'cluster'
// const cluster = await import("cluster");

// cluster.isPrimary
if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow") {
      for (let i = 0; i < 6000000000; i++) {} // simulate CPU work
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });

  console.log(OS.availableParallelism());
  server.listen(8000, () => console.log("Server listening on port 8000"));
}

// For users with windows OS please include cluster.schedulingPolicy='rr' to round robin,
// by default for windows the clusters scheduling policy will be set to none and works will not be distributed
// among the child process no matter the number of logical cores child process created
// the master handles all the load and blocks other requests.

// cluster.schedulingPolicy = cluster.SCHED_RR ;
// adding this worked for me, don't know why but 'rr' gives out error on my system
