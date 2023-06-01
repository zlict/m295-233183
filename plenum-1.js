function sayHello(name) {
  console.log(`Hello ${name}`);
}

const sayHello2 = function (name) {
  console.log(`Hello ${name}`);
}

const sayHello3 = (name) => {
  console.log(`Hello ${name}`);
}

function sayHelloToPeter(sayHelloFunction) {
  sayHelloFunction("Peter");
}

sayHello("Hans");
sayHello2("Hans");
sayHello3("Hans");

sayHelloToPeter(sayHello);

