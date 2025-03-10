async function loadCategories() {
    const container = document.getElementById('categorycontainer');
    
    try {
      // Делаем запрос к API с обработкой CORS
      const response = await fetch('http://127.0.0.1:8000/api-core/api-category-detail/<id>/', {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors' // Добавляем режим CORS
      });
      

      console.log('Raw response:', response);
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      // JSON
      const categories = await response.json();
      console.log('Received data:', categories); // Логируем полученные данные
      
      // Очищаем контейнер
      container.innerHTML = '';
      
      //  Проверяем наличие данных
      if (!categories || !categories.length) {
        container.innerHTML = '<p style=" font-size:30px;color: red; text-align: center;">Категорий нихт</p>';
        return;
      }
  
      //  Строим HTML-структуру
      categories.forEach(category => {
        //  Проверяем наличие main_category
        if(category.main_category) {
          //путь к изображениям
          const imageUrl = category.image 
            ? `http://127.0.0.1:8000${category.image.startsWith('/media/') ? category.image : '/media/' + category.image}`
            : null;
  
          const categoryCard = `
            <div class="category-card" style="margin: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
              <div class="category-header" style="display: flex; align-items: center; gap: 15px;">
                ${imageUrl ? 
                  `<img src="${imageUrl}" alt="${category.name}" 
                       style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">` 
                  : '<div style="width:80px; height:80px; background:#eee;"></div>'}
                <h3 style="margin: 0; font-size: 24px;">${category.name}</h3>
              </div>
              ${category.nested_categories && category.nested_categories.length > 0 ? `
                <div class="subcategories" style="margin-top: 15px; margin-left: 30px;">
                  ${category.nested_categories.map(sub => `
                    <div class="subcategory" style="padding: 8px 0; border-bottom: 1px solid #eee;">
                      <a href="/api-category-detail/${sub.id}/" 
                         style="text-decoration: none; color: #333; font-size: 18px;">
                        ${sub.name}
                      </a>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `;
          container.insertAdjacentHTML('beforeend', categoryCard);
        }
      });
  
    } catch (error) {
      // обработка ошибок
      console.error('Full error:', error);
      container.innerHTML = `
        <div style="color: red; text-align: center; padding: 20px;">
          Ошибка загрузки данных: ${error.message}<br>
          Проверьте:<br>
          1. Работает ли сервер<br>
          2. Правильность URL API<br>
          3. Настройки CORS на сервере<br>
          4. Консоль разработчика для подробностей
        </div>
      `;
    }
}
  
// Запускаем после полной загрузки страницы
window.addEventListener('load', loadCategories);