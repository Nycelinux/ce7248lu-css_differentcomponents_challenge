const button = document.querySelector(".menuBtn");
const drawer = document.querySelector(".drawer");
const overlay = document.querySelector(".overlay");
button.addEventListener("click", () => {
    drawer.classList.toggle("open");
    overlay.classList.toggle("show");
});
overlay.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlay.classList.remove("show");
});