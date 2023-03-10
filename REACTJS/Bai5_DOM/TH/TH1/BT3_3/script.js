const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

// Xử lý sự kiện người dùng ấn subscribe

const form = document.querySelector("#signup");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // chặn hành vi của 1 thẻ
  // validation infomation
  let nameValid = hasValues(form.elements["name"], NAME_REQUIRED);
  let emailValid = hasValues(form.elements["email"], EMAIL_REQUIRED);
});
function hasValues(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

// Hiện thị thông báo
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;

  if (type) {
    input.className = "success";
  } else {
    input.className = "error";
  }
}
// hiển thị thông báo lỗi
function showError(input, message) {
  showMessage(input, message, false);
}
// hiển thị thông báo thành công
function showSuccess(input) {
  showMessage(input, " ", type);
}

// validate email
function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValues(input, requiredMsg)) {
    return false;
  }
  const Emailregex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.value.trim();
  if (Emailregex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}
