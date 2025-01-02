const fs = require("node:fs");
// provides compression functionality implemented using gzip algorithm - zip files
const zlib = require("node:zlib");
// it has a built in transform stream
const gzip = zlib.createGzip();
console.log("Here");

// Streams extend from the EventEmitter class
const readableStream = fs.createReadStream("../files/file.txt", {
  encoding: "utf-8",
  // to deal with data in two bites:
  highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("../files/file_3.txt.gz"));

const writableStream = fs.createWriteStream("../files/file_3.txt");

// readableStream.on("data", (chunk) => {
//   // the buffer that Streams use is 64kb (default) -
//   // so the chunk contains the entire 18 bites of our file.txt
//   console.log("From the chunk writer: ", chunk);
//   writableStream.write(chunk);
// });
// pipe returns destination stream (has to be readable, duplex or a transport) which enables chaining
readableStream.pipe(writableStream);

fs.readFile("../files/file_3.txt", "utf-8", (err, data) => {
  if (err == null) {
    console.log(`From the async: ${data}!`);
  } else {
    console.log(err);
  }
});
