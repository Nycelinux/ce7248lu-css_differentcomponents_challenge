const input = document.querySelector(".top input");
const overlay = document.querySelector(".overlay");

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        overlay.classList.add("show");
        input.focus();
    }
    if (e.key === "Escape") {
        overlay.classList.remove("show");
    }
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("show");
    }    
});