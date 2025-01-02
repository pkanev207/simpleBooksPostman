// exports is just an reference to module.exports
// if we assign it a new object - that reference is broken!!
// and module.exports will be an empty object
// We should NOT assign an object to exports!

const obj1 = { name: "Bruce Wayne" };

let obj2 = obj1;
// obj2.name = "Clark Kent";
// when we assign an object literal - the reference is broken
obj2 = { name: "Clark Kent" };
console.log(obj1);
