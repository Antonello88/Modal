const modalEl = document.querySelector(".modalWrapper")
const modalBtn = document.querySelector(".modalBtn")
const overlay = document.querySelector(".overlay")

modalBtn.addEventListener('click', () => {

  modalEl.classList.toggle("showModal");

  overlay.classList.toggle("hiddenOverlay");


})