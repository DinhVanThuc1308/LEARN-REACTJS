let canvas = document.getElementById("draw");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
function draw(x, y) {
  let circle = new Path2D();
  circle.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill(circle);
}
let isMouseDown = false;
canvas.addEventListener("mousedown", function (e) {
  isMouseDown = true;
});

canvas.addEventListener("mouseup", function (e) {
  isMouseDown = false;
});

canvas.addEventListener("mousemove", function (e) {
  if (!isMouseDown) {
    return;
  }
  let { clientX, clientY } = e;
  let rect = canvas.getBoundingClientRect();
  draw(clientX - rect.left - 30, clientY);
});

let colorPicker = [...document.querySelectorAll(".color-picker")];
colorPicker.forEach((colorPicker) => {
  colorPicker.addEventListener("click", function (e) {
    ctx.fillStyle = e.target.style.backgroundColor;
  });
});
button = document.querySelector("#clear");
button.addEventListener("click", function (e) {
  ctx.clearRect(0, 0, 600, 600);
});
