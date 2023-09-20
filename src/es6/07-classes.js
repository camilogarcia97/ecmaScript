//  Declarando
//class user {};

//  Instancia de una clase
//const newUser = new user();

//Ejemplo #1
class user {
  //  contructor -- se ejecuta siempre que se hace una instacia, es donde se declaran e inicilalizan 
  //  las variables de la clase
  constructor(name) {
    this.name = name;
  }

  //  Metodos
  speak() {
    return 'Hello';
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const camilo = new user('Camilo'); //se pasa 'Camilo' a la instansia 
console.log(camilo.greeting());

//const paulina = new user();
//console.log(paulina.greeting());
//const Greissy = new user();

//Ejemplo #2
class  user{
    constructor(name, age){
        this.name = name;
        this.age =age;
    }

    //  Metodos
  speak() {
    return 'Hola';
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    return this.age = n;
  }
}

const laura = new user('Laura', 26); //se pasa 'Camilo' a la instansia 
console.log(`Le damos la bienvenida a nuestra nueva integrante:
${laura.greeting()}, ella tiene ${laura.uAge}`); //usamos laura.uAge haciendo referencia al getter 
//y asi obtenemos el valor de la variable age en consola

laura.uAge = 27; //usamos laura.uAge haciendo referencia al setter 
console.log(`La edad de Laura esta actualizada
${laura.greeting()}, ella tiene ${laura.uAge}`);