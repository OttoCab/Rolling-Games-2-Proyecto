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
  datosLocalStorage();
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
function datosLocalStorage() {
  if (localStorage.length >= 0) {
    // se trae con variable provisoria los datos de localStorrage
    //parse transforma Json a java script 
    let _arregloJuegos = JSON.parse(localStorage.getItem('ListaDeJuegos'));
    console.log(_arregloJuegos);
    //si el arreglo esta vacio, le cargo los datos de Local
    if (arregloJuegos.length === 0) {
      arregloJuegos = _arregloJuegos;
    }
    cargarTabla(_arregloJuegos);
  }
}

function cargarTabla(_arregloJuegos) {
  let tablaJuegos = document.getElementById('tablaJuegos');
  let filaJuego = '';
  //limpia los datos del tbody
  tablaJuegos.innerHTML = '';

  for (let i in _arregloJuegos) {
    filaJuego = ` <tr>
    <th scope="row">${_arregloJuegos[i].codigo}</th>
    <td>${_arregloJuegos[i].nombre}</td>
    <td>${_arregloJuegos[i].categoria}</td>
    <td>${_arregloJuegos[i].descripcion}</td>
    <td>${_arregloJuegos[i].imagen}</td>
    <td>
      <div class="form-check">
        <input
          type="checkbox"
          id="publicado"
          class="form-check-input"
        />
      </div>
    </td>
    <td>
      <button class="iconos">
        <i class="publicado far fa-star"></i>
      </button>
      <button class="iconos">
        <i class="editar far fa-edit"></i>
      </button>
      <button class="iconos">
        <i class="eliminar fas fa-trash-alt"></i>
      </button>
    </td>
  </tr>`
    tablaJuegos.innerHTML += filaJuego;
  }
}