let juegostienda = [];
leerdatoslocal();

function leerdatoslocal() {
    if (localStorage.length > 0) {
        juegostienda = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        console.log('local', juegostienda)
        let nombre = document.getElementById('tituloJuego');
        nombre.innerHTML = '';
        for (let i in juegostienda) {
            console.log('iii', i)
            let titulo =
                `<section class="text-center" id="tituloJuego">
            <h2 class="jumbotron bg-dark display-3 pt-5 text-light">${juegostienda[i].nombre}</h2>
            <hr class="text-light">
            </section>`;
            nombre.innerHTML = titulo;
        }
    }
}