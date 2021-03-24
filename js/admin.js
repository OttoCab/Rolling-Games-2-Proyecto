import { Juegos } from "./ClasesAdmin.js";

let arregloJuegos = [];
const modalJuego = new bootstrap.Modal(document.getElementById('modalJuego'));
let btnAgregar = document.getElementById('btnAgregar');

//cuando modificarJuego se false quiero AGREGAR un nuevo juego
//cuando modificarJuego se true quiero modificar un juego existente
//esta en false porqeu se asume que se quiere agregar antes de modificar
let modificarJuego = false;


//funcion para mostrar modal
btnAgregar.addEventListener('click', function() {
    limpiarForm();
    modalJuego.show();
})

datosLocalStorage();
// let boton = document.getElementById('btnAgregar');
// boton.addEventListener('click',CampoRequerido);

function agregarJuego() {
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
    //console.log(arregloJuegos);

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
    modificarJuego = false;
}

//funcion leer los datos de local y que no se borren
function datosLocalStorage() {
    if (localStorage.length > 0) {
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
      <button class="iconos" onclick="destacar(this)" id="estrella">
        <i class="publicado far fa-star" ></i>
      </button>
      
      <button class="iconos">
        <i class="publicado fas fa-star" style="color: green"></i>
      </button>
      <button class="iconos" onclick="EJM(this)" id="${_arregloJuegos[i].codigo}">
        <i class="editar far fa-edit"></i>
      </button>
      <button class="iconos" onclick="eliminarJuego(this)" id="${_arregloJuegos[i].codigo}">
        <i class="eliminar fas fa-trash-alt"></i>
      </button>
    </td>
  </tr>`
        tablaJuegos.innerHTML += filaJuego;
        //tablaJuegos.innerHTML += filaJuego;

    }
}
window.eliminarJuego = function(boton) {
        console.log(boton.id);
        Swal.fire({
            title: 'Esta seguro de eliminar el Juego',
            text: "No puedes volver atras luego de este paso",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!',
            cancelButtonText: 'Cancelar!'
        }).then((result) => {
            if (result.isConfirmed) {
                let FiltrarJuego = arregloJuegos.filter(function(producto) {
                    return producto.codigo != boton.id;
                });
                console.log(FiltrarJuego);
                //se deben igualar los arreglos
                arregloJuegos = FiltrarJuego;
                //se guarda en local storage
                localStorage.setItem('ListaDeJuegos', JSON.stringify(arregloJuegos));
                //se llama a la funcion datosLocalStorage
                datosLocalStorage();
                Swal.fire(
                    'Producto eliminado!',
                    'El Funkopop seleccionado fue eliminado.',
                    'success'
                )
            }
        })
    }
    //EJM = elegir Juego a modificar
window.EJM = function(boton) {
    console.log(boton.id);
    //busco el objeto del arreglo, fine devuelve el primer objeto que cumple la funcion
    let JuegoeEncontrado = arregloJuegos.find(function(producto) {
        return producto.codigo === boton.id;
    });
    console.log(JuegoeEncontrado);
    //traer los datos del juego al formulario
    document.getElementById('codigo').value = JuegoeEncontrado.codigo;
    document.getElementById('nombre').value = JuegoeEncontrado.nombre;
    document.getElementById('categoria').value = JuegoeEncontrado.categoria;
    document.getElementById('descripcion').value = JuegoeEncontrado.descripcion;
    document.getElementById('imagen').value = JuegoeEncontrado.imagen;
    //modificar juego
    modificarJuego = true;
    // muestro la ventana modal
    modalJuego.show();
}


//Funcion para guardar los datos modificados
window.guardarDatos = function(event) {
    event.preventDefault();
    console.log('desde guardar datos');
    if (modificarJuego) {
        //cuando modificarJuego es true modifica un JuegoExistente
        modificarJuegoExistente();
        console.log('modificar  juego');
    } else {
        //cuando modificarJuego es false se agreag un nuevo Juego
        agregarJuego();
        console.log("1")

    }
}

function modificarJuegoExistente() {
    //se busca el objeto que se quiere editar
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;
    let publicado = document.getElementById('publicado').value;
    // se modifican los valores
    for (let i in arregloJuegos) {
        if (arregloJuegos[i].codigo === codigo) {
            arregloJuegos[i].nombre = nombre;
            arregloJuegos[i].categoria = categoria;
            arregloJuegos[i].descripcion = descripcion;
            arregloJuegos[i].imagen = imagen;
            arregloJuegos[i].publicado = publicado;

        }
    }
    //se guarda el arreglo actualizado en localStorage
    localStorage.setItem('ListaDeJuegos', JSON.stringify(arregloJuegos));
    //se muestra alerta de datos modificados con exito
    Swal.fire(
        'Juego Modificado!',
        'El juego se modifico con exito!',
        'success'
    );
    modalJuego.hide();
    // se vuelve a cargar la tabla con los datos modificados de LocalStorage
    datosLocalStorage();
}