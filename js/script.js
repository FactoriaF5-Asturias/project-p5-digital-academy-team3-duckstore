const catalog = [ /* Lista de productos en formato de array de objetos */

  { id: 1, nombre: "Sherlock Quack", precio: 24.00, categoria: "Pop Culture Collection", imagen: "../img/Catalog patos/pato1.png" },
  { id: 2, nombre: "Galactic Explorer Duck", precio: 24.99, categoria: "Professional Collection", imagen: "../img/Catalog patos/pato2.png" },
  { id: 3, nombre: "Chef Ducky", precio: 19.00, categoria: "Professional Collection", imagen: "../img/Catalog patos/pato3.png" },
  { id: 4, nombre: "Gilded Midnight", precio: 45.00, categoria: "Artissan Collection", imagen: "../img/Catalog patos/pato4.png" },
  { id: 5, nombre: "Spring Bloom", precio: 22.00, categoria: "Nature Collection", imagen: "../img/Catalog patos/pato5.png" },
  { id: 6, nombre: "The Racer", precio: 26.00, categoria: "Sports Collection", imagen: "../img/Catalog patos/pato6.png" },
  { id: 7, nombre: "Classic Quacker", precio: 15.00, categoria: "Heritage Collection", imagen: "../img/Catalog patos/pato7.png" },
  { id: 8, nombre: "Mystic Mallard", precio: 28.00, categoria: "Fantasy Collection", imagen: "../img/Catalog patos/pato8.png" },
  { id: 9, nombre: "Winter Wanderer", precio: 24.00, categoria: "Seasonal Collection", imagen: "../img/Catalog patos/pato9.png" },

];

const catalogGrid = document.getElementById("catalog-grid");

catalog.forEach(producto => {

    const card = document.createElement("article");
    card.classList.add("catalog-card");

    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <div class="catalog-card-content">
            <h2>${producto.nombre}</h2>
            <p>${producto.categoria}</p>
            <div class="catalog-card-footer">
                <span>$${producto.precio}</span>
                <a href="#">View Details</a>
            </div>
        </div>
    `;

    catalogGrid.appendChild(card);

});