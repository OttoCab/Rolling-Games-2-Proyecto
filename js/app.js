let juegosTienda = [];

leerInformacion();

function leerInformacion() {
    if (localStorage.length > 0) {
        //se trae los datos del localStorage y se los pasa a js
        juegosTienda = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        //crea la card con la los datos de juego
        let lista = document.getElementById('listaJuegoP');
        //limpar los datos del contenedor 
        lista.innerHTML = '';
        for (let i in juegosTienda) {
            let columna = ''
            //if (i == 0) {
            columna = `<div class="carousel-item ${i == 0 ? 'active' : ''}">
            <div class="card mb-3 cardotto">
                <div class="row g-0">
                    <div class="col-md-8">
                        <img src="/img/Games/${juegosTienda[i].imagen}" class="container-fluid" alt="...">
                    </div>
                    <div class="col-md-4 align-self-center">
                        <div class="card-body ">
                            <h5 class="card-title text-light text-center">${juegosTienda[i].nombre}</h5>
                            <p class="card-text text-light fw-bolder">${juegosTienda[i].descripcion}</p>
                            <div class="d-flex">
                                <a href="detalles.html" class='text-light' onclick="detalle(${juegosTienda[i].codigo})" 
                                id="${juegosTienda[i].codigo}">
                                <button class="btn btn-secondary">Ver más</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
            lista.innerHTML += columna;
        }
    }
}

window.detalle = function (codigo) {
    localStorage.setItem('detalleKEY', JSON.stringify(codigo));
    window.location.href = '/detalle.html'
}


