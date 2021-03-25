let juegosTienda = [];
leerInformacion();

function leerInformacion() {
    if (localStorage.length > 0) {
        //se trae los datos del localStorage y se los pasa a js
        juegosTienda = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        //crea la card con la los datos de juego
        let lista = document.getElementById('listaJuego');
        //limpar los datos del contenedor 
        lista.innerHTML = '';
        for (let i in juegosTienda) {
            
            let columna = 
            `
            <div class="col-sm-12 col-md-8">
            <img src="img/Games/${juegosTienda[i].imagen}" class="card-img-top" alt="...">  
            </div>
        <div class="col-sm-12 col-md-4 bg-dark text-light">
            <div class="card-body">
            <p class="card-text">${juegosTienda[i].nombre}</p>
            <h5 class="card-title">${juegosTienda[i].descripcion}</h5>
            <a href="detalles.html" class="btn btn-primary">Informacion</a>
              </div>
        </div> `

        lista.innerHTML += columna;
    }
}
}

// `
//             <div class="col-sm-12 col-md-8">
//             <img src="img/Games/${juegosTienda[i].imagen}" class="card-img-top" alt="...">  
//             </div>
//         <div class="col-sm-12 col-md-4 bg-dark text-light">
//             <div class="card-body">
//             <p class="card-text">${juegosTienda[i].nombre}</p>
//             <h5 class="card-title">${juegosTienda[i].descripcion}</h5>
//             <a href="detalles.html" class="btn btn-primary">Informacion</a>
//               </div>
//         </div> `