// require("./batman.js");
// when we require a new module - it is loaded and cached for subsequent loading
var supeHero = require("../super_hero.js");
supeHero.setName("Superman");
console.log(supeHero.getName());
// module caching, objects are passed by reference
var newSuperHero = require("../super_hero.js");
console.log(newSuperHero.getName());

// const math = require("./math.js");
const { add, subtract } = require("../math.js");
console.log(add(2, 3));
console.log(subtract(2, 3));

// Node would first try to find data.js if there is no file extension..
const data = require("../../data.json");
console.log(data);

// node index --watch
console.log("Hello, Vishwas!");
