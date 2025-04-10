// https://www.geeksforgeeks.org/variables-datatypes-javascript/

console.clear();

// DATATYPES
// JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

// 1. Primitive data type
// a. Number: Represents numeric values (integers and decimals).
console.log("a. NUMBER");
let n = 42;
let pi = 3.14;
console.log("a.1: SCIENTIFIC NOTATIONS");
// a.1: SCIENTIFIC NOTATIONS
// JavaScript allows writing extra-large or extra-small numbers using scientific (exponent) notation.
let sciNot1 = 156e5;
let sciNot2 = 156e-5;
console.log(sciNot1);
console.log(sciNot2);
console.log("\n");
// go to 02-2-1Numbers.js for more

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
let sym = Symbol("unique");
console.log(sym);

// g. BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER(which is 2^53 - 1)
// The n at the end of the number in:
let bigNumber = 12345678991234567891234567890n;
// means that the number is a BigInt.
console.log(bigNumber);
// g.1: KEY POINTS
// g.1.1: Adding n creates a BigInt literal.
// g.1.2: You can perform arithmetic like +, -, *, etc. with other BigInts.
// g.1.3: You cannot mix BigInts with regular numbers directly (must convert).
let a = 9007199254740991; // Number.MAX_SAFE_INTEGER
let b = 9007199254740992n; // BigInt (safe!)
console.log(b + 10n); // Works
// console.log(b + 10); //❌ TypeError: Cannot mix BigInt and other types
