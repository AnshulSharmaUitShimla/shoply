// script.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            cartCount.textContent = count;
        });
    });
});
