let number = [2, 4, 7, 8];

//number.includes() -> se usa esta forma para hacer el codigo mas amigable
if(number.includes(9)){
    console.log('si se encuentra el valor 7');
}else {
    console.log('no se encuentra el valor 7');
}

//forma mejorar de como elevar a la potencia
let base = 4;
let exponent = 3;
let result = base ** exponent; //usando el doble asterisco

console.log(result);