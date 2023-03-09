const chieucao = document.getElementById("chieu-cao");
const cannang = document.getElementById("can-nang");
const button = document.getElementsByClassName("btn")[0];
const result = document.getElementsByClassName("result")[0];
const genderM = document.querySelector("#male");
const genderF = document.querySelector("#female");

let kq = "bình thường";
button.addEventListener("click", function () {
  // get value radio name gender

  let IBM = cannang.value / (chieucao.value * chieucao.value);
  if (genderF.checked) {
    if (IBM < 19.1) {
      kq = "gầy";
    } else if (IBM >= 19.1 && IBM < 25.8) {
      kq = "bình thường";
    } else if (IBM >= 25.8 && IBM < 27.3) {
      kq = "thừa cân nhẹ";
    } else if (IBM >= 27.3 && IBM < 32.3) {
      kq = "trên lý tưởng ";
    } else if (IBM > 32.3) {
      kq = "béo phì";
    }
  } else if (genderM.checked) {
    if (IBM < 20.7) {
      kq = "gầy";
    } else if (IBM >= 20.7 && IBM < 26.4) {
      kq = "bình thường";
    } else if (IBM >= 26.4 && IBM < 27.8) {
      kq = "thừa cân nhẹ";
    } else if (IBM >= 27.8 && IBM < 31.1) {
      kq = "Trên lý tưởng";
    } else if (IBM > 31.1) {
      kq = "béo phì";
    }
  }

  console.log(kq, IBM);

  result.innerHTML = kq;
});
