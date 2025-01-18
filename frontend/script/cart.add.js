document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-btn');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<tr><td colspan="6">Cart is empty</td></tr>';
            return;
        }

        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                <td>${item.name}</td>
                <td>Rs ${item.price}</td>
                <td><input type="number" min="1" value="${item.quantity}" data-index="${index}" class="quantity-input"></td>
                <td>Rs ${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            cartItemsContainer.appendChild(row);
        });

        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', updateQuantity);
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteItem);
        });
    }

    function updateQuantity(e) {
        const index = e.target.dataset.index;
        const newQuantity = parseInt(e.target.value);

        if (newQuantity < 1) return alert('Quantity must be at least 1');

        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function deleteItem(e) {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) return alert('Cart is empty!');

        alert('Proceeding to checkout...');
        localStorage.removeItem('cart');
        renderCart();
    });

    renderCart();
});
