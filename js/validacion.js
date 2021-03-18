function campoRequerido(input) {
    if (input.value.trim() === '') {
        input.className = 'form-control is-invalid';
    } else {
        input.className = 'form-control is-valid';
    }
}

function validarDescripcion(descripcion) {
    if (descripcion.value.trim() !='' && descripcion.value.length >= 5){
        descripcion.className = 'form-control is-valid';
    } else {
        descripcion.className = 'form-control is-invalid';
    }
}