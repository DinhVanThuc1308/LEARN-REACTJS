let mess = document.querySelector("#message");
mess.addEventListener("keydown", function (e) {
  console.log(`key=${e.key},code=${e.code}`);
});

let pwd = document.querySelector('input[type="password"]');

pwd.addEventListener("focus", function (e) {
  e.target.style.backgroundColor = "yellow";
});

pwd.addEventListener("blur", function (e) {
  e.target.style.backgroundColor = "white";
});

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a valid email";

// Xử lý sự kiện người dùng ấn subscribe
form.addEventListener("submit", function (e) {
  // chặn hành vi gửi form mặc định
  e.preventDefault();
  // validate thông tin form
  let nameValid = hasValue(form.element["name"], NAME_REQUIRED);
  let emailValid = hasValue(form.element["email"], EMAIL_REQUIRED);
  // Nếu thông tin hợp lệ, gửi form
  if (nameValid && emailValid) {
    alert("Subscribe Successfully");
  }
});

// viết hàm kiểm tra có dữ liệu hasValue()
function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

// Viết hàm thông báo
function showError(input, message, type) {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  input.className = type ? "success" : "error";
  return type;
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}
