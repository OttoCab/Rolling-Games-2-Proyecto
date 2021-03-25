function CampoRequerido(input) {
    if (input.value.trim() === "") {
        input.className = "form-control is-invalid"
        return false;
    } else {
        input.className = "form-control is-valid"
        return true;
    }
}

function ValidEmail(email) {
    let emailRequerido = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != "" && emailRequerido.test(email.value)) {
        email.className = "form-control is-valid"
        return true;
    } else {
        email.className = "form-control is-invalid"
        return false;
    }
}

function ValidConsult(consulta) {
    if (consulta.value.trim() != "" && consulta.value.length >= 20) {
        consulta.className = "form-control is-valid"
        return true;
    } else {
        consulta.className = "form-control is-invalid"
        return false;
    }
}

function ValidForm(event) {
    event.preventDefault();
    console.log(event);
    if (CampoRequerido(document.getElementById("Nom")) &&
        ValidEmail(document.getElementById("email")) &&
        ValidConsult(document.getElementById("consulta"))) {
        EnvDatos();
    } else {
        alert("datos incorrectos");
    }
}


function EnvDatos() {
    console.log("prueba ENVDATOS")
}