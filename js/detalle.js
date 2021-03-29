let juegostienda = [];
tituloJuego();

function tituloJuego() {
    if (localStorage.length > 0) {
        juegostienda = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        // console.log('local', juegostienda)
        // let nombre = document.getElementById('tituloJuego');
        // let descripcion = document.getElementById('detalle-descrip')
        nombre.innerHTML = '';
        // descripcion.innerHTML = '';
        for (let i in juegostienda) {
            console.log('iii', i)
            let titulo =
                `<h2 class="bg-dark display-3 pt-5 text-light">{juegostienda[i].nombre}</h2>`;
            // let pDescrip = `<p>${juegostienda[i].descripcion}</p>`;
            nombre.innerHTML += titulo;
        }
    }
}

let detalleJuego = [];
detalleDelJuego();

function detalleDelJuego() {
    if (localStorage.length > 0) {
        //se trae los datos del localStorage y se los pasa a js
        detalleJuego = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        //crea la card con la los datos de juego
        let lista = document.getElementById('JuegoDetalle');
        //limpar los datos del contenedor 
        lista.innerHTML = '';
        for (let i in detalleJuego) {
            let columna = `
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].desarrolladora}</div>
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].fechaLanzamiento} </div>
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].categoria}</div>
            <div class="col-lg-4 col-sm-12 my-3">${detalleJuego[i].clasificacion}</div>
            `
            lista.innerHTML += columna;
        }
    }
}

let imgJuegos = [];
armaSlider();

function armaSlider() {
    console.log('entro funcion')
    if (localStorage.length > 0) {
        imgJuegos = JSON.parse(localStorage.getItem('ListaDeJuegos'));
        let slider = document.getElementById('slider');
        slider.innerHTML = "";
        for (let i in imgJuegos) {
            console.log('dentro del for')
            slider.innerHTML = slider + `
            <div class="d-flex justify-content-center">
                            <div>
                                <img src="/img/Games/${imgJuegos[i].imagen}" class="d-block w-100" alt="...">
                            </div>
                            </div>`
        }
    }
}