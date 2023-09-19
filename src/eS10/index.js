/*
Qué es el aplanamiento de arrays?
El aplanamiento consiste en transformar un array de arrays a uno de una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.

Método flat
El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

Este método recibe un argumento:

La profundidad del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.
*/

let array = [1, 2, 3, [1, 2, 3, [5, 6]]];
console.log(array.flat());
console.log(array.flat(2));

let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));

/*
Método flatMapEliminar espacios en blanco de un string
Existen tres métodos para eliminar espacios en blanco de un string:

El método trim elimina los espacios en blanco al inicio y al final.
El método trimStart o trimLeft elimina los espacios al inicio.
El método trimEnd o trimRight elimina los espacios al final.
*/
let hello = "hellor world   ";
console.log(hello);
console.log(hello.trim());

/*
Parámetro opcional de catch
El parámetro opcional de catch permite omitir el error si es necesario, para que esté obligatorio.
*/

let entries = [["name", "Camilo"], ["age", 26], ["pais", "Colombia"]];

console.log(Object.fromEntries(entries)); //contrtio a Object.entries()


//Symbl
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);

