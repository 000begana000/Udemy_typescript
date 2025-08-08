let userName: string;

userName = "Begana";

console.log(userName);

// "noImplicitAny": true, (included to "strict": true)
function add(a: any, b: any) {
  return a + b;
}
