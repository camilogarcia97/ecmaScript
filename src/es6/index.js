//
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
{
  let name = "camilo";
  let age = 26;

  //eS5
  obj = { name: name, age: age };
  console.log(obj);
  //eS6
  obj2 = { name, age };
  console.log(obj2);
}

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



