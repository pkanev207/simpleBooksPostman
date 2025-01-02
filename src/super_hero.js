// module caching

class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// exporting an instance
module.exports = new SuperHero("Batman");
// if we need to create separate instance:
// module.exports = SuperHero;
