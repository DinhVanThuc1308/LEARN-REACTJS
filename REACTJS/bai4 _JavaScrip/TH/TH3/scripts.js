let myArray = [1, 2, 3, 4, 5, 4, 1, 7, 4, 9, 3, 12, 4];
function findMaxmyArray(array) {
  if (!numbers || !numbers.length) return "Lỗi";
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log("số lớn nhất trong mảng là: " + max);
  console.log("vị trí của số lớn nhất trong mảng là: " + array.indexOf(max));
}
findMaxmyArray(myArray);
