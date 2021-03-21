function campoRequerido(input) {
    if (input.value.trim() === '') {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

function validarDescripcion(descripcion) {
    if (descripcion.value.trim() !='' && descripcion.value.length >= 5){
        descripcion.className = 'form-control is-valid';
        return true;
    } else {
        descripcion.className = 'form-control is-invalid';
        return false;
    }
}

function validacion(event){
    event.preventDefault();
    console.log(event);
    if(campoRequerido(document.getElementById('nombre')) && validarDescripcion(document.getElementById('descripcion'))){
        alert('ok');
        limpiarForm();
    }else{
        alert('mal');
    }
}

function limpiarForm(){
    document.getElementById('formJuegos').reset();
    nombre.className = 'form-control';
    categoria.className = 'form-control';
    descripcion.className = 'form-control';
}