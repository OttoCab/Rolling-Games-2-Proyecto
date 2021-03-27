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
            if (i == 0) {
                columna = `<div class="carousel-item active">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-8">
                        <img src="img/Games/${juegosTienda[i].imagen}" class="container-fluid" alt="...">
                    </div>
                    <div class="col-md-4 align-self-center">
                        <div class="card-body ">
                            <h5 class="card-title text-light text-center">${juegosTienda[i].nombre}</h5>
                            <p class="card-text text-light fw-bolder">${juegosTienda[i].descripcion}</p>
                            <div class="d-flex flex-row-reverse ">
                                <button class="btn btn-secondary"><a href="detalles.html" class='text-light'>Ver más</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
            } else {
                columna = `<div class="carousel-item">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <img src="img/Games/${juegosTienda[i].imagen}" class="container-fluid" alt="...">
                        </div>
                        <div class="col-md-4 align-self-center">
                            <div class="card-body ">
                                <h5 class="card-title text-light text-center">${juegosTienda[i].nombre}</h5>
                                <p class="card-text text-light fw-bolder">${juegosTienda[i].descripcion}</p>
                                <div class="d-flex flex-row-reverse ">
                                <button class="btn btn-secondary"><a href="detalles.html" class='text-light'>Ver más</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            }
            lista.innerHTML += columna;
        }
    }
}