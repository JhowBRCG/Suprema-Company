const toggleBtn = document.querySelector(".nav-toggle");
const actionWrapper = document.querySelector(".action-wrapper");

toggleBtn.addEventListener("click", () => {
  actionWrapper.classList.toggle("show-nav");
});
