import { Juegos } from "./ClasesAdmin.js";

let arregloJuegos = [];

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
};
