//template literas

//forma antigua
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//nueva forma, eS6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multi-line strings
//forma antigua para hacer salto de linea y concatenacion
let lorem =
  "Quiero escribir una frase epica\n" + "otra frase epica que necsitamos.";
console.log(lorem);

//nueva froma, eS6
let lorem2 = `otra frase epica que necesitamos,
ahora es otra frase epica`;
console.log(lorem2);