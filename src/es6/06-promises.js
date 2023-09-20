const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("success");
    } else {
      reject("error");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));