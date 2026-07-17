
const floatingSearch = document.querySelector(".floatingSearch");
window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        floatingSearch.classList.add("show");
    } else {
        floatingSearch.classList.remove("show");
    }  
});