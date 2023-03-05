function convertNumber(number) {
  var Result = "";
  var con_lai;
  while (number > 0) {
    con_lai = number % 2;
    Result += con_lai;
    number = (number - con_lai) / 2;
  }
  Result = Result.split('');
  Result = Result.reverse();
  Result = Result.join('');
  return Result;
}

a = convertNumber(47); // => 101111
console.log(a);
