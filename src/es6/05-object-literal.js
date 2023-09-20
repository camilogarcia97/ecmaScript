//  enahced object literals

// Forma antigua
function newUser(user, age, country) {
  return {
    user: user,
    age: age,
    country: country,
  };
}

// Forma nueva eS6
function newUser2(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser2("camilo", 26, "Colombia", 1));
