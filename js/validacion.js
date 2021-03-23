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
    if (descripcion.value.trim() !='' && descripcion.value.length >= 5){
        descripcion.className = 'form-control is-valid';
        return true;
    } else {
        descripcion.className = 'form-control is-invalid';
        return false;
    }
}

let checkPublicado = document.getElementById('publicado');



// checkPublicado.addEventListener('checked', validarPublicado);
// function validarPublicado(){
//     console.log(checkPublicado.checked);
//     if(checkPublicado.checked){
//         checkPublicado.className = 'form-check-input - is-valid';
//     }else{
//         heckPublicado.className = 'form-check-input - is-invalid';
//     }
// }

// function validarGeneral(event){
//     event.preventDefault();
//     console.log(event);
//     if(CampoRequerido(document.getElementById('codigo')) &&
//     CampoRequerido(document.getElementById('nombre')) &&
//     CampoRequerido(document.getElementById('categoria')) &&
//     ValidarDescripcion(document.getElementById('descripcion'))){
//         alert('bien');
//         limpiarForm();
//     }else{
//         alert('mal');
//     }
// }


// function limpiarForm(){
//     let formulario = document.getElementById('formJuegos');
//     formulario.reset();
//     codigo.className = 'form-control';
//     nombre.className = 'form-control';
//     categoria.className = 'form-control';
//     descripcion.className = 'form-control';
//  }