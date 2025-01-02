var http = require("http");
const fs = require("node:fs");
// HTTP module also extends the EventEmitter class and the callback is actually a request listener

http
  .createServer((req, res) => {
    const name = "Vishwas";
    const superHero = {
      firstName: "Bruce",
      lastName: "Wane",
    };

    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      // const html = fs.readFileSync("./index.html", "utf-8");
      // res.end(html);
      // more performant code:
      // fs.createReadStream("./index.html").pipe(res);
      // more correct way:
      // fs.createReadStream(__dirname + "/index.html").pipe(res);

      html = fs.readFileSync("../index.html", "utf-8");
      res.end(html.replace("{{name}}", name));
    } else if (req.url == "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About page");
    } else if (req.url == "/api") {
      res.writeHead(200, { "Content`-Type": "application/json" });
      res.end(JSON.stringify(superHero));
    } else {
      res.writeHead(400);
      res.end("Page not found");
    }

    // in combination with req.method we can handle any type of requests
    return;
  })
  .listen(8081, () => console.log("Server running at http://127.0.0.1:8081/"));
