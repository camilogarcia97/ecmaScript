//  Array destructuring
let fruits = ["Apple", "Banana", "kiwi"];
let vegetables = ["carrot", "onion", "tomatoes"];
let [a, b] = fruits;
console.log(a, b);

//  concatenacion de arrays
let groseries = [...fruits, ...vegetables];
console.log(groseries);

//  Object destructuring
let person = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
  },
};
//  forma antigua aunque aun funsiona dependiendo el caso
//console.log(person.name, person.age, person.address.city, person.address.state);

//  forma de aceder a los valores del obj en es6
let {
  name,
  age,
  address: { city, state },
} = person;
console.log(name, age, city, state);

//  spread operator
let email = "john@gmail.com";

// concatenacion de obj y variable
let datosPersonales = { id: 1, ...person, email };
console.log(datosPersonales);

//  concatenacion mixta
let data = { ...person, ...groseries };
//console.log(data);

//  Rest
function sum(num, ...values) {
  console.log(values);
  let result = num + values[0];
  console.log(result);
  return result;
}
sum(1, 1, 2, 3, 4);



