const searchData = [
    {
        category: "Components",
        icon: "fa-regular fa-file-code",
        items: [
            "CSS Grid",
            "CSS Flexbox",
            "CSS Animation",
            "CSS Variables",
            "Glassmorphism Cards",
            "Neumorphism Cards",
            "Dashboard Widgets",
            "Progress Bars",
            "Pricing Tables",
            "Timeline"
        ]
    },
    {
        category: "Layouts",
        icon: "fa-solid fa-layer-group",
        items: [
            "Landing Page",
            "Hero Section",
            "Footer",
            "Sidebar",
            "Navbar",
            "Mega Menu"
        ]
    },
    {
        category: "Favorites",
        icon: "fa-solid fa-star",
        items: [
            "Dashboard",
            "Buttons",
            "Cards"
        ]
    }
];

const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

function highlight(text, value) {
    const regex = new RegExp(`(${value})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
}

function createEmpty() {
    suggestions.innerHTML =
        `<div class="empty">
            <i class ="fa-solid fa-magnifying-glass"></i>
            <h3> No Results</h3>
            <p> Try another keyword</p>
        </div>`;
}

function renderSuggestions(value) {
    suggestions.innerHTML = "";
    let hasResults = false;
    searchData.forEach(group => {
        const results = group.items.filter(item =>
            item.toLowerCase().includes(value.toLowerCase()));
        if (results.length === 0) return;
        hasResults = true;
        const category = document.createElement("div");
        category.className = "category";
        category.textContent = group.category;
        suggestions.appendChild(category);
        results.forEach(item => {
            const div = document.createElement("div");
            div.className = "item";
            div.innerHTML = `<i class="${group.icon}"></i>
            <span> ${highlight(item, value)} </span>`;
            suggestions.appendChild(div);
        });
    });
    if (!hasResults) {
        createEmpty();
    }
}
input.addEventListener("input", () => {
    const value = input.value.trim();
    if (value === "") {
        suggestions.classList.remove("show");
        suggestions.innerHTML = "";
        return;
    }
    renderSuggestions(value);
    suggestions.classList.add("show");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search")) {
        suggestions.classList.remove("show");
    }    
});


input.addEventListener("focus", () => {
    if(input.value.trim()!=="")
    suggestions.classList.add("show");
});