window.addEventListener("scroll", () => {
    const nav = document.querySelector(".transparent-navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
    console.log(window.scrollY);
});