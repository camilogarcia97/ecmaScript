/* los objetos de tipo SET no dejan tener objestos repetidos */

const list = new Set();

list.add(1);
list.add(2).add(3);
list.add(4);

console.log(list);