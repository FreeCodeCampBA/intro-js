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
