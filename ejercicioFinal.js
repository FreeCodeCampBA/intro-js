/*
  Ejercicio final
  En este ejercicio vamos a crear un sistema sencillo para un VideoClub
  Utilizando todo lo aprendido hasta ahora, strings, arreglos, funciones, etc
*/

// Peliculas que el VideoClub posee
var peliculas = ['The Avengers', 'Inception', 'The Matrix', 'The Lord of the Rings'];

// Lógica del sistema
function verificarStock(peliculaPedida) {
  var peliculaEncontrada = false;

  for (var i = 0; i < peliculas.length; i++) {
    var pelicula = peliculas[i];

    if (peliculaPedida === pelicula) {
      peliculaEncontrada = true;
    }
  }

  return peliculaEncontrada;
}

function atenderCliente(peliculaPedida) {
  if (verificarStock(peliculaPedida) === true) {
    console.log('La película ' + peliculaPedida + ' se encuentra con stock 🤠!!');
  } else {
    console.log('La película ' + peliculaPedida + ' se encuentra sin stock 😢!!');
  }
}

// Ejecución del sistema

// 1. Peliculas pedidas por el cliente
var primerPeliculaPedida = 'Batman';
var segundaPeliculaPedida = 'The Matrix';

// 2. Verificamos si estas existen
atenderCliente(primerPeliculaPedida);
atenderCliente(segundaPeliculaPedida);
