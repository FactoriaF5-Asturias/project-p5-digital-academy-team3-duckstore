import { catalog } from "./catalog-data.js";

const productId = Number(new URLSearchParams(window.location.search).get("id")) || 2;
const currentProduct = catalog.find(product => product.id === productId) || catalog[1];
const decreaseButton = document.getElementById("decrease-quantity");
const increaseButton = document.getElementById("increase-quantity");
const quantityNumber = document.getElementById("product-quantity");
const addToCartButton = document.getElementById("add-to-cart");

document.getElementById("product-image").src = currentProduct.imagen;
document.getElementById("product-image").alt = currentProduct.nombre;
document.getElementById("product-title").textContent = currentProduct.nombre;
document.getElementById("product-price").textContent = `$${currentProduct.precio.toFixed(2)}`;
document.getElementById("product-description").textContent = currentProduct.categoria;

let quantity = 1;

increaseButton.addEventListener("click", () => {
    quantity += 1;
    quantityNumber.textContent = quantity;
});

decreaseButton.addEventListener("click", () => {
    if (quantity > 1) {
        quantity -= 1;
        quantityNumber.textContent = quantity;
    }
});

addToCartButton.addEventListener("click", () => {
    const cartProduct = {
        ...currentProduct,
        cantidad: quantity
    };

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingProduct = cartItems.find(item => item.id === cartProduct.id);

    if (existingProduct) {
        existingProduct.cantidad += quantity;
    } else {
        cartItems.push(cartProduct);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "./cart.html";
});