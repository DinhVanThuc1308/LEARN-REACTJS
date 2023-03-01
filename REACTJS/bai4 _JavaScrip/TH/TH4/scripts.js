function calculate() {
  let amount = prompt("Nhập vào số lượng tiền");

  let rate = prompt("Nhập vào lãi suất (%)");

  let months = prompt("Số tháng");

  const interest = (amount * (rate * 0.01)) / months;

  const total = (amount / months + interest).toFixed(0);

  alert("Tổng số lượng cần trả là : " + total + "VND");
  alert("bị lừa rồi!!");
}
