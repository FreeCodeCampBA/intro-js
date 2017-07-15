---
# Introducción a JavaScript

![Introducción a JS](https://i.imgur.com/v4zxLB7.png)

---
## ![freeCodeCamp BA logo](https://i.imgur.com/b4MqE3I.png) freeCodeCamp BA

- Leonardo Galante **[@leogln_](https://twitter.com/leogln_)**
- Nicolás Quiroz **[@_nhsz](https://twitter.com/_nhsz)**

---
## ![freeCodeCamp BA logo](https://i.imgur.com/b4MqE3I.png) freeCodeCamp BA

- **[freecodecamp.com](https://freecodecamp.com)**


- Nuestra comunidad: **[freecodecampba.org](https://freecodecampba.org)**  
- En Twitter: **[@freeCodeCampBA](https://twitter.com/freeCodeCampBA)**


- **[Guía rápida para empezar](https:bit.ly/fccba-quick-start)**

<!-- slide -->
## ![freeCodeCamp BA logo](https://i.imgur.com/b4MqE3I.png) freeCodeCamp BA

### Próximo Meetup: **[Domingo 23/7 en Wolox](https://www.meetup.com/es/freeCodeCampBA/events/241662741/)**

- 15 a 20hs
- Charla de Ruby On Rails
- **Inscripción:** del Miércoles 19/7 al Sábado 22/7

<!-- slide -->
## Esta fue la primer página web

**[World Wide Web (CERN - 1990)](http://info.cern.ch/hypertext/WWW/TheProject.html)**

![Primer página web](https://upload.wikimedia.org/wikipedia/commons/7/71/The_First_Website.png)

<!-- slide -->
## ¿Qué es JavaScript?

Es un **lenguaje de programación** creado en 1995 por [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich), para darle dinamismo e interacción a los [sitios web](http://www.webdesign-inspiration.com/).

Hoy es un **lenguaje de propósito general**.

<!-- slide -->
## ¿Por qué JavaScript?

- Es el lenguaje que entienden y ejecutan los navegadores (browsers).  
- Es **relativamente fácil de aprender**, por lo que es una buena opción como primer lenguaje.
- **Hay mucha demanda de desarrolladores JavaScript**.
- Ahora también podemos ejecutar código JavaScript fuera del browser, usando **NodeJS**.

<!-- slide -->
## Variables

Es una caja para guardar **valores**, de diferentes tipos. Esta caja tiene una etiqueta, el **nombre** de la variable.

![variable](https://farm5.static.flickr.com/4051/4313722503_f6289e9b55_o.jpg)

Son **reutilizables**: una vez creadas, podemos usarlas todas las veces que querramos.

Se pueden **reasignar**, cambiar su valor. Por eso se llaman variables.

<!-- slide -->
### Declarar una variable

Declarar es **crear una nueva variable**.

Usamos la palabra `var` para crear nuevas variables.

```js
var nombreDeLaVariable;
```

**Nota**: las sentencias en JS terminan con `;`

<!-- slide -->
## Importante: ¡probá todo el código en tu consola!

![Chrome's console](https://i.imgur.com/1UWTlwor.png)

<!-- slide -->
#### Ejercicio 1

Declarar la variable `nombre`.

<!-- slide -->
#### Solución ejercicio 1

```js
var nombre;
```

<!-- slide -->
### Inicializar una variable

Inicializar una variable consiste en crearla (declararla) y asignarle un valor inicial.

```js
var nombreDeLaVariable = 3;
```

<!-- slide -->
#### Ejercicio 2

Declarar la variable `nombre` e inicializarla con tu nombre, escrito entre comillas.

<!-- slide -->
#### Solución ejercicio 2

```js
var nombre = 'Nicolás';
```

<!-- slide -->
### Reasignar una variable

_¿Te acordás que las variables se podían reasignar?_

Una vez que creamos una variable y la inicializamos, ya podemos empezar a usarla.

También podemos cambiar su valor, es decir, reasignarla.

```js
//Declaro e inicializo la variable
var nombreDeLaVariable = 3;

// Le cambio el valor (la reasigno)
nombreDeLaVariable = 7;
```

<!-- slide -->
#### Ejercicio 3

Reasignar la variable `nombre` que creamos.

<!-- slide -->
#### Solución ejercicio 3

```js
var nombre = 'freeCodeCamp';
```

<!-- slide -->
### Operar con variables

```js
var tres = 3;

// Equivale a hacer 3 + 2
tres + 2;
// => 5
```

<!-- slide -->
#### Ejercicio 4

Crear la variable `unNumero`, inicializarla con el valor 1.

En otra instrucción, sumarle 3 a la misma variable.

<!-- slide -->
#### Solución ejercicio 4

```js
var unNumero = 1;
unNumero + 3;
// => 4
```

<!-- slide -->
## Cómo nombrar variables

- Usar **nombres descriptivos**, que representen el contenido
- El nombre puede empezar con cualquier letra, `$` ó `_`, no con números
- Por convención se utiliza **camelCase**
- El lenguaje es **case sensitive**, es decir hay distinción entre mayúsculas y minúsculas

<!-- slide -->
## Constantes

Son espacios con nombre para guardar **valores** (también son cajas con etiquetas, como las variables) que no varían.

Son **reutilizables**, pero **no se pueden reasignar**.

```js
const numeroEntero = 1;
```

<!-- slide -->
### Si reasignamos una constante, obtenemos un error

```js
const saludo = 'Hola!';
saludo = 'Hola Mundo!';
// => Uncaught TypeError: Assignment to constant variable
```

<!-- slide -->
## Imprimir texto en la consola

Podemos mostrar valores de cualquier tipo en la **consola** del navegador.

¡La consola forma parte de las *herramientas de desarrollo* del navegador que estás usando ahora!

```js
console.log('Hola Mundo!');
console.log(nombreDeLaVariable);
```

<!-- slide -->
#### Ejercicio 5

Mostrar por consola el valor de la variable `nombre`.

<!-- slide -->
#### Solución ejercicio 5

```js
console.log(nombre);
```

<!-- slide -->
## Tipos de datos

Podemos usar valores de diferentes tipos en JavaScript.

### Tipos principales en JS

- `String` (Cadena de caracteres)
- `Number`  (Números)
- `Boolean` (Booleanos)

<!-- slide -->
## String

Representan **cadenas de caracteres** (texto).

Se escriben entre comillas simples ó dobles, **sin mezclar**.

```js
'JavaScript' // ✔
"JavaScript" // ✔
// 'JavaScript" ✗ Nope
```

Cualquier valor entre comillas es un `String`, por ejemplo, un número.

```js
'43' // Esto también es un String
```

<!-- slide -->
### Operaciones con Strings

#### Longitud de la cadena

```js
var titulo = "¡Estoy aprendiendo a programar!";
titulo.length;  // 31
```

```js
'titulo'.length;  // 6
```

<!-- slide -->
#### Ejercicio 6
Declarar una variable `evento` y asignarle `'Programá Tu Futuro'`.

Averiguar cuál es la longitud de la variable definida.

<!-- slide -->
#### Solución ejercicio 6

```js
var evento = 'Programá Tu Futuro';
evento.length; // 18
```

<!-- slide -->
### Operaciones con Strings

#### Concatenación

Se usa para combinar diferentes cadenas de caracteres.

```js
var lenguaje = 'JavaScript';
var año = 1995;
var unaFrase = lenguaje + ' apareció en ' + año;
// "JavaScript apareció en 1995"
```

<!-- slide -->
#### Ejercicio 7

Declarar una variable `tema` y asignale `Kids`.

Declarar otra variable `artista` y asignale `MGMT`.

Teniendo las 2 variables declaradas, concatenarlas para formar
el siguiente estado: `Ahora suena: Kids de MGMT`.

<!-- slide -->
#### Solución ejercicio 7

```js
var tema = 'Kids';
var artista = 'MGMT';
var estado = 'Ahora suena: ' + tema + ' de ' + artista;
```

<!-- slide -->
## Number

JavaScript no hace diferencia entre números enteros y de punto flotante (decimales).

```js
var unEntero = 27;
```

```js
var unNumeroDePuntoFlotante = 2.5;
```

```js
var unEnteroNegativo = -10;
```

<!-- slide -->
### Operaciones con Number

#### Suma: `x + y`

```js
10 + 91;
// => 101
1 + 3.14;
// => 4.14
```

#### Resta: `x - y`

```js
27 - 4
// => 23
3 - 5
// => -2
3 - 1.5
// => 1.5
```

<!-- slide -->
#### Ejercicio 8
¿Cuantos días faltan para el **último día** del mes?

<!-- slide -->
#### Solución ejercicio 8

```js
var diaFinDeMes = 31;
var diaActual = 15;
var diasRestantes = diaFinDeMes - diaActual;
// => 16
```

<!-- slide -->
### Operaciones con Number

#### Multiplicación: `x * y`

```js
7 * 3
// => 21
4 * 12.5
// => 50
```

#### División: `x / y`

```js
1 / 2
// => 0.5
8 / 2
// => 4
1.0 / 3.0
// => 0.3333333333333333
```

<!-- slide -->
#### Incremento
Se puede escribir de muchas formas: `x = x + 1`, `x += 1`, `++x`, `x++`

```js
var x = 5;
x += 1;
// => 6
```

#### Decremento
Se puede escribir de muchas formas: `x = x - 1`, `x -= 1`, `--x`, `x--`

```js
var x = 5;
x -= 1;
// => 4
```

<!-- slide -->
#### Módulo: `x % y`

Es el resto de dividir `x` por `y`.

```js
10 % 2
// => 0
11 % 2
// => 1
```

<!-- slide -->
## Boolean

Tiene 2 valores posibles: **true** y **false**, para indicar si algo es **verdadero** ó **falso**.

```js
2 > 1
// => true
1 > 2
// => false
'hola' === 'Hola'
// => false
```

**Nota:** al comparar valores, usar siempre `===`

<!-- slide -->
#### Ejercicio 9
Verificar si tu edad es mayor a 18

<!-- slide -->
#### Solución ejercicio 9

```js
var edad = 24;
edad > 18
// => true
```

<!-- slide -->
### Expresión booleana

Es cualquier expresión que pueda evaluarse como verdadera ó falsa y por lo tanto, reducirse a `true` ó `false`.

<!-- slide -->
#### Ejercicio 10
¿Cómo podemos verificar si el día de hoy es par?

<!-- slide -->
#### Solución ejercicio 10

```js
diaActual % 2 === 0
// => false
```

<!-- slide -->
## Operadores de comparación

### Igualdad `==`

Compara **sólo el valor**

```js
1 == 1
// => true
1 == '1'
// => true
```

<!-- slide -->
### Igualdad estricta `===`

Compara el **valor y tipo del mismo**

```js
1 === 1
// => true
1 === '1'
// => false
```

<!-- slide -->

Son análogos a la igualdad.

### Desigualdad `!=`

```js
23 != '23'
// => false
```

### Desigualdad estricta `!==`

```js
23 !== '23'
// => true
```

<!-- slide -->
### Otros operadores de comparación

#### Menor `<`

```js
1 < 2
// => true
```

También podemos comparar caracteres, según su orden en la tabla ASCII.

```js
'a' < 'b'
// => true
```

#### Mayor `>`

```js
77.5 > 80
// => false
```

<!-- slide -->
#### Menor ó igual `<=`

```js
10 <= 10
// => true
```

#### Mayor ó igual `>=`

```js
31 >= 33
// => false
```

<!-- slide -->
## Operadores lógicos

Se utilizan para evaluar **valores y expresiones booleanas**.

Retornan un valor booleano.

<!-- slide -->
### AND `&&`

Retorna `true` **si y sólo si todas las expresiones evaluadas son verdaderas**. Sino, retorna `false`.

```js
true && true
// => true
```

<!-- slide -->
#### Ejercicio 11
Es tu edad mayor a 18 **y, al mismo tiempo,** menor a 26?

<!-- slide -->
#### Solución ejercicio 11

```js
var edad = 24;
edad > 18 && edad < 26;
// => true
```

<!-- slide -->
### OR `||`

Retorna `true` si **al menos una de las expresiones es verdadera**; sino, retorna `false`.

```js
true || true
// => true
```

```js
true || false
// => true
```

```js
false || false
// => false
```

<!-- slide -->
### NOT `!`

**Negación**. Retorna `false` si la expresión es verdadera; sino, retorna `true`.

```js
// En este caso poner !(true) o bien !true es lo mismo
!(true)
// => false
```

```js
!(2 > 1)  // false, porque 2 > 1 es true
```

```js
!(/* expresión booleana verdadera */)  // false
```

```js
!(/* expresión booleana falsa */)  // true
```

<!-- slide -->
### Ejercicio 12

¿Cuál es el resultado final, `true` ó `false`?

```js
var x = 10;
var y = 'a';

y === 'b' || x >= 10;
```

<!-- slide -->
### Ejercicio 13

¿Cuál es el resultado final, `true` ó `false`?

```js
var x = 3;
var y = 8;

!(x == '3') && !(y != 8);
```

<!-- slide -->
## Undefined

Indica que la variable **no tiene valor definido**. Esto pasa cuando le asignamos el valor `undefined` explícitamente o sólo la declaramos, sin inicializarla.

```js
var conValorIndefinido = undefined;
```

```js
var variableSoloDeclarada;
// => undefined
```

<!-- slide -->
## Comentarios

### 1 sola línea

```js
// Esto es un comentario simple
```

### Multilínea

```js
/*
  Los que se enamoran de la práctica sin la teoría
  son como los pilotos sin timón ni brújula,
  que nunca podrán saber a dónde van

  Leonardo Da Vinci
*/
```

<!-- slide -->
## Arrays

Un `array` es una **lista de valores**.

```js
var unArregloVacio = [];
```

```js
var unArregloDeNumeros = [1, 2, 3];
```

En JavaScript, podemos armar listas de **valores de cualquier tipo**.

```js
var unArregloDeCosas = [3.7, 2, 'JavaScript', [48, 7]];
```

<!-- slide -->
### Ejercicio 14

Definí un **array** con el nombre de tus 3 mejores amigos

<!-- slide -->
#### Solución ejercicio 14

```js
var mejoresAmigos = ['Matías', 'Nicolás', 'Mauricio'];
```

<!-- slide -->
### Para acceder a un elemento usamos índices

Primer elemento del array: `[0]`

```js
unArregloDeNumeros[0];
// => 1
```

Último elemento del array: `[longitud del arreglo - 1]`

```js
var ultimaPosicion = unArregloDeNumeros.length - 1;
unArregloDeNumeros[ultimaPosicion];
// => 3
```

**Nota:** los índices de los arrays empiezan en 0.

<!-- slide -->
### Ejercicio 15

Definir un **array** `mejoresAmigos` con los nombres de tus 3 mejores amigos.

Mostrar por consola el último amigo dentro del array.

<!-- slide -->
#### Solución ejercicio 15

```js
var mejoresAmigos = ['Matias', 'Nicolas', 'Mauricio'];
console.log(mejoresAmigos[2]);
```

<!-- slide -->
### Modificar un `Array`

#### Reasignar valores

```js
var unArregloDeNumeros = [19, 8, 3];
unArregloDeNumeros[1] = 23;
// => [19, 23, 3]
```

#### Agregar al final

```js
unArregloDeNumeros.push('FCC');
// => [19, 23, 3, 'FCC']
```

#### Sacar el último elemento

```js
unArregloDeNumeros.pop();
// => 'FCC'
```

<!-- slide -->
### Ejercicio 16

Agregale un amigo más a tu array de `mejoresAmigos`.

<!-- slide -->
#### Solución ejercicio 16

```js
mejoresAmigos.push('Camilo');
console.log(mejoresAmigos);
```

<!-- slide -->
### Nota: Strings e índices

También **podemos acceder a los caracteres de un `String`** usando índices (como si fuera un `Array` de caracteres), pero **no podemos modificarlo** (los `Strings` en JavaScript son *inmutables*).

Si quisiéramos hacerlo, tendríamos que convertirlo primero a `Array`, operar y luego pasarlo a `String` nuevamente.

```js
var unString = 'Puedo acceder a los caracteres de este texto, pero no modificarlo';
```

#### Acceder a un caracter de un `String`

```js
console.log(unString[2]);
// => e
```

<!-- slide -->
### Convierto el `String` a `Array`

```js
console.log(unString.split(' '));
/*
[
  'Puedo',
  'acceder',
  'a',
  'los',
  'caracteres',
  'de',
  'este',
  'texto,',
  'pero',
  'no',
  'modificarlo',
]
*/
```

<!-- slide -->
## Condicionales

Nos permiten decidir **qué camino seguir**, según las condiciones que evaluemos.

```js
if (condición booleana) {
  // Se ejecuta si la condición se cumple
} else {
  // Se ejecuta si la condición no se cumple
}
```

<!-- slide -->
### Ejemplo

```js
var edad = 16;
// Solo las personas mayores de 18 años pueden entrar al boliche
if (edad > 18) {
  console.log('Puede entrar al boliche.');
} else {
  console.log('No puede entrar al boliche.');
}
```

<!-- slide -->
### Valores falsos (falsy values)

Son aquellos valores que se interpretan como *falsos* **si se evalúan en el contexto de una expresión booleana**.

- `false`
- `null`
- `undefined`
- `''`
- `0`
- `NaN`

<!-- slide -->
### Valores verdaderos (truthy values)

**Todos los valores que no se encuentren en la lista anterior**, se consideran *verdaderos*.

<!-- slide -->
## Ciclos

Nos permiten iterar sobre diferentes **colecciones de valores**

También iterar hasta que ciertas **condiciones se cumplan o no**

<!-- slide -->
### While

Se ejecuta hasta que la **condición booleana sea falsa**.

```js
var i = 0;
// Iteración N° 0 hasta Iteración N° 4
while (i < 5) {
  console.log('Iteración N° ' + i);
  i++;
}
```

<!-- slide -->
### For

Se ejecuta hasta que la **condición booleana sea falsa** y consiste en tres expresiones **opcionales**.

```js
for (expresión inicial; condición; expresión final) {
  ...
};
```

* `expresión inicial:` declaramos una variable como contador.
* `condición:` expresión evaluada antes de cada iteración.
* `expresión final:` expresión evaluada al final de cada iteración.

<!-- slide -->
#### Ejemplo I

```js
for (var i = 0; i < 10; i++) {
  console.log('Iteración N° ' + i);
}
```

<!-- slide -->
#### Ejemplo II

```js
var animales = ['Perro', 'Gato', 'Tortuga'];

// Recorremos el array animales y mostramos cada uno
for (var i = 0; i < animales.length; i++) {
  console.log('Las mascotas disponibles son: ' + animales[i]);
}
```

<!-- slide -->
### Ejercicio 17

Definir un array `planetas` con los siguientes valores: 'Jupiter', 'Saturno' y 'Urano'.

Recorrer el array y mostrarlos por consola.

<!-- slide -->
#### Solución ejercicio 17

```js
var planetas = ['Jupiter', 'Saturno', 'Urano'];

for (var i = 0; i < planetas.length; i++) {
  var planeta = planetas[i];
  console.log('Planeta: ' + planeta);
}
```

<!-- slide -->
## Funciones

Son **bloques de código** con nombre, **reutilizables**.

Pueden recibir (o no) **parámetros**.

```js
function nombreFuncion(primerParametro, segundoParametro) {
  ...
}
```

<!-- slide -->
### Ejemplo I

```js
// Devuelve la suma entre a y b
function sumarDosValores(a, b) {
  return a + b;
}

sumarDosValores(2, 4);
```

<!-- slide -->
### Ejemplo II

```js
// Devuelve el total con solo 2 decimales
function imprimirTotal(total) {
  return total.toFixed(2);
}

imprimirTotal(10.6533);
```

<!-- slide -->
### Ejercicio 18

Definir una función que multiplique 2 valores que serán pasados por parámetro

<!-- slide -->
#### Solución ejercicio 18

```js
function multiplicar(primerValor, segundoValor) {
  return primerValor * segundoValor;
}
```

<!-- slide -->
### Ejercicio Final

En este ejercicio vamos a crear un sistema sencillo para un **Video Club**, utilizando todo lo aprendido hasta ahora: strings, arreglos, funciones, etc...

Vamos a escribir una **función que verifique si las películas que quiere el cliente se encuentran o no en stock**.

1. Debe contar con una lista con las siguientes películas:
'The Avengers', 'Inception', 'The Matrix', 'The Lord of the Rings'
2. El cliente pide 2 películas, una que se encuentra en stock y otra que no.
3. Debe de verificar si la pedida por el cliente se encuentre entre una de ellas.
4. Debe mostrar un mensaje tanto si la película se encuentra en stock como sino.

<!-- slide -->
## Si tenés dudas para resolver el ejercicio...

- Escribinos en el [chat](https://freecodecampba.org)
- Escribinos un mail: freecodecampba@gmail.com
- Preguntanos por [Facebook](https://www.facebook.com/groups/free.code.camp.buenos.aires/), [Twitter](https://twitter.com/freeCodeCampBA), etc

<!-- slide -->
## Si querés ver una solución posible... ¡Pero después de haber intentado!

- [Solución](https://github.com/FreeCodeCampBA/intro-js/blob/master/ejercicioFinal.js)

<!-- slide -->
# Para seguir aprendiendo...

Algunos **recursos gratuitos** recomendados:

### En español
- **[JavaScript para Gatos](https://jsparagatos.com/)**
- **[JavaScript101](https://github.com/javascript-101/javascript-101)**
- **[MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)**
  - En Twitter: [@javascript_101](https://twitter.com/javascript_101)
  - Próximo evento: [Sábado 22/7](https://www.eventbrite.com.ar/e/javascript-101-vol4-tickets-36080812682)
- Vengan a [nuestros Meetups](https://meetup.com/freecodecampba)!

### En inglés
- **[You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/tree/master/up%20%26%20going)**
- **[Eloquent JavaScript](http://eloquentjavascript.net/)**
- **[freeCodeCamp](https://freecodecamp.com)**
- **[MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
