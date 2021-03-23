import { Juegos } from "./ClasesAdmin.js";

let arregloJuegos = [];
const modalJuego = new bootstrap.Modal(document.getElementById('modalJuego'));
let btnAgregar = document.getElementById('btnAgregar');
//funcion para mostrar modal
btnAgregar.addEventListener('click', function () {
  modalJuego.show();
})

datosLocalStorage();
// let boton = document.getElementById('btnAgregar');
// boton.addEventListener('click',CampoRequerido);

window.agregarJuego = function (event) {
  event.preventDefault();
  console.log("agregar juego");
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let categoria = document.getElementById("categoria").value;
  let descripcion = document.getElementById("descripcion").value;
  let imagen = document.getElementById("imagen").value;
  let publicado = document.getElementById("publicado").value;

  let nuevoJuego = new Juegos(
    codigo,
    nombre,
    categoria,
    descripcion,
    imagen,
    publicado
  );
  //se agrega en el arreglo
  arregloJuegos.push(nuevoJuego);
  console.log(arregloJuegos);

  // se guarda en localstorage
  localStorage.setItem('ListaDeJuegos', JSON.stringify(arregloJuegos));
  limpiarForm();
  Swal.fire(
    'Juego Nuevo!',
    'El juego fue guardado!',
    'success'
  );
  //cerrar la ventana modal
  modalJuego.hide();
};

function limpiarForm() {
  let formulario = document.getElementById('formJuegos');
  formulario.reset();
  codigo.className = 'form-control';
  nombre.className = 'form-control';
  categoria.className = 'form-control';
  descripcion.className = 'form-control';
}

//funcion leer los datos de local y que no se borren
function datosLocalStorage(){
  if(localStorage.length > 0){
    // se trae con variable provisoria los datos de localStorrage
    //parse transforma Json a java script 
    let _arregloJuegos = JSON.parse(localStorage.getItem('ListaDeJuegos'));
    console.log(_arregloJuegos);  
  }

  
}