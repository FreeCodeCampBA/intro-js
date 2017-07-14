/*
  Ejercicio final
  En este ejercicio vamos a crear un sistema sencillo para un Video Club
  Utilizando todo lo aprendido hasta ahora: strings, arreglos, funciones, etc
*/

// catalogoDePeliculas que el VideoClub posee
var catalogoDePeliculas = ['The Avengers', 'Inception', 'The Matrix', 'The Lord of the Rings'];

// Lógica del sistema
function hayStock(peliculaPedida) {
  var peliculaEncontrada = false;

  for (var i = 0; i < catalogoDePeliculas.length; i++) {
    var pelicula = catalogoDePeliculas[i];

    if (peliculaPedida === pelicula) {
      peliculaEncontrada = true;
    }
  }

  return peliculaEncontrada;
}

function atenderCliente(peliculaPedida) {
  if (hayStock(peliculaPedida)) {
    console.log('La película ' + peliculaPedida + ' se encuentra en stock🤠!');
  } else {
    console.log('La película ' + peliculaPedida + ' se encuentra sin stock.');
  }
}

// Ejecución del sistema

// 1. catalogoDePeliculas pedidas por el cliente
var primerPeliculaPedida = 'Batman';
var segundaPeliculaPedida = 'The Matrix';

// 2. Verificamos si estas existen
atenderCliente(primerPeliculaPedida);
atenderCliente(segundaPeliculaPedida);
