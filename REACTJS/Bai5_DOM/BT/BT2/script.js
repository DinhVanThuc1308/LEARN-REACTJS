function calculateLoan() {
  var amount = document.getElementById("amount").value;
  var interestRate = document.getElementById("interestRate").value / 100 / 12;
  var payments = document.getElementById("payments").value * 12;
  var x = Math.pow(1 + interestRate, payments);
  var monthlyPayment = (amount * x * interestRate) / (x - 1);
  document.getElementById("monthlyPayment").value = monthlyPayment.toFixed(1);
  document.getElementById("totalPayment").value = (
    monthlyPayment * payments
  ).toFixed(1);
  document.getElementById("totalInterest").value = (
    monthlyPayment * payments -
    amount
  ).toFixed(1);
}
