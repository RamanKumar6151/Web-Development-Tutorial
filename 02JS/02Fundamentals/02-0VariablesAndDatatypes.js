// https://www.geeksforgeeks.org/variables-datatypes-javascript/

// VARIABLES

console.clear();
// A variable is like a container that holds data that can be reused or updated later in the program. In JavaScript, variables are declared using the keywords
// 1. var,
// 2. let,
// 3. const

// 1. VAR KEYWORD
// The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.
console.log("1. VAR KEYWORD");
var n = 5;
console.log(n);

var n = 20;
console.log(n); // reassigning is allowed
// is updating n allowed?
n = 25;
console.log(n); // yes value can be updated

// globally-scoped: A variable declared outside of any function becomes GLOBAL and can be accessed from anywhere in the code.

// function-scoped: A variable declared inside a function is only accessible within that FUNCTION and not outside.

// 2. LET KEYWORD
console.log("\n2. LET KEYWORD");
// The let keyword is introduced in ES6, has block scope and cannot be re-declared in the same scope.
// let n = 10; // it can also not be used to redeclare a variable creted by VAR keyword
let m = 10;
console.log(m);
m = 15; // value can be updated
console.log(m);
// trying to redeclare m
// let m = 20; // cannot be redeclared

// can i redeclarre m using var? No.
// var m = 20; // cannot be redeclared

// going to 02-1Let.js

// 3. CONST KEYWORD
console.log("\n3. CONST KEYWORD");
// The const keyword declares variables that cannot be reassigned. It’s block-scoped as well.
const a = 100;
// a = 200; //this will throw an error
console.log(a);
// Unlike let, a const variable must be initialized at the time of declaration. Declaring a const variable without assigning a value will throw a SyntaxError.
// const b; // throws error

// const makes the variable binding immutable, but if the value is an object or array, you can still modify its properties or contents.
