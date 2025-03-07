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

const cart = document.getElementById('cart');

cart.addEventListener('mouseleave', function(event) {
    // Проверяем, не находится ли курсор над дочерними элементами корзины
    if (!cart.contains(event.relatedTarget)) {
        cart.style.display = 'none';
    }
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

