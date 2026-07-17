const button = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const search = document.querySelector(".expandSearch");

button.addEventListener("click", () => {
    search.classList.toggle("active");
    if (search.classList.contains("active")) {
        input.focus();
    }
});
document.addEventListener("click", (e) => {
    if (!search.contains(e.target)) {
        search.classList.remove("active");
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        search.classList.remove("active");
        input.value = "";
    }   
});