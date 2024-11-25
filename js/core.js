 <script> 
const catalog = document.getElementById('catalog');
const menuBurger = document.getElementById('menuBurger');
const popup = document.getElementById('popup');

// Функция для открытия и закрытия меню
menuBurger.onclick = function(event) {
    event.stopPropagation(); // Остановить всплытие события, чтобы не закрыть каталог сразу
    catalog.style.display = catalog.style.display === 'none' ? 'block' : 'none';
};

// Переменная для отслеживания состояния popup
let isPopupOpen = false;

// Функция для открытия подкатегорий при наведении
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('mouseenter', function(event) {
        event.stopPropagation(); // Остановить всплытие события при наведении
        const categoryNum = this.getAttribute('data-category');
        let content = '';

        switch (categoryNum) {
            case '1':
                content = 
                    '<button class="button-style" onclick="showPopup(\'Подкатегория 1.1\')">Обои 1.1</button>' +
                    '<button class="button-style" onclick="showPopup(\'Подкатегория 1.2\')">Обои 1.2</button>' +
                    '<button class="button-style" onclick="showPopup(\'Подкатегория 1.3\')">Обои 1.3</button>';
                break;
            case '2':
                content = 
                    '<button class="button-style" onclick="showPopup(\'Подкатегория 2.1\')">Сантехника 1.1</button>' +
                    '<button class="button-style" onclick="showPopup(\'Подкатегория 2.2\')">Сантехника 1.2</button>' +
                    '<button class="button-style" onclick="showPopup(\'Подкатегория 2.3\')">Сантехника 1.3</button>';
                break; 
            case '3':
                content = 
                    '<button class="button-style" onclick="showPopup(\'Подкатегория 3.1\')">Ламинат 1.1</button>' +
                    '<button class="button-style" onclick="showPopup(\'Подкатегория 3.2\')">Ламинат 1.2</button>';
                break;
        }
        document.getElementById('popupContent').innerHTML = content;
        showPopup(this.querySelector('span').textContent);  
    });
});

// Функция для отображения popup
function showPopup(title) {
    document.getElementById('popupTitle').textContent = title;
    popup.style.display = 'block'; // Показывает popup
    isPopupOpen = true; // Указывает что popup открыт
}

// Функция для закрытия popup
function closePopup() {
    popup.style.display = 'none'; 
    isPopupOpen = false; // Указывает что popup закрыт
}

// Закрытие каталога при клике где-либо на странице
document.addEventListener('click', function() {
    if (catalog.style.display === 'block') {
        catalog.style.display = 'none'; 
    }
    if (isPopupOpen) {
        closePopup();
    }
});


        //Регистрация
const socialLink = document.querySelector('.social-link');
const tooltip = document.getElementById('tooltip');
const account = document.getElementById('account');
const registerModal = document.getElementById('registerModal');
const registerForm = document.getElementById('registerForm');
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const modal = document.querySelector('.modal');

let accountVisible = false;

// Show tooltip on mouse over
socialLink.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
    tooltip.style.top = `${socialLink.offsetTop + socialLink.offsetHeight}px`; // Corrected line
    tooltip.style.left = `${socialLink.offsetLeft}px`; // Corrected line
});

// Hide tooltip on click outside
document.addEventListener('click', (event) => {
    if (!socialLink.contains(event.target) && !tooltip.contains(event.target)) {
        hideTooltip();
    }
});

// Hide tooltip function
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Toggle account visibility
function toggleAccount() {
    accountVisible = !accountVisible;
    account.style.display = accountVisible ? 'block' : 'none';
}

// Hide account if visible
function hideAccount() {
    if (accountVisible) {
        accountVisible = false;
        account.style.display = 'none';
    }
}

// Open and close register modal
function openRegisterModal() {
    document.body.style.overflow = 'hidden'; // Prevent body scroll
    registerModal.style.display = 'block';
}

function closeRegisterModal() {
    document.body.style.overflow = 'auto'; // Re-enable body scroll
    registerModal.style.display = 'none';
}

// Handle register form submission
registerForm.onsubmit = (event) => {
    event.preventDefault();
    alert('Регистрация завершена');
    closeRegisterModal();
};

// Log in account function
function logInAccount() {
    alert('Вход');
}
</script>
<script>
// Toggle modal visibility on button click
signUpBtnLink.addEventListener('click', () => {
    modal.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    modal.classList.toggle('active');
});

    </script>
