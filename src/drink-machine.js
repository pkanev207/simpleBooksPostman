class DrinkMachine {
  constructor() {}
  serveDrinks(size) {
    if (size === "large") {
      console.log("Serving complimentary drinks!");
    } else {
      console.log("No drinks for you! You poor sod!");
    }
  }
}

module.exports = DrinkMachine;
