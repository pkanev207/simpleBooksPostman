// Simple HTTP server deploy - Render, Fly.io

var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World");
  })
  .listen(3000);

console.log("Server running at http://127.0.0.1:3000/");