import { Animals } from "./Animal.js";
class Cats extends Animals {
  constructor(name, age, whiskerColor) {
    super(name, age);
    this.whiskerColor = whiskerColor;
  }
  meow() {
    console.log("Meow Meow");
  }
  whiskerColor() {
    console.log(this.whiskerColor);
  }
}

const cat = new Cats("Tom", 3, "white");
console.log(cat.sing());
