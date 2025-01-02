// better required with "node:" because of the node: Protocol
const path = require("node:path");

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.format(path.parse(__filename)));
// console.log(path.format(path.parse(__dirname)));

console.log(path.isAbsolute(__filename));
// "./" is relative
console.log(path.isAbsolute("./data.json"));

// joining by platform specific separator as a delimiter!
// also normalizes - the slashes
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));

// resolves a sequence of paths or path segments into an absolute path
// if there is no forward slash - resolve would add an absolute path
// if there is slash - resolve would return an absolute path from that one - ignoring the previous paths if any
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));
