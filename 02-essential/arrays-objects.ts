let hobbies = ["Sports", "Cooking"];

// hobbies.push(10); // invalid

// let users: (string | number)[];
let users: Array<string | number>; // generic type

users = [1, "begana"];
users = [1, 5];
users = ["begana", "su"];

// tuples type
let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

// object type definition
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Begana",
  age: 36,
  hobbies: ["Sports", "Reding"],
  role: {
    description: "admin",
    id: 5,
  },
};

// "must not be null" type
let val: {} = "some text"; // should not undefined or null

const someObj = {}; // value is an empty object

// record type
let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry: "string",
};
