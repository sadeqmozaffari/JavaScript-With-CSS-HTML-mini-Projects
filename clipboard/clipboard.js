const btnCopy = document.querySelector("button");
const textArea = document.querySelector("textarea");

btnCopy.addEventListener("click", () => {
  let textValue = textArea.value;
  navigator.clipboard.writeText(textValue);
  btnCopy.style.backgroundColor = " rgba(88, 153, 232, 0.895)";
  btnCopy.innerText = "Copy Done";
  setTimeout(() => {
    btnCopy.style.backgroundColor = "lightblue";
    btnCopy.innerText = "Copy";
  }, 1500);
});
