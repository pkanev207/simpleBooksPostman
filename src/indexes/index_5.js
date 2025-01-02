require("node:fs/promises")
  .readFile("../files/file_2.txt", "utf-8")
  .then((d) => console.log(d))
  .catch((e) => console.error(e));

// Callback based versions of "node:fs" module APIs are better for speed and memory allocation
const fs = require("node:fs");

// Error first callback pattern, optional second param
fs.readFile("../files/file.txt", "utf-8", (err, data) => {
  if (err == null) {
    console.log(`From the async: ${data}!`);
  } else {
    console.log(err);
  }
});

const fileContains = fs.readFileSync("../files/file.txt", "utf-8");
console.log(fileContains);

// by default writeFile overwrites file content
// flag "a" - append
fs.writeFile(
  "../files/greet.txt",
  " Hello, Vishwas!!",
  { flag: "a" },
  (err, data) => {
    if (err) console.log(err);
    console.log(`From the async ${data}!!!`);
  }
);

const fileContains2 = fs.readFileSync("../files/greet.txt", "utf-8");
console.log(fileContains2);

fs.writeFileSync("../files/greet.txt", "Hello world!");

const fileContains3 = fs.readFileSync("../files/greet.txt", "utf-8");
console.log(fileContains3);

// Possible to happen - reading the file can take more time than writing the file
