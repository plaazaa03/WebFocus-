document.addEventListener("DOMContentLoaded", function () {
    fetch("/json/gafas.json") 
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("gafas", JSON.stringify(data));
            mostrarGafas(data);
        })
        .catch(error => console.error("Error cargando los datos:", error));
});

function mostrarGafas(gafas) {
    let container = document.getElementById("gafas-container");
    container.innerHTML = ""; 

    gafas.forEach(gafa => {
        let gafaDiv = document.createElement("div");
        gafaDiv.classList.add("gafa");

        gafaDiv.innerHTML = `
            <img class="gafa-img" src="${gafa.imagen}" alt="${gafa.nombre}" 
                data-hover="${gafa.imagenHover}" data-original="${gafa.imagen}">
            <h4>${gafa.nombre}</h4>
            <p>${gafa.precio} €</p>
            <button class="comprar-btn">Comprar</button>
        `;

        let img = gafaDiv.querySelector(".gafa-img");

        img.addEventListener("mouseenter", () => {
            img.src = img.dataset.hover;
        });

        img.addEventListener("mouseleave", () => {
            img.src = img.dataset.original;
        });

        container.appendChild(gafaDiv);
    });
}
