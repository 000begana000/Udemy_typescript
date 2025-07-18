function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
  console.log(msg);
};

function performJob(callback: (m: string) => void) {
  callback("job done!");
}

performJob(logMsg);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Begana",
  age: 36,
  greet() {
    console.log("Hello, ");
    return this.name;
  },
};
