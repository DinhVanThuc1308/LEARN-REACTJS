function tinhDiemTrungBinh(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
  }
  
  function xepLoai(diem) {
    if (diem >= 0 && diem < 70) {
      return "D grade";
    } else if (diem >= 70 && diem < 80) {
      return "C grade";
    } else if (diem >= 80 && diem < 90) {
      return "B grade";
    } else if (diem >= 90 && diem <= 100) {
      return "A grade";
    } else {
      return "Invalid input";
    }
  }
  
  let diem = [80, 90, 70, 85, 95];
  let diemTB = tinhDiemTrungBinh(diem);
  let xepHang = xepLoai(diemTB);
  
  console.log("Diem trung binh la: " + diemTB.toFixed(2));
  console.log("Xep loai: " + xepHang);
  
  