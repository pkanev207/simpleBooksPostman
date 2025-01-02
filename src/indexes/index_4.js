// a global variable, can be used without importing
const buffer = new Buffer.from("Vishwas", "utf-8");

// node uses buffers internally
console.log(buffer); // raw binary data, node prints hexadecimal or base16 notation of the number to avoid flooding the terminal
console.log(buffer.toJSON()); // unicode characters code

console.log(buffer.toString());

// buffers has limited memory, this would overwrite the first four letters
buffer.write("Code");
console.log(buffer.toString());

// here the last letters are skipped as they can't be stored in the buffer
buffer.write("Codevolution");
console.log(buffer.toString());
