let juegosTienda = [];
let stateLoginAdmin = false;

leerInformacion();
loginAdmin();

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

// creo la pestaña de admin
function loginAdmin() {
    let sectionAdminLeftNav = document.getElementById("navbarLeftRG");
    sectionAdminLeftNav.innerHTML =
        `<li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Tienda</a>
        </li>
    ${stateLoginAdmin ?
            `<li class="nav-item">
            <a class="nav-link" href="administracion.html">Administracion</a>
        </li>` : ``}
        <li class="nav-item">
            <a class="nav-link" href="adn.html">Acerca de Nosotros</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="contacto.html">Contacto</a>
        </li>`;

    let sectionAdminRigthNav = document.getElementById('navbarRightRG');
    sectionAdminRigthNav.innerHTML =
        `<li class="nav-item me-3">
            ${stateLoginAdmin ?
            `<a  class="nav-link" href="Error404.html"><strong>Otto Admin</strong></a>` :
            `<button class="btn btn-light" id='btnLogin'><strong>Login</strong></button>`}    
        </li>
        <li class="nav-item">
            ${stateLoginAdmin ? `<button class="btn btn-light" onclick="loginOut()"><strong>SALIR</strong></button>` :
            `<button class="btn btn-light" id='btnRegistro'><strong>Registro</strong></button>`}  
        </li>`;

    let sectionAdminfooter = document.getElementById('footerRG')
    sectionAdminfooter.innerHTML = `<li><a href="index.html" class="text-secondary">Tienda</a></li>
    ${stateLoginAdmin ? `<li><a href="administracion.html" class="text-secondary">Administracion</a></li>` : ``}
    <li><a href="adn.html" class="text-secondary">Acerca de Nosotros</a></li>
    <li><a href="contacto.html" class="text-secondary">Contacto</a></li>`;
}

