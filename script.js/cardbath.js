const container = document.querySelector('.container');
    const cardsData = [
    { id: 1, image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/4.webp', title: 'Обои под покраску флизелиновые антивандальные Kreaforta Батист белые 1.06x25м 113г/м²', price: 799, delprice: 1000 , detailsUrl: 'productcard.html' , hasDiscount: true  },
    { id: 2, image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/4.webp', title: 'Обои под покраску флизелиновые антивандальные Kreaforta Батист белые 1.06x25м 113г/м²', price: 799, delprice: 1000 , detailsUrl: 'productcard.html' , hasDiscount: false  },
    {
            id: 3,
            title: 'Обои флизелиновые Ateliero Kora бежевые 1.06 м AT1016-02ОАВ',
            price: 790,
            delprice: 1000,
            image: 'id ',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 4,
            title: 'Обои 4',
            price: 1290,
            delprice: 1800,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/4.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 5,
            title: 'Обои 5',
            price: 1150,
            delprice: 1600,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/5.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 6,
            title: 'Обои 6',
            price: 890,
            delprice: 1300,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/6.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 7,
            title: 'Обои 7',
            price: 1490,
            delprice: 2000,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/7.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 8,
            title: 'Обои 8',
            price: 990,
            delprice: 1400,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/8.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 9,
            title: 'Обои 9',
            price: 690,
            delprice: 900,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/9.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 10,
            title: 'Обои 10',
            price: 1090,
            delprice: 1500,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/10.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 11,
            title: 'Обои 11',
            price: 1390,
            delprice: 1900,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/11.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 12,
            title: 'Обои 12',
            price: 790,
            delprice: 1100,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/12.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 13,
            title: 'Обои 13',
            price: 950,
            delprice: 1350,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/13.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 14,
            title: 'Обои 14',
            price: 1190,
            delprice: 1600,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/14.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 15,
            title: 'Обои 15',
            price: 1299,
            delprice: 1700,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/15.webp',
            detailsUrl: '',
            hasDiscount: false
        },
         {
            id: 16,
            title: 'Обои 16',
            price: 799,
            delprice: 1100,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/16.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 17,
            title: 'Обои 17',
            price: 1090,
            delprice: 1450,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/17.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 18,
            title: 'Обои 18',
            price: 980,
            delprice: 1250,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/18.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 19,
            title: 'Обои 19',
            price: 1370,
            delprice: 1800,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/19.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 20,
            title: 'Обои 20',
            price: 1150,
            delprice: 1500,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/20.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 21,
            title: 'Обои 21',
            price: 850,
            delprice: 1100,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/21.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 22,
            title: 'Обои 22',
            price: 1250,
            delprice: 1600,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/22.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 23,
            title: 'Обои 23',
            price: 720,
            delprice: 950,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/23.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 24,
            title: 'Обои 24',
            price: 1050,
            delprice: 1350,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/24.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 25,
            title: 'Обои 25',
            price: 950,
            delprice: 1250,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/25.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 26,
            title: 'Обои 26',
            price: 1200,
            delprice: 1600,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/26.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 27,
            title: 'Обои 27',
            price: 930,
            delprice: 1280,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/27.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 28,
            title: 'Обои 28',
            price: 1095,
            delprice: 1450,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/28.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 29,
            title: 'Обои 29',
            price: 1155,
            delprice: 1500,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/29.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 30,
            title: 'Обои 30',
            price: 790,
            delprice: 1000,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/30.webp',
            detailsUrl: '',
            hasDiscount: true
        },
         {
            id: 31,
            title: 'Обои 31',
            price: 900,
            delprice: 1200,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/31.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 32,
            title: 'Обои 32',
            price: 1150,
            delprice: 1550,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/32.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 33,
            title: 'Обои 33',
            price: 850,
            delprice: 1100,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/33.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 34,
            title: 'Обои 34',
            price: 1199,
            delprice: 1550,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/34.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 35,
            title: 'Обои 35',
            price: 1020,
            delprice: 1350,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/35.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 36,
            title: 'Обои 36',
            price: 950,
            delprice: 1250,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/36.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 37,
            title: 'Обои 37',
            price: 770,
            delprice: 950,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/37.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 38,
            title: 'Обои 38',
            price: 1340,
            delprice: 1750,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/38.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 39,
            title: 'Обои 39',
            price: 1180,
            delprice: 1490,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/39.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 40,
            title: 'Обои 40',
            price: 890,
            delprice: 1200,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/40.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 41,
            title: 'Обои 41',
            price: 1290,
            delprice: 1700,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/41.webp',
            detailsUrl: '',
            hasDiscount: false
        },     
        {
            id: 42,
            title: 'Обои 42',
            price: 950,
            delprice: 1250,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/42.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 43,
            title: 'Обои 43',
            price: 1150,
            delprice: 1450,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/43.webp',
            detailsUrl: '',
            hasDiscount: false
        },
        {
            id: 44,
            title: 'Обои 44',
            price: 980,
            delprice: 1280,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/44.webp',
            detailsUrl: '',
            hasDiscount: true
        },
        {
            id: 45,
            title: 'Обои 45',
            price: 1130,
            delprice: 1500,
            image: 'https://basket-06.wbbasket.ru/vol1058/part105844/105844363/images/big/45.webp',
            detailsUrl: '',
            hasDiscount: false
        }
    ];cardsData.forEach((cardData) => {
    const card = document.createElement('div');
        card.classList.add('product-card');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        const title = document.createElement('p');
        title.classList.add('product-title');
        title.textContent = cardData.title;
        titleDiv.appendChild(title);
        card.appendChild(titleDiv);
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = cardData.image;
        img.alt = cardData.title;
        figure.appendChild(img); const discountLabel = document.createElement('div');
        
        if (cardData.hasDiscount) {
            const discountLabel = document.createElement('div');
            discountLabel.classList.add('discount'); 
            discountLabel.textContent = `Скидка: 10%`; // Скидка для карточки
            figure.appendChild(discountLabel);
        }
    
    
    
            figure.appendChild(discountLabel);
    
        figure.appendChild(img);
        const discount = document.createElement('discount');
        discount.classList.add('discount');
    
        const figcaption = document.createElement('figcaption');
        const price = document.createElement('p');
        price.classList.add('prce');
        price.textContent = 'Цена за штуку';
        figcaption.appendChild(price);
        const money = document.createElement('p');
        money.classList.add('money');
        const span = document.createElement('span');
        span.textContent = cardData.price + ' ₽';
        const del = document.createElement('del');
        del.textContent = cardData.delprice + ' ₽';
        money.appendChild(span);
        money.appendChild(del);
        const buttons = document.createElement('div');
        buttons.classList.add('Buttons');
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('btn');
        addToCartButton.textContent = 'В корзину';
        addToCartButton.id = `addToCart${cardData.id}`; 
        const subtractButton = document.createElement('button');
        subtractButton.classList.add('subtract');
        subtractButton.textContent = '–';
        subtractButton.onclick = () => changeNumber(-1, `number${cardData.id}`); 
        const numberInput = document.createElement('input');
        numberInput.classList.add('js-number');
        numberInput.id = `number${cardData.id}`; // 
        numberInput.type = 'text';
        numberInput.value = '1';
        numberInput.readOnly = true;
        const addButton = document.createElement('button');
        addButton.classList.add('add');
        addButton.textContent = '+';
        addButton.onclick = () => changeNumber(1, `number${cardData.id}`); 
        buttons.appendChild(addToCartButton);
        buttons.appendChild(subtractButton);
        buttons.appendChild(numberInput);
        buttons.appendChild(addButton);
        card.appendChild(figure);
        card.appendChild(titleDiv); 
        card.appendChild(figcaption);
        card.appendChild(money);
        card.appendChild(buttons);
        container.appendChild(card);
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details-container');
        const detailsButton = document.createElement('a');
        detailsButton.href = cardData.detailsUrl;
        detailsButton.textContent = 'Подробнее';
        detailsButton.classList.add('details-button');
        detailsDiv.appendChild(detailsButton);
        card.appendChild(detailsDiv);
        
    // "Быстрый просмотр"
    const quickViewButton = document.createElement('button'); 
    quickViewButton.classList.add('quick-view-button'); //класс для стилей
    quickViewButton.textContent = 'Быстрый просмотр'; // контент
    figure.appendChild(quickViewButton); 
    // Показываем кнопку при наведении курсора  на карточку товара и скрываем при уходе курсора
    card.addEventListener('mouseenter', () => { 
        quickViewButton.style.display = 'block'; 
    });
    card.addEventListener('mouseleave', () => { 
        quickViewButton.style.display = 'none'; 
    });
    // Создаем окно  быстрый просмотр 
    const quickViewWindow = document.createElement('div'); 
    quickViewWindow.classList.add('quick-view-window'); 
    quickViewWindow.style.display = 'none'; // Окно скрыто по умолчанию
    // Создаем контейнер для содержимого окна
    const windowContent = document.createElement('div'); 
    windowContent.classList.add('window-content'); 
    // Создаем крестик
    const closeButton = document.createElement('button'); 
    closeButton.classList.add('close-button'); 
    closeButton.textContent = 'X';
    closeButton.onclick = function() { 
        quickViewWindow.style.display = 'none'; // Скрываем окно при нажатии на кнопку закрытия
    };
    // При нажатии на кнопку "Быстрый просмотр" показываем окно
    quickViewButton.onclick = function() { 
        quickViewWindow.style.display = 'flex'; //Показываем окно с помощью flex 
    };
    const description = document.createElement('div');
    description.innerHTML = `
  
 <div class="cartpodrobno">

            <div class="procard">
                    <img 
  style="width: 400px; height: 400px; border: 1.2px solid grey;" 
  src="https://belbagno.ru/upload/iblock/e46/e460ace5053cca596b9ef71b25f5f431.jpg" 
  alt="Изображение товара" 
  class="proimage">
                <div class="tpd">
                    <h2 class="protitle">Ванна</h2>
                    <p class="prodescription">Это краткое описание товара. Здесь можно указать его особенности и преимущества.</p>
                    <p class="proprice">2999 Р.</p>
                    <p class="delprice">2999 Р.</p>
                    <button class="probutton">В корзину</button>
                    <a href="/test/html/productcard2.html">          
                    <button class="procardbutton">Больше информации о товаре</button>     
                </a> 
                </div>
            </div>
        </div>
  
    `;
    windowContent.appendChild(closeButton);
    windowContent.appendChild(description);
    quickViewWindow.appendChild(windowContent);
    document.body.appendChild(quickViewWindow);
    // Добавляем крестик и описание в контейнер содержимого окна
windowContent.appendChild(closeButton); 
windowContent.appendChild(description); 

// Добавляем содержимое в окно быстрого просмотра
quickViewWindow.appendChild(windowContent); 

// Добавляем окно быстрого просмотра на страницу
document.body.appendChild(quickViewWindow); 

// Выбираем все картинки  с классом  !!!!proimage!!!!
const zoomableImages = document.querySelectorAll('.proimage');
zoomableImages.forEach(image => {
    let zoomed = false;
    let zoomLevel = 2;

    // Добавим обертку для изображения
    const imageWrapper = document.createElement('div');
    imageWrapper.style.overflow = 'hidden'; // Ключевое изменение
    image.parentNode.insertBefore(imageWrapper, image); // Вставляем обертку перед изображением
    imageWrapper.appendChild(image);

    image.addEventListener('mousemove', function(event) {
        if (zoomed) {
            const rect = this.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            this.style.transformOrigin = `${xPercent * 100}% ${yPercent * 100}%`;
            this.style.transform = `scale(${zoomLevel})`;
        }
    });

    image.addEventListener('click', function() {
        zoomed = !zoomed;
        if (zoomed) {
            this.style.cursor = 'zoom-out';
        } else {
            this.style.transform = 'scale(1)';
            this.style.cursor = 'zoom-in';
            this.style.transformOrigin = 'center center';
        }
    });
});
});


let currentIndex = 0;
const cards = document.querySelectorAll('.product-card');

function showCards(startIndex) {
    const endIndex = startIndex + 20;
    cards.forEach((card, i) => {
        card.style.display = (i >= startIndex && i < endIndex) ? 'block' : 'none';
    });
}

showCards(currentIndex);

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex + 20 >= cards.length) return;
    currentIndex += 20;
    showCards(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex === 0) return;
    currentIndex -= 20;
    showCards(currentIndex);
});

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function() {
        const isInCart = this.classList.contains("clicked");
        if (!isInCart) {
            addToCart(this);
            this.textContent = "В корзине";
            this.classList.add("clicked");
        } else {
            this.textContent = "В корзину";
            this.classList.remove("clicked");
            removeFromCart(this);
        }

        
    });
});

function changeNumber(amount, inputId) {
    const numberInput = document.getElementById(inputId);
    let currentValue = parseInt(numberInput.value, 10);
    currentValue += amount;
    if (currentValue >= 1) {
        numberInput.value = currentValue;
    }
}