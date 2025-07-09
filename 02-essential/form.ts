const inputEl = document.getElementById("user-name"); // htmlElement | null

if (!inputEl) {
  throw new Error("element not found!");
} // handled null

console.log(inputEl.value); // type narrowing to htmlElement

// instead of setting if statement, we can use optional chaining
console.log(inputEl?.value);
