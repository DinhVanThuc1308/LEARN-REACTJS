function kiemTraMang(arr1, arr2) {
  let minArr1 = Math.min(...arr1);
  let maxArr1 = Math.max(...arr1);
  let minArr2 = Math.min(...arr2);
  let maxArr2 = Math.max(...arr2);
  if (minArr1 > minArr2 && maxArr1 < maxArr2) {
    return true;
  } else {
    return false;
  }
}

let mang1 = [1, 2, 3];
let mang2 = [0, 1, 2, 3, 4, 5];
let ketQua = kiemTraMang(mang1, mang2);

console.log(ketQua);
