    //Аватар
    const avatarInput = document.getElementById('avatar-input');
    const avatarImage = document.querySelector('.avatar');
    const changeAvatarButton = document.querySelector('.change-avatar-button');
    
    changeAvatarButton.addEventListener('click', () => {
      avatarInput.click(); // Эмулируем клик по скрытому input
    });
    
    avatarInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
    
        reader.onload = (e) => {
          avatarImage.src = e.target.result; // Обновление аватарчика
          //  добавить код для отправки нового аватара на сервер
        };
    
        reader.readAsDataURL(file);
      }
    });


    
document.addEventListener('DOMContentLoaded', function() {
    // Модальное окно для скидок
    const discountInfo = document.createElement('div');
    discountInfo.classList.add('discount-info');
    discountInfo.innerHTML = `
        <div class="discount-info-content">
            <h2>Информация о скидках</h2>
            <p>Здесь будет подробная информация...</p>
            <button class="close-discount-info">Понятно</button>
        </div>
    `;
    document.body.appendChild(discountInfo);

    // Открытие модального окна
    const discountItem = document.querySelector('.discount-item');
    if (discountItem) {
        discountItem.addEventListener('click', () => {
            discountInfo.style.display = 'flex';
        });
    }

    // Закрытие модального окна
    const closeButton = discountInfo.querySelector('.close-discount-info');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            discountInfo.style.display = 'none';
        });
    }

    // Закрытие при клике вне окна
    document.addEventListener('click', (event) => {
        if (event.target === discountInfo) {
            discountInfo.style.display = 'none';
        }
    });

    // Код формы обратной связи
    const supportButton = document.getElementById('supportButton');
    const contactFormSection = document.getElementById('contactFormSection');

    if (supportButton && contactFormSection) {
        supportButton.addEventListener('click', function() {
            contactFormSection.classList.add('visible');
            contactFormSection.scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            document.getElementById('contactForm').reset(); // Очистка формы

            // Скрываем секцию с формой
            contactFormSection.classList.remove('visible');
        } else {
            alert('Пожалуйста, заполните все поля формы.');
        }
        });
    }
});