class Animal {
  constructor(species) {
    this.species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Setter for species (private variable)
  set species(value) {
    this._species = value;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  // Constructor calls the Animal constructor
  constructor(species) {
    super(species);
  }

  // Method specific to Cat class
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  // Constructor calls the Animal constructor
  constructor(species) {
    super(species);
  }

  // Method specific to Dog class
  bark() {
    console.log("woof");
  }
}

// Example Usage:

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
