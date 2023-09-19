//Parametros rest (operador de reposo)
const obj = {
  name: "Camilo",
  age: 25,
  contry: "Colombia",
};

let { name, ...all } = obj;
console.log(name, all);

//Propiedades de propagación
const datosPersonales = {
  name: "Camilo",
  age: 25,
  contry: "Colombia",
};

const datosLaborales = {
  ...datosPersonales, //asi se concatenan dos objetos
  empresa: "Tecbaco",
  cargo: "Desarrollador Software",
  tiempoTrabajando: 1,
};

console.log(datosLaborales);

//Método finally en promesas
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : //resolve('Hello World')
        reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizado"));


//Expresiones regulares
//caracteristicas para trabajar con un regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const moths = match[2]
const day = match[3];

console.log(year, moths, day);