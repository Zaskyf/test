const categoryContainer = document.getElementById("categorycontainer");

async function loadCategories() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api-core/api-category/');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const categories = await response.json();
        renderCategories(categories);
        
    } catch (error) {
        console.error('Fetch error:', error);
        showError();
    }
}

function renderCategories(categories) {
    categoryContainer.innerHTML = '';
    
    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";
        
        const link = document.createElement("a");
        link.href = `/category/${category.slug}/`; // Пример URL из API
        
        const img = document.createElement("img");
        img.className = "imges";
        img.src = category.image.url; // Если используется Django ImageField
        img.alt = category.name;
        
        const title = document.createElement("p");
        title.textContent = category.name;
        
        link.appendChild(img);
        categoryDiv.append(link, title);
        categoryContainer.appendChild(categoryDiv);
    });
}

function showError() {
    categoryContainer.innerHTML = `
        <div class="error-message">
            <p>Не удалось загрузить категории</p>
            <button onclick="loadCategories()">Попробовать снова</button>
        </div>
    `;
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', loadCategories);
