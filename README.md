<!-- slide -->
# Introducción a JavaScript

![Introducción a JS](https://i.imgur.com/v4zxLB7.png)

---

<!-- slide -->
## freeCodeCamp BA ![freeCodeCamp BA logo](https://i.imgur.com/b4MqE3I.png)

- **[freecodecampba.org](https://freecodecampba.org)**  
- **[@freeCodeCampBA](https://twitter.com/freeCodeCampBA)**

<!-- slide -->
## ¿Qué es JavaScript?

Es un lenguaje de programación creado en 1995 por [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich), para darle dinamismo e interacción a los sitios web.

Hoy es un **lenguaje de propósito general**.

<!-- slide -->
## ¿Por qué JavaScript?

Es el lenguaje que entienden y ejecutan los navegadores (browsers).  

Desde hace algunos años, podemos ejecutar código JavaScript fuera del browser, con **NodeJS**.

<!-- slide -->
## Variables

Es una caja para guardar **valores**, de diferentes tipos. Esta caja tiene una etiqueta, el **nombre** de la variable.

![variable](https://farm5.static.flickr.com/4051/4313722503_f6289e9b55_o.jpg)

Son **reutilizables**: una vez creadas, podemos usarlas todas las veces que querramos.

Se pueden **reasignar**: cambiamos su valor. Por esto se llaman variables.

<!-- slide -->
### Declarar una variable

Declarar es **crear una nueva variable**.

Usamos la palabra `var` para crear nuevas variables.

```javascript
var nombreDeLaVariable;
```

**Nota**: las sentencias en JS terminan con `;`

<!-- slide -->
## Importante: probá el código en tu consola!

![Chrome's console](https://developers.google.com/web/tools/chrome-devtools/console/images/console-panel.png)

<!-- slide -->
#### Ejercicio 1

Declarar la variable `nombre`

<!-- slide -->
#### Solución ejercicio 1

```javascript
var nombre;
```

<!-- slide -->
### Inicializar una variable

Inicializar una variable consiste en crearla (declararla) y asignarle un valor inicial.

```javascript
var nombreDeLaVariable = 3;
```

<!-- slide -->
#### Ejercicio 2

Declarar la variable `nombre` e inicializarla con tu nombre, escrito entre comillas.

<!-- slide -->
#### Solución ejercicio 2

```javascript
var nombre = 'Tu Nombre';
```

<!-- slide -->
### Reasignar una variable

¿Te acordás que las variables se podían reasignar?

Una vez que creamos una variable y la inicializamos, ya podemos empezar a usarla.

También podemos cambiar su valor, es decir, reasignarla.

```javascript
var nombreDeLaVariable = 3;
nombreDeLaVariable = 7;
```

<!-- slide -->
#### Ejercicio 3

Reasignar la variable `nombre` que creamos

<!-- slide -->
#### Solución ejercicio 3

```javascript
var nombre = 'freeCodeCamp';
```

<!-- slide -->
### Operar con variables

```javascript
var a = 3;
a + 2; // 3 + 2
```

<!-- slide -->
#### Ejercicio 4

Crear la variable `unNumero`, inicializarla con el valor 1. En otra instrucción, sumarle 3 a la misma variable

<!-- slide -->
#### Solución ejercicio 4

```javascript
var unNumero = 1;
unNumero + 3;
```

<!-- slide -->
## Cómo nombrar variables

- Usar **nombres significativos**, que representen el contenido
- El nombre puede empezar con cualquier letra, $ ó _
- Hay distinción entre mayúsculas y minúsculas (**case sensitive**)
- Por convención se utiliza **camelCase**

<!-- slide -->
## Constantes

Espacios con nombre para guardar **valores** (cajas con etiquetas, como las variables) que no varían.

Son **reutilizables**, pero **no se pueden reasignar**.

```javascript
const x = 1;
```

<!-- slide -->
### Si reasignamos una constante, obtenemos un error

```javascript
const saludo = 'Hola!';
saludo = 'Hola Mundo!';
// => Uncaught TypeError: Assignment to constant variable
```

<!-- slide -->
## Imprimir texto en la consola

Podemos mostrar valores en la **consola** de JavaScript, de cualquier tipo.

La consola forma parte de las *DevTools* del browser que estás usando ahora!

```javascript
console.log('Hola Mundo!');
console.log(nombreDeLaVariable);
```

<!-- slide -->
#### Ejercicio 5

Mostrá por consola el valor de la variable `nombre`

<!-- slide -->
#### Solución ejercicio 5

```javascript
console.log(nombre);
```

<!-- slide -->
## Tipos de datos

Hay valores de diferentes tipos: texto, números, booleanos, etc.

### Tipos principales en JS

- `String`
- `Number`
- `Boolean`

<!-- slide -->
## String

Representan **cadenas de caracteres** (texto).

Se escriben entre comillas simples ó dobles, **sin mezclar**.

```javascript
'JavaScript' // OK ✔
"JavaScript" // OK ✔
'JavaScript" ✗
```

Cualquier valor entre comillas es un `String`

```javascript
'43' // Esto también es un String
```

<!-- slide -->
#### Ejercicio 6

Mostrá por consola el valor de la variable `nombre`

<!-- slide -->
#### Solución ejercicio 6

```javascript
console.log(nombre);
```

<!-- slide -->
### Operaciones con Strings

#### Longitud de la cadena

```javascript
var titulo = "You Don't Know JavaScript";
titulo.length;  // 25
```

```javascript
'titulo'.length;  // 5
```

<!-- slide -->
### Operaciones con Strings

#### Concatenación

Se usa para combinar diferentes cadenas de caracteres.

```javascript
var lenguaje = 'JavaScript';
var año = 1995;
var unaFrase = lenguaje + ' apareció en ' + año;
```

<!-- slide -->
## Number

Números enteros ó de punto flotante, JS no los diferencia.

```javascript
var unEntero = 27;
```

```javascript
var unNumeroDePuntoFlotante = 2.5;
```

```javascript
var unEnteroNegativo = -10;
```

<!-- slide -->
### Operaciones con Number

#### Suma: `x + y`

```javascript
10 + 91;  // 101
1 + Math.PI;  // 4.141592653589793
```

#### Resta: `x - y`

```javascript
27 - 4  // 23
3 - 5  // -2
3 - 1.5  // 1.5
```

<!-- slide -->
### Operaciones con Number

#### Multiplicación: `x * y`

```javascript
7 * 3  // 21
4 * 12.5  // 50
```

#### División: `x / y`

```javascript
1 / 2  // 0.5
8 / 2  // 4
1.0 / 3.0  // 0.3333333333333333
```

<!-- slide -->
#### Incremento
Son equivalentes: `x = x + 1`, `x += 1`, `++x`, `x++`

```javascript
var x = 5;
x += 1;  // 6;
```

#### Decremento
Son equivalentes: `x = x - 1`, `x -= 1`, `--x`, `x--`

```javascript
var x = 5;
x -= 1;  // 4;
```

<!-- slide -->
#### Módulo: `x % y`

Es el resto de dividir `x` por `y`.

```javascript
10 % 2  // 0
11 % 2  // 11
x % 2 === 0  // siempre que x sea par
y % 2 === 1  // siempre que y sea impar
```

<!-- slide -->
## Boolean

Tiene 2 valores posibles: **true** y **false**, para indicar si algo es verdadero o falso.

```javascript
2 > 1  // true
1 > 2  // false
'hola' === 'Hola'  // false
```

**Nota:** al comparar valores, usar siempre `===`

<!-- slide -->
### Expresión booleana

Es cualquier expresión que pueda evaluarse como verdadera ó falsa y por lo tanto, reducirse a `true` ó `false`.

<!-- slide -->
## Operadores de comparación

### Igualdad `==`

Compara **sólo el valor**

```javascript
1 == 1  // true
1 == '1'  // true
```

<!-- slide -->
### Igualdad estricta `===`

Compara el **valor y tipo del mismo**

```javascript
1 === 1  // true
1 === '1'  // false
```

<!-- slide -->

Son análogos a la igualdad.

### Desigualdad `!=`

```javascript
23 != '23'  // false
```

### Desigualdad estricta `!==`

```javascript
23 !== '23'  // true
```

<!-- slide -->
### Otros operadores de comparación

#### Menor `<`

```javascript
1 < 2  // true
```

También podemos comparar caracteres, según su orden en la tabla ASCII.

```javascript
'a' < 'b'  // true
```

#### Mayor `>`

```javascript
77.5 > 80  // false
```

<!-- slide -->
#### Menor ó igual `<=`

```javascript
10 <= 10  // true
```

#### Mayor ó igual `>=`

```javascript
31 >= 33  // false
```

<!-- slide -->
## Operadores lógicos

Se utilizan para evaluar **valores y expresiones booleanas**.
Retornan un valor booleano.

<!-- slide -->
### AND `&&`

Retorna `true` **si y sólo si todas las expresiones evaluadas son verdaderas**. Caso contrario, retorna `false`.

```javascript
true && true  // true
```

<!-- slide -->
### OR `||`

Retorna `true` si **al menos una de las expresiones es verdadera**; sino, retorna `false`.

```javascript
true || true  // true
```

```javascript
true || false  // true
```

```javascript
false || false  // false
```

<!-- slide -->
### NOT `!`

**Negación**. Retorna `false` si la expresión es verdadera; sino, retorna `true`.

```javascript
// En este caso poner !(true) o bien !true es lo mismo
!(true)  // false
```

```javascript
!(2 > 1)  // false
```

```javascript
!(expresión booleana verdadera)  // false
```

<!-- slide -->
### Ejercicio

¿Cuál es el resultado final, `true` ó `false`?

```javascript
var x = 10;
var y = 'a';

y === 'b' || x >= 10
```

<!-- slide -->
### Ejercicio

¿Cuál es el resultado final, `true` ó `false`?

```javascript
var x = 3;
var y = 8;

!(x == '3' || x === y) && !(y != 8 && x <= y)
```

<!-- slide -->
## Undefined

Indica que la variable **no tiene valor definido**. Por ejemplo, si le asignamos el valor `undefined` explícitamente o sólo la declaramos, sin inicializarla.

```javascript
var conValorIndefinido = undefined;
```

```javascript
var variableSoloDeclarada;  // undefined
```

<!-- slide -->
## Comentarios

### 1 sola línea

```javascript
// Esto es un comentario simple
```

### Multilínea

```javascript
/*
  Los que se enamoran de la práctica sin la teoría
  son como los pilotos sin timón ni brújula,
  que nunca podrán saber a dónde van

  Leonardo Da Vinci
*/
```

<!-- slide -->
## Arrays

Un `array` es una **colección ordenada de valores heterogéneos (de cualquier tipo)**.

```javascript
var unArregloVacio = [];
```

```javascript
var unArregloDeNumeros = [1, 2, 3];
```

```javascript
var unArregloDeCosas = [3.7, 2, 'JavaScript', [48, 7]];
```

<!-- slide -->
### Para acceder a un elemento usamos índices

Primer elemento: `[0]`

```javascript
unArregloDeNumeros[0];  // 1
```

Último elemento: `[longitud del arreglo - 1]`

```javascript
var ultimaPosicion = unArregloDeNumeros.length - 1;
unArregloDeNumeros[ultimaPosicion];  // 3
```

**Nota:** los índices de los arrays empiezan en 0.


<!-- slide -->
### Modificar un `Array`

#### Reasignar valores

```javascript
var unArregloDeNumeros = [19, 8, 3];
unArregloDeNumeros[1] = 7.5;  // [19, 7.5, 3];
```

#### Agregar al final

```javascript
unArregloDeNumeros.push('FCC');  // [19, 7.5, 3, 'FCC'];
```

#### Sacar el último elemento

```javascript
unArregloDeNumeros.pop();  // 'FCC';
```

<!-- slide -->
### Nota: Strings e índices

También **podemos acceder a los caracteres de un `String`** usando índices (como si fuera un `Array` de caracteres), pero **no podemos modificarlo** (los `Strings` en JavaScript son *inmutables*).

Si quisiéramos hacerlo, tendríamos que convertirlo primero a `Array`, operar y luego pasarlo a `String` nuevamente.

```javascript
var unString = 'Puedo acceder a los caracteres de este texto, pero no modificarlo';
```

#### Acceder a un caracter de un `String`

```javascript
console.log(unString[2]);  // e
```

<!-- slide -->
### Convierto el `String` a `Array`

```javascript
console.log(unString.split(' '));
// ['Puedo', 'acceder', 'a', 'los', 'caracteres', 'de', 'este', 'texto,', 'pero', 'no', 'modificarlo'];
```

<!-- slide -->
## Condicionales

Nos permiten decidir **qué camino seguir**, según las condiciones que evaluemos.

```javascript
if (condición booleana) {
  // se ejecuta si la condición es verdadera
} else {
  // se ejecuta si la condición es falsa
}
```

<!-- slide -->
### Ejemplo

```javascript
var edad = 16;
/*
solo las personas que sean mayores a 18 años
pueden entrar al boliche
*/
if (edad > 18) {
  console.log('Puede entrar al boliche');
} else {
  console.log('No puede entrar al boliche');
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

**Todos los valores que no se encuentren en la lista anterior** (falsy values), son *verdaderos*.

<!-- slide -->
### Conversión automática en condicionales

```javascript
var paquetesGalletitas = 0;

// en este caso nuestra variable se evaluará por verdadero o falso
if (paquetesGalletitas) {
  console.log('Todavía hay galletitas');
} else {
  console.log('Hay que ir a comprar Oreos');
}
```

<!-- slide -->
## Ciclos

Nos permiten iterar sobre diferentes **colecciones de valores**, como arreglos u objetos.

También iterar hasta que ciertas **condiciones se cumplan o no**.

<!-- slide -->
### While

Se ejecuta hasta que la **condición booleana sea falsa**.

```javascript
var i = 0;

while (i < 5) {
  console.log('Iteración N° ' + i);
  i++;
} // Iteración N° 0 hasta Iteración N° 4
```

<!-- slide -->
### Do... While

**Se ejecuta siempre al menos una vez**, independientemente de que la condición booleana sea verdadera.

```javascript
var i = 0;

do {
  console.log('Iteración N° ' + i);
  i++;
} while (i < 5);
```

<!-- slide -->
### For

Se ejecuta hasta que la **condición booleana sea falsa** y consiste en tres expresiones **opcionales**

```javascript
for (expresión inicial; condición; expresión final) {
  ...
};
```

* `expresión inicial:` declaramos una variable como contador
* `condición:` expresión evaluada antes de cada iteración
* `expresión final:` expresión evaluada al final de cada iteración

<!-- slide -->
#### Ejemplo I

```javascript
for (var i = 0; i < 10; i++) {
  console.log('Iteración N° ' + i);
}
```

<!-- slide -->
#### Ejemplo II

```javascript
var animales = ['Perro', 'Gato', 'Tortuga'];

// Recorremos el array animales y mostramos cada uno
for (var i = 0; i < animales.length; i++) {
  console.log('Las mascotas disponibles son: ' + animales[i]);
}
```

<!-- slide -->
## Funciones

Son **bloques de código** con nombre, **reutilizables**.
Pueden recibir (o no) **parámetros**.

```javascript
function nombreFuncion(primerParametro, segundoParametro) {
  ...
}
```

<!-- slide -->
### Ejemplo I

```javascript
// devuelve la suma entre a y b
function sumarDosValores(a, b) {
  return a + b;
}

sumarDosValores(2, 4);
```

<!-- slide -->
### Ejemplo II

```javascript
// devuelve el total con solo 2 decimales
function imprimirTotal(total) {
  return total.toFixed(2);
}

imprimirTotal(10.6533);
```

<!-- slide -->
# Para seguir aprendiendo...

Algunos **recursos gratuitos** recomendados

- **[JavaScript para Gatos](https://jsparagatos.com/)**
- **[You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/tree/master/up%20%26%20going)**
- **[Eloquent JavaScript](http://eloquentjavascript.net/)**
- **[freeCodeCamp](https://freecodecamp.com)**
- Documentación: **[MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
