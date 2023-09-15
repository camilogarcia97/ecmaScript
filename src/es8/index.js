const data = {
  frontend: "oscar",
  backend: "maria",
  design: "daniel",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Ejmeplo numero 2
const data2 = {
    frontend: "luis",
    backend: "sofia",
    design: "nicol", //se puede poner coma hasta el ultimo elemento, anteriormente mostraba un error de sintaxis
  };

  const values = Object.values(data2);
  console.log(values); //tranforma un objeto de array y solo muestra el valor
  console.log(values.length);


  //Ejemplo numero 3
  const string = 'hello';
  console.log(string.padStart(7, 'hi'));
  console.log(string.padEnd(10, 'world'));
  console.log('food'.padEnd(14, ' delicious'));



