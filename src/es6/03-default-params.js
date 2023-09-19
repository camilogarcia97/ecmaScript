//Forma antigua
function newUser(name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "mx";
    console.log(name, age, country);
  }
  newUser();
  newUser("Laura", 27, "CO");
  

  //Nueva forma, es6
  function newUser2(name = "Daniel", age = 25, country = "CO") {
    console.log(name, age, country);
  }
  newUser2();
  newUser2("juan", 45, "mx");