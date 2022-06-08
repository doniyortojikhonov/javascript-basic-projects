const navToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
navToggle.addEventListener("click", function () {
  if (menu.classList.contains("show-links")) {
    menu.classList.remove("show-links");
  } else {
    menu.classList.add("show-links");
  }
});
