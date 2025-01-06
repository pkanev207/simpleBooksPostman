// Simple HTTP server deploy - Render, Fly.io

var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World");
  })
  .listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

// // another simple server - to serve html files - we can serve different data in different routes
// const http = require("http");
// const fs = require("fs/promises");

// const server = http.createServer(async (req, res) => {
//   try {
//     const htmlContent = await fs.readFile("./index.html");
//     res.writeHead(200, { "Content-Type": "text/html" });

//     res.end(htmlContent);
//   } catch (error) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`<h1 style="color:red;">${error.message}</h1>`);
//   }
// });

// const PORT = 2121;
// server.listen(PORT, "localhost", () => {
//   console.log(`server run on port ${PORT}`);
// });
