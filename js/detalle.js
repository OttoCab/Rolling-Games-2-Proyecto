let juegostienda = [];
let imgJuegos = [];
let detalleJuego = [];
detalleDelJuego();

function detalleDelJuego() {
    if (localStorage.length > 0) {
        let idJuegoDetalle = JSON.parse(localStorage.getItem('detalleKEY'))
            //se trae los datos del localStorage y se los pasa a js
        detalleJuego = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        imgJuegos = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        juegostienda = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        //crea la card con la los datos de juego
        let lista = document.getElementById('juegoDetalle');
        let slider = document.getElementById('slider');
        let descripcion = document.getElementById('juegosDescripcion')
        let nombre = document.getElementById('tituloJuego');
        //limpar los datos del contenedor 
        lista.innerHTML = '';
        descripcion.innerHTML = '';
        slider.innerHTML = '';
        nombre.innerHTML = '';
        for (let i in detalleJuego) {
            if (detalleJuego[i].codigo == idJuegoDetalle) {
                let titulo =
                    `<h2 class="bg-dark display-3 pt-5 text-light">${juegostienda[i].nombre}</h2>
                <hr class="text-light">`;
                nombre.innerHTML = titulo;
                slider.innerHTML = slider +
                    `<div class="d-flex justify-content-center">
                <div>
                <img src="/img/Games/${juegostienda[i].imagen}" class="d-block w-100" alt="...">
                </div>
                </div>`;
                let columna =
                    `
                    <div class="col-lg-6 col-sm-12 my-3"><h6>Categoría:</h6><div>${detalleJuego[i].categoria}</div></div>
                    <div class="col-lg-6 col-sm-12 my-3"><h6>Clasificación:</h6><div>${detalleJuego[i].clasificacion}</div></div>
            <div class="col-lg-6 col-sm-12 my-3"><h6>Desarrolladora:</h6><div>${detalleJuego[i].desarrolladora}</div></div>
            <div class="col-lg-6 col-sm-12 my-3"><h6>Lanzamiento:</h6><div>${detalleJuego[i].fechaLanzamiento}</div></div>`
                lista.innerHTML = columna;
                let descripcion2 = `<div class="col-lg-12 my-3">${detalleJuego[i].descripcion}</div>`;
                descripcion.innerHTML = descripcion2;
            }
        }
    }
}