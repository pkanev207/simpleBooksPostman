// this is a class
const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  // function passed as argument to another function is called callback function
  function higherOrderFunction(synchronousCallback) {
    const name = "Vishwas";
    synchronousCallback(name);
  }

  higherOrderFunction(greet);
  console.log(`Your ${size} pizza with ${topping} is ready!`);
});

emitter.on("order-pizza", (size, topping) => {
  if (size === "large") {
    console.log("Serving complimentary drinks!");
  }
});

// we are not blocking execution by writing code in this manner
console.log("Checking the execution..");
emitter.emit("order-pizza", "large", "mushrooms");
console.log("Checking the execution.. Again!");

// ------------------------------------------------------------------------------------------
const DrinkMachine = require("../drink-machine");
const drinkMachine = new DrinkMachine();

const PizzaShop = require("../pizza-shop");
const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}!`);
  drinkMachine.serveDrinks(size);
});

pizzaShop.order("small", "mozzarella");
pizzaShop.displayOrderNumber();
