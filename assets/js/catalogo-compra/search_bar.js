// check articulos
function checkResultado() {
    const productosDisponibles = document.querySelectorAll(".producto-item:not([style*='display: none'])");
    const noExiste = document.getElementById("no-result");

    if (productosDisponibles.length === 0) {
    noExiste.style.display = "block";
    } else {
    noExiste.style.display = "none";
    }
}

// buscador
document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador");

    buscador.addEventListener("keyup", e => {

        const texto = buscador.value.toLowerCase();

        document.querySelectorAll(".producto-item").forEach(producto => {
            const nombre = producto.querySelector(".nombre").textContent.toLowerCase();
            if (nombre.includes(texto)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
        checkResultado();
    });

});