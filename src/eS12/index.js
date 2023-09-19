const string =
  "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

/*
Método replaceAll
El método replaceAll retorna un nuevo string,
reemplazando todos los elementos por otro.

Este método recibe dos argumentos:

El patrón a reemplazar, puede ser un string o una expresión regular.
El nuevo elemento que sustituye al reemplazado.
Este método fue creado para solucionar el problema que tenía 
el método replace, que realizaba la misma función de reemplazar 
elementos, pero solamente una sola vez.
*/
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

/*_______________________________________________________________
Métodos privados de clases

Por defecto, las propiedades y métodos de una clase en JavaScript 
son públicas, es decir, se puede acceder a ellos fuera de la clase.

Los métodos privados consiste en limitar el acceso a propiedades 
y métodos agregando el caracter numeral (#).
*/

class Message {
  #add = "";

  // Método público para mostrar el mensaje
  showMessage(val) {
    this.#show(val);
  }

  #show(val) {
    console.log(val);
  }

  // Getter para acceder al campo privado #add
  get add() {
    return this.#add;
  }

  // Setter para modificar el campo privado #add
  set add(val) {
    this.#add = val;
  }
}

const message = new Message();

// Llamando al método showMessage para imprimir "Hola"
message.showMessage("Hola");

// Usando el getter para obtener el valor del campo privado #add
console.log(message.add); // Imprimirá "Nuevo Valor"

/*_______________________________________________________________
Promise.any

Promise.any() es otra forma de manejar varias promesas, 
que retornará la primera promesa que sea resuelta y se rechazará 
si todas las promesas son rechazadas.
*/

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

/*
Referencias débiles

Un objeto WeakRef consiste en mantener una referencia débil a 
otro objeto, para evitar que ese objeto sea eliminado por el 
Garbage Collection{target="_blank"}.
*/

class anyClase {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
  // ...
}

/*
Nuevos operadores de asignación

En ES2021 se agregaron tres operadores de asignación:

Asignación AND (&&=), en caso de cumplirse una verdad, 
asigna un valor a una variable.
Asignación OR (||=), en caso de cumplirse una falsedad, 
asigna un valor a una variable.
Asignación Nullish (??=), en caso de cumplirse undefined o null,
 asigna un valor a una variable.
*/

/*
Imagina que tienes una variable y quieres asignarle un nuevo
 valor solo si una condición es verdadera.
 */
{
  let isTrue = true;
  let isFalse = false;
  console.log((isTrue &&= isFalse));

  // Asignación AND
  let saludo = true;
  saludo ??= "Hola";
  console.log(saludo); // "Hola"
}

/*
supongamos que quieres asignar un valor a una variable solo
si esa variable es falsa o no tiene valor (es null o undefined).
*/
{
  let isTrue = true;
  let isFalse = false;
  console.log((isTrue ||= isFalse));

  // Asignación OR
  let saludo = true;
  saludo ||= "Hola";
  console.log(saludo); // true
}

/*
Este operador es similar al anterior, pero solo asignará un valor 
si la variable es null o undefined, no si es falsa en general. 
*/
{
  let isTrue = undefined;
  let isFalse = false;
  console.log((isTrue ??= isFalse));

  // Asignación Nullish
  let saludo = undefined;
  saludo ??= "Hola";
  console.log(saludo); // "Hola"
}
