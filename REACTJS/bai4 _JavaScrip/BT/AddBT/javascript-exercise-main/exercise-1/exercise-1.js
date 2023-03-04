function repeatString(string, num) {
  if (!string || !num) {
    return 0;
  }
  let arr = Array.from({ length: num }, (_, i) => i + 1);
  let result = "";
  arr.forEach(function () {
    result += string;
  });
  console.log(result);
}
repeatString("hey", 3);
