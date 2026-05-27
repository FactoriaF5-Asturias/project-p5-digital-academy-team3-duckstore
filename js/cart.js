const cartItemsContainer = document.getElementById("cart-items");
const cartSummary = document.getElementById("cart-summary");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function renderCart() {
    cartItemsContainer.innerHTML = "";

    cartItems.forEach(item => {
        const cartItem = document.createElement("article");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img class="cart-item-image" src="${item.imagen}" alt="${item.nombre}">
            <div class="cart-item-info">
                <h2>${item.nombre}</h2>
                <p>${item.categoria}</p>
                <div class="quantity-control">
                    <button type="button" data-action="decrease" data-id="${item.id}">-</button>
                    <span>${item.cantidad}</span>
                    <button type="button" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
            <strong class="cart-item-price">$${(item.precio * item.cantidad).toFixed(2)}</strong>
            <button class="remove-item" type="button" data-action="remove" data-id="${item.id}">
                <img src="../docs/assets/icons/trash-icon.png" alt="">
                Remove
            </button>       
 `;

        cartItemsContainer.appendChild(cartItem);
    });

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.precio * item.cantidad;
    }, 0);

    const totalItems = cartItems.reduce((total, item) => {
        return total + item.cantidad;
    }, 0);

    const shipping = subtotal > 0 ? 12.50 : 0;
    const taxes = subtotal * 0.2364;
    const total = subtotal + shipping + taxes;

    cartSummary.innerHTML = `
        <h2>Summary</h2>

        <div class="summary-row">
            <span>Subtotal (${totalItems} items)</span>
            <strong>$${subtotal.toFixed(2)}</strong>
        </div>

        <div class="summary-row">
            <span>Estimated Shipping</span>
            <strong>$${shipping.toFixed(2)}</strong>
        </div>

        <div class="summary-row">
            <span>Taxes</span>
            <strong>$${taxes.toFixed(2)}</strong>
        </div>

        <div class="summary-total">
            <span>Total Amount</span>
            <strong>$${total.toFixed(2)}</strong>
        </div>

        <form class="promo-form">
            <label for="promo-code">Apply Promo Code</label>
            <div>
                <input id="promo-code" type="text" placeholder="Enter code">
                <button type="submit">Apply</button>
            </div>
        </form>

        <a class="checkout-button" href="./checkout.html">
            Proceed to Checkout
        </a>

        <div class="summary-features">
            <span>
                <img src="../docs/assets/icons/Secure-payment.png" alt="">
                Secure Payment
            </span>
            <span>
                <img src="../docs/assets/icons/icon_car.png" alt="">
                Insured Delivery
            </span>
        </div>  
 `;
}

cartItemsContainer.addEventListener("click", event => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    const action = button.dataset.action;
    const id = Number(button.dataset.id);
    const item = cartItems.find(product => product.id === id);

    if (action === "increase" && item) {
        item.cantidad += 1;
    }

    if (action === "decrease" && item && item.cantidad > 1) {
        item.cantidad -= 1;
    }

    if (action === "remove") {
        cartItems = cartItems.filter(product => product.id !== id);
    }

    saveCart();
    renderCart();
});

renderCart();
