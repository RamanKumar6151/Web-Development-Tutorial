// https://www.geeksforgeeks.org/variables-datatypes-javascript/

console.clear();

// DATATYPES
// JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

// 1. Primitive data type
// a. Number: Represents numeric values (integers and decimals).
let n = 42;
let pi = 3.14;

// b. string: Represents text enclosed in single or double quotes.
let s = "Hello world";

// c. boolean: Represents a logical value (true or false).
let bool = true;

// d. undefined: A variable that has been declared but not assigned a value
let notAssigned;
console.log(notAssigned);

// e. Null: intentional absence of any value
let empty = null;

// f. symbol: Represents unique and immutable values, often used as object keys.
let sym = symbol("unique");
console.log(sym);
