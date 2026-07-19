let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function saveHistory(value) {
    history = history.filter(item => item !== value);
    history.unshift(value);
    history = history.slice(0, 10);
    localStorage.setItem("searchHistory", JSON.stringify(history));

}

function toggleFavorite(value) {
    if (favorites.includes(value)) {
        favorites=favorites.filter(item => item !== value);
    } else {
        favorites.push(value);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));   
}

function createCategory(title) {
    const category = document.createElement("div");
    category.className = "category";
    category.textContent = title;
    suggestions.appendChild(category);
}

function createFavoriteItem(item) {
    const div = document.createElement("div");
    div.className = "item";
    div.dataset.value = item;
    div.innerHTML = `<i class="fa-solid fa-star"></i>
    <span>${item}</span>`;
    div.addEventListener("click", () => {
        input.value = item;
        saveHistory(item);
        suggestions.classList.remove("show");
    });
    suggestions.appendChild(div);
}

function createHistoryItem(item) {
    const div = document.createElement("div");
    div.className = "item";
    div.dataset.value = item;
    div.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i>
    <span>${item}</span>`;
    div.addEventListener("click", () => {
        input.value = item;
        saveHistory(item);
        suggestions.classList.remove("show");
    });
    suggestions.appendChild(div);
}