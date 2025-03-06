

//Каталог

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

// Конец Каталога





//Темная тема

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

   //Конец темной темы 



