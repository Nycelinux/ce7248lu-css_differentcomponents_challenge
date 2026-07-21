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
let selectedIndex = -1;
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
    if (favorites.length) {
        createCategory("Favorites");
        favorites.forEach(createFavoriteItem);
    }
    if (history.length) {
        createCategory("Recent Searches");
        history.forEach(createHistoryItem);

    }
    searchData.forEach(group => {
        const results = group.items.filter(item =>
            item.toLowerCase().includes(value.toLowerCase()));
        if (!results.length) return;
        hasResults = true;
        createCategory(group.category);
        results.forEach(item => {
            createSearchItem(item, group.icon, value);
        });
    });
    if (!hasResults&& !favorites.length && !history.length) {
        createEmpty();
    }
}

function getItems() {
    return [...document.querySelectorAll(".item")];
}
function updateSelection() {
    const items = getItems();
    items.forEach(item => item.classList.remove("active"));
    if (selectedIndex < 0) return;
    if (selectedIndex >= items.length) {
        selectedIndex = 0;
    }
    if (selectedIndex < 0) {
        selectedIndex = items.length - 1;
    }
    items[selectedIndex].classList.add("active");
    items[selectedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth"
    });
}

input.addEventListener("input", () => {
    selectedIndex = -1;
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
    if (!e.target.closest(".searchSuggestion")) {
        suggestions.classList.remove("show");
    }
});


input.addEventListener("focus", () => {
    renderSuggestions(input.value);
    suggestions.classList.add("show");
});

document.addEventListener("keydown", (e) => {
    if (!suggestions.classList.contains("show")) return;
    const items = getItems();
    if (!items.length) return;
    switch (e.key) {
        case "ArrowDown":
            e.preventDefault();
            selectedIndex++;
            if (selectedIndex >= items.length)
                selectedIndex = 0;
            updateSelection();
            break;
        case "ArrowUp":
            e.preventDefault();
            selectedIndex--;
            if (selectedIndex < 0)
                selectedIndex = items.length - 1;
            updateSelection();
            break;
        case "Enter":
            if (selectedIndex >= 0) {
                e.preventDefault();
                input.value = items[selectedIndex].dataset.value;
                suggestions.classList.remove("show");
            }
            break;
        case "Escape":
            suggestions.classList.remove("show");
            selectedIndex = -1;
            break;
    }
});