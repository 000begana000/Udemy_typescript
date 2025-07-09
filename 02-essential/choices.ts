// only allows certain kind of options
// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// alias type aka custom type
type Role = "admin" | "editor" | "guest" | "reader";
type User = {
  name: string;
  age: number;
  role: Role;
  permission: string[];
};

// only allows very specific value 'admin'
let userRole: Role = "guest";

// ...

userRole = "admin";

let possibleResultLiteral: [1 | -1, 1 | -1]; // [1, -1]

possibleResultLiteral = [1, -1];
// possibleResults = [5, 10, 12];

function access(role: Role) {
  //...
}
