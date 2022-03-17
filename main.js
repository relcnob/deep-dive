const favs = document.querySelector(".favs");
const toggle = document.querySelector(".toggle");

favs.addEventListener("click", function () {
  favs.classList.toggle("faved");
});

toggle.addEventListener("click", function () {
  toggle.classList.toggle("toggled");
});
