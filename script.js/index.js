document.addEventListener('DOMContentLoaded', function() {
    const catalog = document.getElementById('catalog');
    const menuBurger = document.getElementById('menuBurger');
    const popup = document.getElementById('popup');
    let isPopupOpen = false;

    // Обработчики меню
    menuBurger.addEventListener('click', function(event) {
        event.stopPropagation();
        catalog.style.display = catalog.style.display === 'none' ? 'block' : 'none';
    });

    // Обработчики категорий
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('mouseenter', function(event) {
            event.stopPropagation();
            const categoryNum = this.dataset.category;
            const content = generateCategoryContent(categoryNum);
            
            document.getElementById('popupContent').innerHTML = content;
            attachButtonHandlers();
            showPopup(this.querySelector('span').textContent);
        });
    });

    // Глобальный клик
    document.addEventListener('click', function() {
        if (catalog.style.display === 'block') {
            catalog.style.display = 'none';
        }
        if (isPopupOpen) {
            closePopup();
        }
    });

    // Генератор контента
    function generateCategoryContent(categoryNum) {
        let content = '';
        
        switch(categoryNum) {
            case '1':
                content = `
                   <a href="wallpaper1.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Бумажные обои</button></a> 
                    <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Виниловые обои</button></a>
                    <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Флизелиновые обои</button></a>
                    <a href="wallpaper4.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.4\')">Текстильные обои</button></a>
                    <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Метализированные обои</button></a>
                    <a href="wallpaper6.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.6\')">Жидкие обои</button></a> 
                    <a href="wallpaper7.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.7\')">Фотообои</button></a>
                   
                `;
                break;
            case '2':
                content = `
                   <a href="wallpaper1.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Ванны и комплектующие</button></a> 
                    <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Раковины</button></a>
                    <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Смесители</button></a>
                    <a href="wallpaper4.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.4\')"> Душевые кабины и поддоны</button></a> 
                    <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Сантехника для отопления</button></a>
                    <a href="wallpaper6.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.6\')">Унитазы</button></a>
                    <a href="wallpaper7.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.7\')">Аксессуары и дополнительные элементы</button></a>
                `;
                break;
                case '3':
                    content = `
                  
                        <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Деревянные покрытия</button></a>
                        <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Плитка</button></a>
                        <a href="wallpaper4.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.4\')">Камень</button></a>
                        <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Покрытия из ПВХ</button></a>
                        <a href="wallpaper6.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.6\')">Ковровые покрытия</button></a>
                      `;
                    break;
    
                    case '4':
                    content = `
                    <a href="wallpaper1.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Столы</button></a>
                        <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Диваны</button></a>
                        <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Кресла</button></a>
                        <a href="wallpaper4.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.4\')">Стулья</button></a>
                        <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Шкафы</button></a>
                        <a href="wallpaper6.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.6\')">Кровати</button></a>
                        <a href="wallpaper7.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.7\')">Пуфы</button></a>
                        <a href="wallpaper7.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.7\')">Кушетки</button></a>
                        `;
                    break;
    
                    case '5':
                    content =` 
                    <a href="wallpaper1.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Кухонная посуда</button></a>
                    <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Столовая посуда</button></a>
                    <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Питьевая посуда</button></a>
                    <a href="wallpaper4.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.4\')">Столовые приборы</button></a>
                    <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Посуда для храниения</button></a>
                        `;
                    break;
                    case '6':
                    content = `
                    <a href="wallpaper1.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Шторы</button></a>
                        <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Домашний текстиль</button></a>
                        <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Постельное белье </button></a>
                        <a href="wallpaper4.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.4\')">Ткани</button></a>
                        <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Постельные принадлежности</button></a>
                        `;
                    break;
                    case '7':
                    content = `
                    <a href="wallpaper1.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Бытовая техника для кухни</button></a>
                        <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Мелкая бытовая техника для кухни</button></a>
                        <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Бытовая техника для</button></a>
                        <a href="wallpaper4.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.4\')">Техника для дома</button></a>
                        <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Техника для красты</button></a>
                        `;
                    break;
                    case '8':
                    content = `
                    <a href="wallpaper1.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Декро для стен </button></a>
                        <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Декро для потолка и лепнина</button></a>
                        <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Часы</button></a>
                        <a href="wallpaper4.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.4\')">Лампы</button></a>
                        <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Люстры</button></a>
                        <a href="wallpaper6.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.6\')">Корнизы для штор</button></a>
                        <a href="wallpaper7.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.7\')">Вазы</button></a>
                        `;
                    break;
                    case '9':
                    content = `
                    <a href="wallpaper1.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Электроиснтрументы</button></a>
                        <a href="wallpaper2.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Отвертки</button></a>
                        <a href="wallpaper3.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Клей</button></a>
                        <a href="wallpaper5.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.5\')">Шкафы</button></a>
                        <a href="wallpaper6.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.6\')">Кровати</button></a>
                        <a href="wallpaper7.html"><button class="button-style" onclick="showPopup(\'Подкатегория 1.7\')">Фотообои</button></a>
                        `;
                    break;


           
        }
        return content;
    }

    // Обработчики кнопок
    function attachButtonHandlers() {
        document.querySelectorAll('.button-style').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showPopup(this.textContent.trim());
            });
        });
    }

    // Локальные функции управления попапом
    function showPopup(title) {
        document.getElementById('popupTitle').textContent = title;
        popup.style.display = 'block';
        isPopupOpen = true;
    }

    function closePopup() {
        popup.style.display = 'none';
        isPopupOpen = false;
    }

    // Экспорт функций в глобальную область видимости
    window.showPopup = showPopup;
    window.closePopup = closePopup;
});












// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const themeSwitcher = document.querySelector('.theme-switcher i');
    
    if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeSwitcher.classList.remove('fa-sun');
    themeSwitcher.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
    } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeSwitcher.classList.remove('fa-moon');
    themeSwitcher.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
    }
    }
    
    // Проверка сохраненной темы при загрузке страницы
    function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeSwitcher = document.querySelector('.theme-switcher i');
    
    if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeSwitcher.classList.remove('fa-moon');
    themeSwitcher.classList.add('fa-sun');
    } else {
    body.classList.add('light-theme');
    themeSwitcher.classList.remove('fa-sun');
    themeSwitcher.classList.add('fa-moon');
    }
    }
    
    // Загрузка темы при загрузке страницы
    window.onload = loadTheme;





     //корзина
     function addToCart(button) {
        const productTitle = button.closest('.swiper-slide').querySelector('.product-title').textContent;
        const productPrice = button.closest('.swiper-slide').querySelector('.money span').textContent;
        const productQuantity = button.closest('.swiper-slide').querySelector('.js-number').value;
    
        const existingItem = Array.from(document.querySelectorAll('.cart-item'))
            .find(item => item.querySelector('p').textContent.includes(productTitle));
        if (existingItem) {
            const quantityInput = existingItem.querySelector('.js-number');
            quantityInput.value = parseInt(quantityInput.value) + parseInt(productQuantity);
        } else {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${productTitle} - ${productPrice}</p>
                <button class='sub' style='margin-right:80px;' onclick='changeCartItemNumber(-1, this)'>–</button>
                <input type='text' class='js-number' value='${productQuantity}' readonly>
                <button class='ad' style='margin-right:30px;' onclick='changeCartItemNumber(1, this)'>+</button>
            `;
            document.getElementById('cart-items').appendChild(cartItem);
        }
    }
    function removeFromCart(button) {
    }
    function toggleCart() {
        const cart = document.getElementById('cart');
        cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
    }
    function clearCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
    }
    function deleteSelectedItems() {
        const checkboxes = document.querySelectorAll('.item-checkbox:checked');
        checkboxes.forEach(checkbox => {
            checkbox.closest('.cart-item').remove();
        });
    }
    // Закрытие корзины при уходе курсора мыши
    const cart = document.getElementById('cart');
    cart.addEventListener('mouseleave', () => {
        cart.style.display = 'none';
    });
    function clearCart() {
        document.getElementById('cart-items').innerHTML = '';
    }
    function changeCartItemNumber(step, button) {
        const input = button.parentElement.querySelector('.js-number');
        let value = parseInt(input.value);
        value += step;
        if (value < 1) {
            value = 1;
        }
        input.value = value;
    }
    let currentIndex1 = 0;
    const cards = document.querySelectorAll('.product-card');
    function showCards(startIndex) {
        const endIndex = startIndex + 5;
        cards.forEach((card, i) => {
            card.style.display = (i >= startIndex && i < endIndex) ? 'block' : 'none';
        });
    }
    showCards(currentIndex1);
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentIndex1 + 5 >= cards.length) return;
        currentIndex1 += 5;
        showCards(currentIndex1);
    });
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentIndex1 === 0) return;
        currentIndex1 -= 5;
        showCards(currentIndex1);
    });