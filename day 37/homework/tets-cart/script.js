// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const shoppingCart = document.getElementById('shoppingCart');

    toggleButton.addEventListener('click', function () {
        if (shoppingCart.classList.contains('hidden')) {
            shoppingCart.classList.remove('hidden');
            shoppingCart.style.display = 'block';
            setTimeout(() => {
                shoppingCart.style.opacity = 1;
                shoppingCart.style.transform = 'translateY(0)';
            }, 10);
        } else {
            shoppingCart.style.opacity = 0;
            shoppingCart.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                shoppingCart.classList.add('hidden');
                shoppingCart.style.display = 'none';
            }, 300);
        }
    });
});






