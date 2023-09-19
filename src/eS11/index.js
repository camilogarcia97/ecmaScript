/* 
Qué es la importación dinámica
La importación dinámica consiste en cargar los módulos cuando el 
usuario los vaya a utilizar, y no al iniciar la aplicación. 
Esto permite que la página web sea más rápida, 
porque descarga menos recursos.

La expresión import() permite manejar módulos dinámicamente, 
ya que la sintaxis de ECMAScript import ... from ... no lo permite.

La expresión import() recibe un argumento de tipo string con la ruta 
del módulo a importar y devuelve una promesa.
*/
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});

//Metodo bigint
/*
En qué consiste Big Int
El nuevo dato primitivo bigint permite manejar números enteros 
muy grandes. Existen dos formas de crear un bigint:
 el número entero seguido de n o mediante la función BigInt
*/
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Manejo de varias promesas
/*
Para manejar varias promesas se utiliza Promise.all(), 
que recibe como argumento un array de promesas.
*/

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettle([promise1, promise2, promise3])
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));

/*_________________________________________________________
El operador Nullish Coalescing (??) es un operador 
introducido en JavaScript para manejar valores nulos o 
indefinidos de una manera más precisa y específica. 
Su objetivo principal es proporcionar un valor de respaldo 
o predeterminado solo cuando el valor a la izquierda 
del operador es null o undefined, en lugar de cuando 
el valor es "falsy" en general (como en el caso del operador ||).

Aquí hay un ejemplo que ilustra la diferencia entre el operador
 Nullish Coalescing (??) y el operador OR (||)
 */

const valor1 = null;
const valor2 = "Valor predeterminado";

// Usando Nullish Coalescing (??)
const resultado1 = valor1 ?? valor2;
console.log(resultado1); // Imprimirá "Valor predeterminado" porque valor1 es null

// Usando el operador OR (||)
const resultado2 = valor1 || valor2;
console.log(resultado2); // Imprimirá "Valor predeterminado" porque valor1 es considerado "falsy"

/*_______________________________________________________
Encadenamiento opcional

el operador de encadenamiento opcional (?.)
que se introdujo en JavaScript para manejar 
de manera segura las propiedades anidadas de un objeto,
specialmente cuando algunas de estas propiedades pueden 
ser null o undefined.
*/

const user = {
  profile: {
    email: '<EMAIL@gmail.com>',
  },
};


if (user?.profile?.email) {
  console.log(user?.profile?.email);
  console.log("email encontrado");
} else {
  console.log("no email");
}


