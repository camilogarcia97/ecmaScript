function newFunction(name, age, country) {
  var name = "oscar";
  var age = 32;
  var country = "mx";
  console.log(name, age, country);
}

//es6
function newFunction2(name = "oscar", age = 32, country = "mx") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("juan", 25, "mx");

//template
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  "Quiero escribir una frase epica\n" + "otra frase epica que necsitamos.";
console.log(lorem);

let lorem2 = `otra frase epica que necesitamos
            ahora es otra frase epica`;
console.log(lorem2);

let person = {
  name: "camilo",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age);

//forma de aceder a los valores del obj en es6
let { name, age, country } = person;
console.log(name, age, country);
console.log(
  `el nombre de la persona contratada es ${name} y su edad es ${age}`
);

let team1 = ["Oscar", "Juliana", "Ricardo"];
let team2 = ["Juan", "Pedro", "Maria"];

let education = ["David", ...team1, ...team2];
console.log(education);

//var--> para usar las variables de forma global vs let--> para usar la variable en el bloque de codigo donde se encuentra

{
  var globalVar = "Global var msg";
}

{
  let globalLet = "Global let msg";
  console.log(globalLet);
}

console.log(globalVar);

//no deja aceder a la variable globalLet porque no esta en el bloque donde se declaro
console.log(globalLet);

const a = "b";
a = "a"; //no es posible reasignar una constante

//prpiedad de objetos mejorada

let name = "camilo";
let age = 26;

//eS5
obj = { name: name, age: age };
//eS6
obj2 = { name, age };
console.log(obj2);

//Arrow function
const names = [
  { name: "camilo", age: 26 },
  { name: "juan", age: 25 },
];
//eS5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//eS6
let listOfNames2 = names.map((item) => console.log(item.name, item.age));

//promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey");
    } else {
      reject("No");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//clases
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }

  //a esta clase le pueden agregarmucho mas metodos
}

const calc = new Calculator();
console.log(calc.sum(10, 20));

//esta es la forma de importarlo
//porque estoy usando la extension code runner
const hello = require("./module");
console.log(hello());

//generators

function* helloWorld() {
  if (true) {
    yield "Hello";
  }
  if (true) {
    yield "World";
  }
}

const generatorsHello = helloWorld();
console.log(generatorsHello.next().value);
console.log(generatorsHello.next().value);
console.log(generatorsHello.next().value);
