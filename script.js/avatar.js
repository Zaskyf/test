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