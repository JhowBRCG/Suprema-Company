const toggleBtn = document.querySelector(".nav-toggle");
const actionWrapper = document.querySelector(".action-wrapper");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  actionWrapper.classList.toggle("show-nav");
});
