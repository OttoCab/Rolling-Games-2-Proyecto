// let juegostienda = [];
// leerdatoslocal();

// function leerdatoslocal() {
//     if (localStorage.length > 0) {
//         juegostienda = JSON.parse(localStorage.getItem('ListaDeJuegos'));
//         let nombre = document.getElementById(tituloJuego);
//         nombre.innerHTML = '';
//         for (let i in juegostienda) {
//             let titulo =
//                 `<section class="text-center" id="tituloJuego">
//             <h2 class="jumbotron bg-dark display-3 pt-5 text-light">${juegostienda.nombre}</h2>
//             <hr class="text-light">
//             </section>`;
//             nombre.innerHTML = titulo;
//         }
//     }
// }