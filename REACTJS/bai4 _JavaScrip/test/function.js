// let myString = "Hello world";
// console.log(myString.length);
// console.log(myString.indexOf("world"));
// console.log(myString.slice(0, 5));
// console.log(myString.replace("world", "everyone"));
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// let myNumber = 3.14159265359;
// console.log(myNumber.toFixed(2));
// console.log(toString());
// console.log(parseInt("3.14"));
// console.log(parseFloat("3.14"));

// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray);

// let myArray1 = new Array(5);

// let myArray2 = new Array(1, 2, 3, 4, 5);

// let myArray3 = new Array("1", "2", "3", "4", "5");

// console.log(myArray[1]);
// // push
// myArray.push(6);
// console.log(myArray);
// // pop
// myArray.pop();
// console.log(myArray);
// // unshift
// myArray.unshift(0, 1, 7);
// console.log(myArray);
// // shift
// myArray.shift();
// console.log(myArray);
// // splice
// myArray.splice(1, 2);
// console.log(myArray);
// // slice
// // concat
// console.log(myArray.concat(myArray2));
// // join
// console.log(myArray.join(" - "));

function myNumber(a) {
  let kq;
  if (a > 0) {
    kq = "Số dương";
  } else if (a < 0) {
    kq = "Số âm";
  } else {
    kq = "Số 0";
  }
  return kq;
}
console.log(myNumber(7));
