// let stateLoginAdmin = false;
// stateLoginAdmin = JSON.parse(localStorage.getItem('LS_User'));
areYouLoged();



// creo la pestaña de admin
function loginAdmin() {
    let sectionAdminLeftNav = document.getElementById("navbarLeftRG");
    sectionAdminLeftNav.innerHTML =
        `<li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">Tienda</a>
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

function isLoged(){
    if(localStorage.getItem('LS_User')){
        return true
    } else {
        return false
    }
}

function areYouLoged(){
    if (isLoged()) {
        stateLoginAdmin = true;
        loginAdmin();
    }else{
        stateLoginAdmin = false;
        loginAdmin();
    }
}

function loginOut(){
    stateLoginAdmin = false;
    loginAdmin();
    crearModales();
    localStorage.removeItem('LS_User')
}