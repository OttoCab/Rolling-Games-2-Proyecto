// defino ventana modal en una variable global
// const modalRegistro = new bootstrap.Modal(document.getElementById("modalRegistro"));

// queremos que el boton REGISTRO escuche el evento click y muestre la ventana modal
let btnRegistro = document.getElementById("btnRegistro");
btnRegistro.addEventListener("click", () => {
    modalRegistro.show();
    limpiarFormRegistro();
});

//===================================================================================
function CampoRequerido(input) {
    if (input.value.trim() === '') {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

function ValidarDescripcion(descripcion) {
    if (descripcion.value.trim() != '' && descripcion.value.length >= 5) {
        descripcion.className = 'form-control is-valid';
        return true;
    } else {
        descripcion.className = 'form-control is-invalid';
    }
}

//-------------- VALIDACIONES CONTACTO ------------------------------
function ValidEmail(email) {
    let emailRequerido = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != "" && emailRequerido.test(email.value)) {
        email.className = "form-control is-valid";
        return true;
    } else {
        email.className = "form-control is-invalid";
        return false;
    }
}

//-------valida asunto------------------ 
function validarAsunto(asunto) {
    if (asunto.value.trim() != "Seleccione un motivo") {
        asunto.className = "form-select is-valid";
        return true;
    } else {
        asunto.className = "form-select is-invalid";
        return false;
    }
}

function validarGeneralContacto(event) {
    event.preventDefault();
    console.log("en validar general contacto");
    if (CampoRequerido(document.getElementById("nom")) &&
        ValidEmail(document.getElementById("email")) &&
        validarAsunto(document.getElementById("asunto")) &&
        ValidarDescripcion(document.getElementById("consulta"))) {
        // --- debo mandar el mail ----
        console.log("ok validacion. llama a enviar email")
        enviarEmailContacto();
    } else {
        // ---- debo mostrar error y no mandar mail ----
        Swal.fire(
            "Datos Incorrectos",
            "Por favor, verifique.",
            "warning"
        );
    }
}

// function validarGeneralContacto(event) {
//     console.log("ok validacion. llama a enviar email")
//     console.log(event)
//     event.preventDefault();
//     enviarEmailContacto();
// }


function enviarEmailContacto() {
    console.log("en enviar email")

    emailjs.send("service_x0hl6kg", "template_4qdp39z", {
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        asunto: document.getElementById("asunto").value,
        consulta: document.getElementById("consulta").value,
        novedades: document.getElementById("novedades").value
    }).then(function(response) {
        console.log("email enviado ok")
            // se ejecuta cuando todo salio bien (se cumplio la promesa)
        Swal.fire(
            "Solicitud de Registro",
            "El email se envió correctamente",
            "success"
        );
        // limpiarFormContacto();
    }, function(error) {
        console.log("ERROR en email")
            //se ejecuta cuando algo salio mal al enviar el email
        Swal.fire(
            "Contáctanos",
            "Ocurrió un error. Inténtelo en unos minutos.",
            "warning"
        );
    })
}


// ----------- FIN VALIDACIONES CONTACTO ---------------------------------------

//==============================================================================
//============ validaciones para MODAL REGISTRO ===============================
//=============================================================================

//-------valida Pais------------------ 
function validarSelect(paisReg) {
    // if (paisReg.value != "0") {
    if (paisReg.value.trim() != "Selecciona tu País") {
        paisReg.className = "form-select is-valid";
        return true;
    } else {
        paisReg.className = "form-select is-invalid";
        return false;
    }
}

//-------Validar Password------------
// Contraseña de 8 caracteres
function validarPassword(passReg) {
    if (passReg.value.trim() != "" && passReg.value.length == 8) {
        passReg.className = "form-control is-valid";
        return true;
    } else {
        passReg.className = "form-control is-invalid";
        return false;
    }
}

//-------valida acepto terminos y condiciones------------------
function validarCheck(terminosReg) {
    if (terminosReg.checked) {
        terminosReg.className = "form-check-input is-valid";
        return true;
    } else {
        terminosReg.className = "form-check-input is-invalid";
        return false;
    }
}

// ---- Antes de enviar solicitud de registro realiza validacion general -------
function validarGeneralRegistro(event) {
    // --- detener el evento submit para ejecutar funciones de validacion antes de enviar ---
    event.preventDefault();
    if (validarSelect(document.getElementById("paisReg")) &&
        CampoRequerido(document.getElementById("nombreReg")) &&
        CampoRequerido(document.getElementById("nickReg")) &&
        ValidEmail(document.getElementById("emailReg")) &&
        validarPassword(document.getElementById("passReg")) &&
        validarCheck(document.getElementById("terminosReg"))) {
        // --- debo mandar el mail ----
        enviarEmailRegistro();
    } else {
        // ---- debo mostrar error y no mandar mail ----
        Swal.fire(
            "Datos Incorrectos",
            "Por favor, verifique.",
            "warning"
        );
    }
}

// Se usa emailJS y se trae el formato del objeto de emailjs para completar con los valores de los input
function enviarEmailRegistro() {
    // ---- Prepara nombre del pais seleccionado
    let varPais = "";
    switch (document.getElementById("paisReg").value) {
        case "1":
            varPais = "Argentina";
            break;
        case "2":
            varPais = "Brasil";
            break;
        case "3":
            varPais = "Bolivia";
            break;
        case "4":
            varPais = "Chile";
            break;
        case "5":
            varPais = "Paraguay";
            break;
        case "6":
            varPais = "Uruguay";
            break;
    }

    //--- prepara si acepta recbir noticias y ofertas
    let varNoticias = "No Acepto"
    if (noticiasReg.checked) {
        varNoticias = "Acepto"
    }

    //--- prepara email con los datos ingresados en el formulario -----
    // era de valentina: emailjs.send("service_w1eakad", "template_ehorwun"
    emailjs.send("service_x0hl6kg", "template_9n797so", {
        from_name: "Rollling Games",
        to_name: document.getElementById("nombreReg").value,
        paisReg: varPais,
        nombreReg: document.getElementById("nombreReg").value,
        nickReg: document.getElementById("nickReg").value,
        emailReg: document.getElementById("emailReg").value,
        passReg: document.getElementById("passReg").value,
        noticiasReg: varNoticias,
        terminosReg: "Acepto",
        email: document.getElementById("emailReg").value
    }).then(function(response) {
        // se ejecuta cuando todo salio bien (se cumplio la promesa)
        Swal.fire(
            "Solicitud de Registro",
            "El email se envió correctamente",
            "success"
        );
        limpiarFormRegistro();
        // cerrar la ventana modal
        modalRegistro.hide();

    }, function(error) {
        //se ejecuta cuando algo salio mal al enviar el email
        Swal.fire(
            "Solicitud de Registro",
            "Ocurrió un error. Inténtelo en unos minutos.",
            "warning"
        );
    })
}

//-- limpia los campos del formulario para permitir nuevo ingreso --
function limpiarFormRegistro() {
    document.getElementById("formRegistro").reset();
    document.getElementById("paisReg").className = "form-select";
    document.getElementById("nombreReg").className = "form-control";
    document.getElementById("nickReg").className = "form-control";
    document.getElementById("emailReg").className = "form-control";
    document.getElementById("passReg").className = "form-control";
    document.getElementById("terminosReg").className = "form-check-input";
}

//============== FIN VALIDACIONES PARA MODAL REGISTRO ================