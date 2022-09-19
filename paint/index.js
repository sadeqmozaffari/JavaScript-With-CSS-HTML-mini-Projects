const canvas = document.querySelector("canvas");
const wbrush = document.querySelector("#width-brush");
const colorPicker = document.querySelector("#color");
const brush = document.querySelector("#brush");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
const save = document.querySelector("#save");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let currentWidth = 5;
let color = "";
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
function startDraw() {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = currentWidth;
  ctx.strokeStyle = `${color}`;
}
function stopDraw() {
  isDrawing = false;
}
function drawing(e) {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDraw);

wbrush.addEventListener("change", () => {
  currentWidth = wbrush.value;
});
colorPicker.addEventListener("change", () => {
  color = colorPicker.value;
});
function eraserFun() {}
canvas.addEventListener("mousedown", eraserFun);
eraser.addEventListener("click", () => {
  eraser.classList.add("active");
  brush.classList.remove("active");
  color = "white";
});
brush.addEventListener("click", () => {
  eraser.classList.remove("active");
  brush.classList.add("active");
  color = colorPicker.value;
});
clear.addEventListener("click", () => {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
save.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});
