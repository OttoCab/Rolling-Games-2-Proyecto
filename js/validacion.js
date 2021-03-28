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

// let checkPublicado = document.getElementById('publicado');
// checkPublicado.addEventListener('change', validarPublicado);
// function validarPublicado(){
//     console.log('desde check');
//     if(checkPublicado.checked){
//         checkPublicado.className = 'form-check is-valid';    
//     }else{
//         checkPublicado.className = 'form-check is-invalid';   
//     }
// }

