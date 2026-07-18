const button = document.querySelector(".Btn");
const input = document.querySelector(".Input");
const drawer = document.querySelector(".Drawer");

const overlay = document.querySelector(".overlay");
button.addEventListener("click", () => {
    drawer.classList.toggle("open");
    overlay.classList.toggle("show");
});
overlay.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlay.classList.remove("show");
});