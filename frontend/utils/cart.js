document.getElementById("cart-icon").addEventListener("click", () => {
    location.href = "cart.html";
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            const image = button.getAttribute('data-image');

            const itemIndex = cart.findIndex(item => item.id === id);

            if (itemIndex > -1) {
                cart[itemIndex].quantity += 1; 
            } else {
                cart.push({ id, name, price, image, quantity: 1 }); 
            }

            localStorage.setItem('cart', JSON.stringify(cart)); 
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0); 
            alert(`${name} has been added to the cart.`);
        });
    });
});
