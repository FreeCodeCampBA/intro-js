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
Math.PI // 3.141592653589793;
```

<!-- slide -->
### Si reasignamos una constante, obtenemos un error

```javascript
const saludo = 'Hola!';
saludo = 'Hola Mundo!'; // TypeError
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
## Coerción

Podemos convertir los datos a otros tipos de forma explícita o implícita. Esto último se conoce como **coerción de tipos**.

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
