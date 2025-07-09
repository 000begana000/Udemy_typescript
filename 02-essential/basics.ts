let userName: string;
let userAge: number = 38;

userName = "Begana";

function add(a: number, b = 5) {
  return a + b;
}

add(10); // valid, second argument is optional

add(10, 6); // valid
