//______________________________________
var lastNAme = "David";
lastNAme = "Oscar";

console.log(lastNAme);

//______________________________________
let fruit = "Apple";
fruit = "kiwi";

console.log(fruit);

//______________________________________
const animal = "Dog";
animal = "Cat";

console.log(animal);


//______________________________________
const fruits = () => {
if (true) {
    var fruit1 = "Apple";       //function scope
    let fruti2 = "kiwi";        //block scope
    const fruit3 = "Banana";    //block scope    
}
console.log(fruit1);
console.log(fruti2);
console.log(fruit3);
};

fruit();





