// làm việc với string
let str1 = "My name is ";
let name = "Thức";
let str2 = `${str1} ${name}`;
console.log(str2);

//Destructuring object
let information = {
  first_name: "Thức",
  last_name: "Đinh Văn",
};
let { first_name, last_name } = information;
console.log(first_name);

let [hehe] = ["hoho", "haha"];
console.log(hehe);
//Object Literal
let first = "Thức";
let last = { first };
console.log(last);

//Vòng lặp for… of
let str = "hello";
for (let i of str) {
  console.log(i);
}
// Spread syntax
let Number_arr1 = [1, 2, 3];
let Number_arr2 = [4, 5, 6];
let Number_arr3 = [...Number_arr1, ...Number_arr2];
console.log(Number_arr3);
function findLength(...args) {
  console.log(args.length);
}
findLength();
// Arrow function
const square = (num) => num * num;

console.log(square(2));
// include()
let str4 = "Hello World";

console.log(str4.includes("hello"));
//class
class Car {
  constructor(wheels, doors) {
    this.wheels = wheels;
    this.doors = doors;
  }
  describeMe() {
    console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
  }
}
const car1 = new Car(4, 2);
car1.describeMe(); // Doors: 2 and Wheels: 4
//Promise, async và await
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("thành công");
  }, 2000);
});
// promise.then((data) => console.log(data));

// async function test() {
//   const v = await takeLongTimeAsync();
//   console.log(v);
// }

// test();
