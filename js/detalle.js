let detalleJuego = [];
detalleDelJuego();

function detalleDelJuego() {
    if (localStorage.length > 0) {
        //se trae los datos del localStorage y se los pasa a js
        detalleJuego = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        //crea la card con la los datos de juego
        let lista = document.getElementById('JuegoDetalle');
        //limpar los datos del contenedor 
        // lista.innerHTML = '';
        for (let i in detalleJuego) {
            let columna = `
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].nombre}</div>
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].categoria}</div>
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].desarrolladora}</div>
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].fechaLanzamiento} </div>
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].clasificacion}</div>
            `
            lista.innerHTML = columna;
        }
    }
}
