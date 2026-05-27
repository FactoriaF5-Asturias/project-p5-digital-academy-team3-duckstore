import { catalog } from "./catalog-data.js";

const catalogGrid = document.getElementById("catalog-grid");
const catalogFilters = document.getElementById("catalog-filters");

if (catalogGrid) {
    function renderCatalog(filter = "All Ducks") {
        catalogGrid.innerHTML = "";

        const filteredCatalog = filter === "All Ducks"
            ? catalog
            : catalog.filter(producto => producto.tipo === filter);

        filteredCatalog.forEach(producto => {
            const card = document.createElement("article");
            card.classList.add("catalog-card");
            if (producto.id === 1) {
             card.classList.add("new-card");
            }
            if (producto.id === 2) {
              card.classList.add("galactic-card");
            }

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
    catalogFilters.addEventListener("click", event => {
        const button = event.target.closest(".filter-button");

        if (!button) {
            return;
        }

        const selectedFilter = button.dataset.filter;

        document.querySelectorAll(".filter-button").forEach(filterButton => {
            filterButton.classList.remove("is-active");
        });

        button.classList.add("is-active");
        renderCatalog(selectedFilter);
    });

    renderCatalog();
}