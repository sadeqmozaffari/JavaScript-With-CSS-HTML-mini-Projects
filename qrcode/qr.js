const generateBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qr-code");
const qrInput = document.querySelector("form input");
const qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;

  if (!qrValue) {
    return alert("Please Enter Text");
  }
  generateBtn.innerText = "waiting .....";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    generateBtn.innerText = "Qr Code";
  });
});
qrInput.addEventListener("keyup", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    qrCodeBox.classList.add("hidden");
  }
});
