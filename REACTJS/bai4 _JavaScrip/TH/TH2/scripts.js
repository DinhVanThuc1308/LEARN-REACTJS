let num1;
let num2;

function findMaxNumber(num1, num2) {
  let MaxNumber;
  if (num1 > num2) {
    MaxNumber = num1;
    console.log("Số lớn nhất là: " + MaxNumber);
  } else if (num1 < num2) {
    MaxNumber = num2;
    console.log("Số lớn nhất là: " + MaxNumber);
  } else {
    MaxNumber = "Hai số bằng nhau";
    console.log("Hai số bằng nhau");
  }
}

findMaxNumber(4, 5);
findMaxNumber(5, 5);
findMaxNumber(5, 4);
