//  tìm số lớn nhất trong mảng
// function findMax(arr) {
//   var max = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log("findMax", findMax)

// let arr = [12, 3, 4, 5, 76];

// let arr2 = [1, 2, 3];

// console.log(arr2.splice(2, 1, "h"));
// console.log(arr2);

// function getName(name) {
//   return "Xin chào" + " " + name + " " + "bạn đẹp trai lắm";
// }
// console.log(getName("Thức"));

// let name = "Thức";

// console.log(`Chào  ${name}`)

// function multiply(a, b, callback) {
//   var result = a * b;
//   callback(result);
// }

// function printResult(result) {
//   console.log("ket qua: " + result);
// }

// multiply(5, 6, printResult);

// var arr = [1, 2, 3, 4, 5];
// // arr.forEach(function (value) {
// //   console.log(value);
// // });

// var newArray = arr.map(function (value, index, arr) {
//   console.log(
//     value + " vị trí của nó là " + index + " Giá trị này nằm trong mảng " + arr
//   );
//   return `${value} -`;
// });
// console.log("------------====---=-=-==-=-=-=-=-=-=-=-=-=-=-=-=");
// console.log(newArray);

// const newarr2 = arr.filter(function (value) {
//   return value > 3;
// });
// console.log(newarr2);

// const arrFind = arr.find(function (value) {
//   return value > 4;
// });
// console.log(arrFind);

// const arrSome = arr.some(function (value) {
//   return value > 37;
// });
// console.log(arrSome);

// const arrReduce = arr.reduce(function (value, value2, index, arr) {
//   console.log(value, value2, index, arr);
//   return value + value2;
// });
// console.log(arrReduce);
// var myInfo = {
//   name: "thuc",
//   age: 18,
// };

// console.log(myInfo.name);
// console.log(myInfo.age);

// var myInfo2 = Object(
//     myInfo2.name = "văn Thức",
//     myInfo2.age = 20,
// );

// function Person(name, age, move) {
//   this.name = name;
//   this.age = age;
//   this.move = move;
// }

// const user = new Person("thuc",20,"hoc");
try {
  // Khối mã (code block ) có thể gây ra lỗi
  var x = y + 10;
} catch (e) {
  // Khối mã (code block ) đang được thực thi khi có lỗi xảy ra
  console.log(e.name + ":" + e.message);
} finally {
  console.log("Try-catch block finished");
}
