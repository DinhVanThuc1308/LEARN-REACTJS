let a = "one";
let b = "two";

console.log("original", a);
console.log("original", b);

let temp;
temp = a;
a = b;
b = temp;

console.log("after swap", a);
console.log("after swap", b);
