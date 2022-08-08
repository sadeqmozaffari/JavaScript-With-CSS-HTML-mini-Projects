const btnModalClose = document.querySelector(".close");
const btnModalCloseBtn = document.getElementById("closeBtn");
const modalOpen = document.querySelector(".btn-modal");
const modal = document.querySelector(".container-modal");

btnModalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
btnModalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
modalOpen.addEventListener("click", () => {
  modal.style.display = "block";
});
