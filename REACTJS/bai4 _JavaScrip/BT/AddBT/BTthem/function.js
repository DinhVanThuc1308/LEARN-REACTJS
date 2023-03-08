let inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian"];
let ob = {};
// ob = arr.reduce((acc, currentValue) => {
//   acc[currentValue] = (acc[currentValue] || 0) + 1;
//   return acc;
// }, {});

// console.log(ob);
function CountWords(inputWords) {
  if (Array.isArray(inputWords) || !inputWords.length) return;
  return inputWords.reduce(function (previosValue, currentValue) {
    if (previosValue[currentValue]) {
      previosValue[currentValue] += 1;
    } else {
      previosValue[currentValue] = 1;
    }
    return previosValue;
  }, {});
}

console.log(CountWords(inputWords));
