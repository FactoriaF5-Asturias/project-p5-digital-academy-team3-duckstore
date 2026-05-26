const cartItemsContainer = document.getElementById("cart-items");
const cartSummary = document.getElementById("cart-summary");

const cartItems = [
    {
        id: 2,
        nombre: "Galactic Explorer Duck",
        precio: 24.99,
        categoria: "Professional Collection",
        imagen: "../img/Catalog patos/pato2.png",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Chef Ducky",
        precio: 19.00,
        categoria: "Professional Collection",
        imagen: "../img/Catalog patos/pato3.png",
        cantidad: 1
    }
];

cartItems.forEach(item => {
    const cartItem = document.createElement("article");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <img class="cart-item-image" src="${item.imagen}" alt="${item.nombre}">
    <div class="cart-item-info">
        <h2>${item.nombre}</h2>
        <p>${item.categoria}</p>
        <div class="quantity-control">
            <button type="button">-</button>
            <span>${item.cantidad}</span>
            <button type="button">+</button>
        </div>
    </div>
    <strong class="cart-item-price">$${item.precio.toFixed(2)}</strong>
    <button class="remove-item" type="button">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
    });

    const subtotal = cartItems.reduce((total, item) => {
    return total + item.precio * item.cantidad;
}, 0);

cartSummary.innerHTML = `
    <h2>Summary</h2>
    <p>Subtotal (${cartItems.length} items): $${subtotal.toFixed(2)}</p>
`;