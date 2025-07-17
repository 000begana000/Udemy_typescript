function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();
generateError("an error occured");

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

let input = "";
const didProvideInput = input ?? false;
// it checkes if input is null or undefined only, not falsy values
// in this case, it will throw input
