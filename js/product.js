const decreaseButton = document.getElementById("decrease-quantity");
const increaseButton = document.getElementById("increase-quantity");
const quantityNumber = document.getElementById("product-quantity");
const addToCartButton = document.getElementById("add-to-cart");

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
    const product = {
        id: 2,
        nombre: "Galactic Explorer Duck",
        precio: 24.99,
        cantidad: quantity
    };

    localStorage.setItem("cartProduct", JSON.stringify(product));
    window.location.href = "./cart.html";
});