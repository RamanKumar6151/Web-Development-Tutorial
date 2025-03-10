// https://www.geeksforgeeks.org/javascript-let/

console.clear();

// JAVASCRIPT LET
// The let keyword is a modern way to declare variables in JavaScript and was introduced in ECMAScript 6 (ES6). Unlike var, let provides block-level scoping. This behaviour helps developers avoid unintended issues caused by variable hoisting and scope leakage that are common with var.
// The let keyword allows you to declare a variable, assign a value to it, and later modify its value within the defined scope.

// syntax
// let variable_name= value;

// KEY FEATURES OF LET
// 1. BLOCK SCOPE: Variables declared with let are block-scoped, meaning they are only accessible within the block, statement, or expression where they are defined. This is a significant improvement over var, which has function scope and can lead to unexpected behaviour.
// if (true) {
//   let x = 10;
//   console.log(x);
// }
// console.log(x); //  reference error x is not defined
// Here, x is accessible only within the if block, leading to a ReferenceError when accessed outside of it.

x = 1; // declaring and initialising a variable at same time, here comes next feature of let
// 2. No Hoisting Issues: While variables declared with let are hoisted, they are not initialized. This creates a temporal dead zone (TDZ) where accessing the variable before its declaration results in a ReferenceError, helping prevent unintended access.
console.log(x);
let y;
console.log(y); // cannot access y before initialization

// 3. No Redeclaration: A major benefit of let is that it does not allow redeclaration of the same variable in the same scope. This prevents accidental overwrites of variables, reducing bugs and improving code readability.

// 4. Suitable for Loops: Using let in loops is particularly beneficial because the variable declared with let is scoped to the loop block, and each iteration gets a new instance of the variable.
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// more on block scoping: https://www.geeksforgeeks.org/javascript-es2015-block-scoping/

// back to 02-0VariablesAndDatatypes.js
