const inputEl = document.getElementById("user-name") as HTMLElement | null;

// if (!inputEl) {
//   throw new Error("element not found!");
// } // handled null

console.log(inputEl?.value);
