// Hoisting in JavaScript

// --- Function Declarations (Fully Hoisted) ---
hello(); // "Hello, World!"

function hello() {
    console.log("Hello, World!");
}

// --- Function Expressions (Not Fully Hoisted) ---
// console.log(greet()); // TypeError: greet is not a function

var greet = function () {
    console.log("Hi!");
};

// --- Variable Hoisting with var ---
console.log(a); // undefined
var a = 5;
console.log(a); // 5

// JavaScript interprets this as:
// var a;
// console.log(a); // undefined
// a = 5;
// console.log(a); // 5

// --- let and const Hoisting (TDZ) ---
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
console.log(c); // 15

// --- Temporal Dead Zone (TDZ) ---
// Attempting to access let/const before declaration results in an error

// --- Function Expressions and Arrow Functions ---
// console.log(foo()); // TypeError: foo is not a function

var foo = function () {
    return "This is a function expression";
};

console.log(foo()); // "This is a function expression"

// --- Best Practices ---
// 1. Use let and const instead of var to avoid hoisting issues
// 2. Declare variables at the top of their scope to prevent TDZ errors
// 3. Use function declarations if you need to call functions before they are defined