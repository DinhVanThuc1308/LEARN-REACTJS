export class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sing() {
    return `${this.name} is singing`;
  }
}
