import { catalog } from "./catalog-data.js";

const catalogGrid = document.getElementById("catalog-grid");

if (catalogGrid) {
    catalog.forEach(producto => {

        const card = document.createElement("article");
        card.classList.add("catalog-card");

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <div class="catalog-card-content">
                <h2>${producto.nombre}</h2>
                <p>${producto.categoria}</p>
                <div class="catalog-card-footer">
                    <span>$${producto.precio.toFixed(2)}</span>
                    <a href="./product.html?id=${producto.id}">View Details</a>
                </div>
            </div>
        `;

        catalogGrid.appendChild(card);

    });
}