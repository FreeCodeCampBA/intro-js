<!-- slide -->
# Introducción a JavaScript

<!-- slide -->
## freeCodeCamp BA

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
## Sentencia

Conjunto de caracteres y símbolos que representan una **instrucción**.  
Es **código ejecutable**.

```javascript
a = b * 2;
```

Las sentencias terminan con `;`

<!-- slide -->
# Importante: prueben el código en su consola

<!-- slide -->
## Variables

Espacios con nombre para guardar valores.

Son **reutilizables** y se pueden reasignar.

<!-- slide -->
### Declarar una variable

```javascript
var a;
```

<!-- slide -->
### Inicializar una variable

```javascript
var a = 3;
```

<!-- slide -->
### Reasignar una variable

```javascript
var a = 3;
a = 7;
```

<!-- slide -->
### Operar con variables

```javascript
a + 2; // 3 + 2
```

<!-- slide -->
## Cómo nombrar variables

- Usar **nombres significativos**, que representen el contenido
- El nombre puede empezar con cualquier letra, $ ó _
- Hay distinción entre mayúsculas y minúsculas (**case sensitive**)
- Por convención se utiliza **camelCase**

<!-- slide -->
## Constantes

Espacios con nombre para guardar **valores que no varían**.

Son **reutilizables**, pero **no se pueden reasignar**.

```javascript
Math.PI  // 3.141592653589793;
```

<!-- slide -->
### Si reasignamos una constante, obtenemos un error

```javascript
const saludo = 'Hola!';
saludo = 'Hola Mundo!';  // TypeError
```

<!-- slide -->
## Imprimir texto en la consola

```javascript
console.log(nombreDeLaVariable);
```

<!-- slide -->
## Tipos

JavaScript tiene **tipado dinámico** y **débil**: las variables se declaran sin un tipo de dato explícito, pueden modificarse, compararse y operar sin necesidad de ser convertidas previamente.  

Los **valores sí tienen tipos**.

<!-- slide -->
### Tipos principales en JS

- `String`
- `Number`
- `Boolean`

<!-- slide -->
## String

Representan **cadenas de caracteres** (texto).

Se escriben entre comillas simples ó dobles, **sin mezclar**.

```javascript
'JavaScript' ✔
"JavaScript" ✔
'JavaScript" ✗
```

<!-- slide -->
### Operaciones con Strings

#### Longitud

```javascript
var texto = 'You Don\'t Know JavaScript';
texto.length;  // 25
```

```javascript
'texto'.length;  // 5
```

<!-- slide -->
### Operaciones con Strings

#### Concatenación

Se usa para unir diferentes cadenas de caracteres.

```javascript
var lenguaje = 'JavaScript';
var anio = 1995;
var unaFrase = lenguaje + ' apareció en ' + anio;
```

<!-- slide -->
## Number

Números enteros ó de punto flotante.

```javascript
var unEntero = 27;
```

```javascript
var unNumeroDePuntoFlotante = 2.5;
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
## Otros tipos de datos

Hay 2 tipos de datos especiales que también se usan frecuentemente en JavaScript: **null** y **undefined**.

<!-- slide -->
## Null

Indica explícitamente que la variable **no tiene valor**.

```javascript
var estoEsNulo = null;
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
## Coerción

Podemos convertir los datos a otros tipos de forma *explícita* o *implícita*.  

Esto último se conoce como **coerción de tipos**.

<!-- slide -->
### Conversión explícita

```javascript
var unNumero = 5;
var unCaracter = String(unNumero);
```

<!-- slide -->
### Conversión implícita (coerción)

```javascript
var unNumero = 5;
/*
en este caso, el operador + está concatenando Strings,
luego de convertir el tipo de unNumero
*/
var unCaracter = unNumero + '';
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
## Comparar valores

### Igualdad

Compara sólo el valor

```javascript
1 == 1  // true
1 == '1'  // true
```
### Igualdad estricta

Compara el valor y tipo

```javascript
1 === 1  // true
1 === '1'  // false
```

<!-- slide -->
### Desigualdad

```javascript
23 != '23'  // false
```

### Desigualdad estricta

```javascript
23 !== '23'  // true
```

<!-- slide -->
### Otras comparaciones

`<`, `>`, `<=`, `>=`

<!-- slide -->
## Arrays

Un array es una **colección ordenada de valores heterogéneos (de cualquier tipo)**.

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
### Modificar un Array

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
## Objetos

Son **colecciones no ordenadas de pares clave-valor**.

Contienen **propiedades**, que pueden ser valores de cualquier tipo, arrays, funciones o incluso otros objetos.

<!-- slide -->
### Creando un objeto

```javascript
var unLibro = {
  titulo: 'Como agua para chocolate',
  autor: 'Laura Esquivel',
  paginas: 256
};
```

<!-- slide -->
### Podemos acceder a los atributos por el nombre

```javascript
unLibro.titulo;  // 'Como agua para chocolate'
unLibro.autor;  // 'Laura Esquivel'
unLibro.paginas;  // 256
```

<!-- slide -->
### Podemos redefinir los atributos

```javascript
unLibro.titulo = 'Como JavaScript para chocolate';
```

### Y crear atributos nuevos

```javascript
unLibro.fechaDePublicacion = '11 de Mayo de 1989';
```

<!-- slide -->
### Condicionales

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
### Valores Falsos (falsy values)

Toda esta lista de valores son falsos, y los que no se encuentren en la misma son verdaderos.

- `false`
- `null`
- `undefined`
- `''`
- `0`
- `NaN`

<!-- slide -->
### Null

Indica explícitamente que la variable no tiene valor.
```javascript
var sinValor = null;
```
<!-- slide -->
### Undefined

Indica que la variable no tiene valor definido, o bien porque le fue asignado o bien porque sólo fue declarada.
```javascript
var conValorIndefinido = undefined;

var variableSoloDeclarada;  // undefined
```

<!-- slide -->
### NaN

Representa el resultado de un cálculo matemático que no puede ser representado por un número significativo.
```javascript
var dividirPorString = 24 / "Hola"; // NaN
```

<!-- slide -->
### Conversión automática en Condicionales

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
### Ciclos

Nos permiten iterar sobre diferentes **colecciones de valores**, como arreglos u objetos.
Como también iterar hasta que ciertas **condiciones se cumplan o no**.

<!-- slide -->
### While

Se ejecuta hasta que la **condición booleana sea falsa**.

```javascript
var i = 0;

while (i < 5) {
  console.log('Iteración N° ' + i);
  i++;
}
```

<!-- slide -->
### Do While

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
### Ejemplo I

```javascript
for (var i = 0; i < 10; i++) {
  console.log('Iteración N° ' + i);
}
```

<!-- slide -->
### Ejemplo II

```javascript
var animales = ['Perro', 'Gato', 'Tortuga'];

// Recorremos el array animales y mostramos cada uno
for (var i = 0; i < animales.length; i++) {
  console.log('Las mascotas disponibles son: ' + animales[i]);
}
```

<!-- slide -->
### Funciones
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
### Callbacks
Los callbacks **no son una característica** de JavaScript.
Son una **manera de usar las funciones**.

<!-- slide -->
### Código Sincrónico
Si queremos ejecutar `enviarMensaje()` debemos de esperar a que las instrucciones anteriores finalicen su operación.
Es decir que hasta no se termine de ejecutar `descargarFoto()` no podremos ejecutar nada más.
```javascript
var foto = descargarFoto('https://google.com/logo.png');
subirFotoTwitter(foto);
enviarMensajeTwitter('Hey! Cuando nos juntamos?', '@leogln_');
```

<!-- slide -->
### Código Asincrónico
Ahora podremos ejecutar `enviarMensajeTwitter()` mientras se descarga la foto, y que la suba a Twitter cuando esta finalice de descargar.
```javascript
descargarFoto('https://google.com/logo.png',
 function finalizoDescarga(error, png) {
  if (error) {
    console.log('error: ', error);
  } else {
    subirFotoTwitter(png);
  }
});

enviarMensajeTwitter('Hey! Cuando nos juntamos?', '@leogln_')
```

<!-- slide -->
### Scope
Es el **ámbito o alcance de una variable**, donde esta 'vive' y desde donde puede ser accedida y modificada.

<!-- slide -->
### Según la declaración
- `var` el scope está ligada a una función

- `let y const` tienen alcance dentro de un bloque de código

<!-- slide -->
### Warnings!
En JavaScript podemos declarar variables sin usar var, let o const, **¡pero el scope pasa a ser global!**


Esto significa que la variable puede ser accedida y modificada **desde cualquier parte de nuestro código**.

<!-- slide -->
### Ejemplo I
```JavaScript
var saludo = 'Bienvenidos! al evento';

function saludar() {
  console.log(saludo);
}

saludar(); // Bienvenidos! al evento

console.log(saludo); // Bienvenidos! al evento
```

<!-- slide -->
### Ejemplo II
```JavaScript
function saludar() {
  var saludo = 'Bienvenidos! al evento';
  console.log(saludo);
}

saludar(); // Bienvenidos! al evento

console.log(saludo); // ReferenceError: saludo is not defined
```

<!-- slide -->
### Ejemplo III
```JavaScript
var animales = ['Perro', 'Gato', 'Tortuga'];

for (var i = 0; i < animales.length; i++) {
  console.log('Las mascotas disponibles son: ' + animales[i]);
}

console.log(i); // 3
```
<!-- slide -->
### Ejemplo IV
```JavaScript
const animales = ['Perro', 'Gato', 'Tortuga'];

// Recorremos el array animales y mostramos cada uno
for (let i = 0; i < animales.length; i++) {
  console.log('Las mascotas disponibles son: ' + animales[i]);
}

console.log(i); // ReferenceError: i is not defined
```