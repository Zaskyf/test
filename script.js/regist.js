// Регистрация

const socialLink = document.querySelector('.social-link');
const tooltip = document.getElementById('tooltip');
const account = document.getElementById('account');
const registerModal = document.getElementById('registerModal');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signButton = document.getElementById('signButton');
const modal = document.querySelector('.modal');
let accountVisible = false;


//виден
function hideTooltip() {
    tooltip.style.display = 'none';
}
//переключение видимости
function toggleAccount() {
    accountVisible = !accountVisible;
    account.style.display = accountVisible ? 'block' : 'none';
}



//скрыть акк
function hideAccount() {
    if (accountVisible) {
        accountVisible = false;
        account.style.display = 'none';
    }
}

function hideCart() {
    document.getElementById('cart').style.display = 'none';
}

function openRegisterModal() {
    document.body.style.overflow = 'hidden';
    registerModal.style.display = 'block';
}

function closeRegisterModal() {
    document.body.style.overflow = 'auto';
    registerModal.style.display = 'none';
}

// Обработчик для формы регистрации
registerForm.onsubmit = async (event) => {

//чтобы страница не перезагружалась 
    event.preventDefault();


// Получаем значения полей формы регистрации (как в бэке + id на html)


    const firstName = document.getElementById('registerFirstName').value;
    const lastName = document.getElementById('registerLastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const repeatPassword = document.getElementById('registerRepeatPassword').value;


//проверка паролей 
    if (password !== repeatPassword) {
        alert('Пароли не совпадают');
        return;
    }

    try {

// Отправляем POST-запрос на сервер для регистрации (может апи не то ?)

        const response = await fetch('http://127.0.0.1:8000/api-core/api-register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 
                first_name: firstName, 
                last_name: lastName,
                email: email,
                password: password,
                repeat_password: repeatPassword
            }),
        });

        // Проверяем, какой статус ответа
        if (!response.ok) {
            const text = await response.text(); // Получаем текст ответа
            console.error('Ошибка ответа сервера:', text); 
            throw new Error('Ошибка сервера: ' + response.status + ' ' + response.statusText);
        }
// Если ответ успешный, получаем данные из ответа
        const data = await response.json();
 // Выводим сообщение об успешной регистрации
        alert('Регистрация завершена');
// Закрываем модальное окно регистрации
        closeRegisterModal();
        localStorage.setItem('isLoggedIn', 'true');

// Открываем страницу кабинета в новой вкладке
        window.open('Kabinet.html', '_blank');

    } 
    
    //ошибки
    catch (error) {
        console.error('Ошибка регистрации:', error);
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            alert('Ошибка подключения: Проверьте интернет-соединение');
        } else {
            alert(`Ошибка регистрации: ${error.message || 'Неизвестная ошибка'}`);
        }
    }
};

// Обработчик для формы входа
loginForm.onsubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://127.0.0.1:8000/auth/jwt/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 
              username: email,
              password: password
                
            }),
        });

        // Проверка  какой статус ответа
        if (!response.ok) {
            const text = await response.text(); // Получаем текст ответа
            console.error('Ошибка ответа сервера:', text); // ошибка текст ответа
            throw new Error('Ошибка сервера: ' + response.status + ' ' + response.statusText);
        }

        const data = await response.json();
        alert('Вход выполнен успешно');
        localStorage.setItem('isLoggedIn', 'true');
        window.open('Kabinet.html', '_blank');

    } catch (error) {
        console.error('Ошибка входа:', error);
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            alert('Ошибка подключения: Проверьте интернет-соединение');
        } else {
            alert(`Ошибка входа: ${error.message || 'Неизвестная ошибка'}`);
        }
    }
};


    // Добавение  обработчика для переключения модального окна (прокрутка регистрации )
    signUpBtnLink.addEventListener('click', () => {
        modal.classList.toggle('active'); // Переключение на  активный класс
    });

    signInBtnLink.addEventListener('click', () => {
        modal.classList.toggle('active'); // Переключение на  активный класс
    });
