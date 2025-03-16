// Call Stack in JavaScript
// The Call Stack is a LIFO (Last In, First Out) data structure used by JavaScript to manage function execution.

// Example 1: Simple Call Stack Execution
function firstFunction() {
  console.log("First Function");
}

function secondFunction() {
  console.log("Second Function");
  firstFunction();
}

secondFunction();

// Expected Output:
// Second Function
// First Function

// Call Stack Execution:
// 1. secondFunction() is called → Pushed onto the stack.
// 2. "Second Function" is printed.
// 3. firstFunction() is called inside secondFunction() → Pushed onto the stack.
// 4. "First Function" is printed.
// 5. firstFunction() completes → Popped off the stack.
// 6. secondFunction() completes → Popped off the stack.

// Example 2: Nested Function Calls
function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
  third();
}

function third() {
  console.log("Third");
}

first();

// Expected Output:
// First
// Second
// Third

// Call Stack Execution:
// 1. first() is called → Pushed onto the stack.
// 2. "First" is printed.
// 3. second() is called inside first() → Pushed onto the stack.
// 4. "Second" is printed.
// 5. third() is called inside second() → Pushed onto the stack.
// 6. "Third" is printed.
// 7. third() completes → Popped off the stack.
// 8. second() completes → Popped off the stack.
// 9. first() completes → Popped off the stack.

// Call Stack with Errors (Stack Overflow)
function recursive() {
  recursive();
}

// recursive(); // Uncommenting this will cause a stack overflow error

// Expected Behavior:
// - recursive() keeps calling itself infinitely.
// - The Call Stack keeps growing but never pops anything off.
// - Eventually, JavaScript throws a "Maximum call stack size exceeded" error.

// Call Stack with Asynchronous Code
console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");

// Expected Output:
// Start
// End
// (After 2 seconds)
// Inside Timeout

// Call Stack Execution:
// 1. "Start" is printed.
// 2. setTimeout() is called → Sent to Web API (not added to the stack).
// 3. "End" is printed.
// 4. After 2 seconds, the callback (console.log("Inside Timeout")) is moved to the Callback Queue.
// 5. The Event Loop checks if the stack is empty and moves the callback to the Call Stack.
// 6. "Inside Timeout" is printed.

// Global Execution Context (GEC) in JavaScript
// The Global Execution Context (GEC) is the default execution context created when a JavaScript program starts.
// It consists of two main phases:
// 1. Creation Phase (Memory Allocation)
// 2. Execution Phase (Code Execution)

console.log(x); // undefined
console.log(foo); // Function definition

var x = 10;
function foo() {
  console.log("Hello");
}

// Memory Allocation in Creation Phase:
// Name      | Value
// --------------------
// x        | undefined
// foo      | Function definition
// this     | window (in browsers)

// Execution Phase:
// 1. console.log(x); → undefined (since x is declared but not yet assigned).
// 2. console.log(foo); → Prints function definition (since functions are hoisted).
// 3. x = 10; → Assigns 10 to x.
// 4. Function foo() is available to be called.

// Function Execution Context (FEC)
var x = 10;

function foo() {
  var y = 20;
  console.log(x + y);
}

foo(); // Expected Output: 30

// Execution Context Stack (Call Stack):
// 1. GEC is created.
// 2. foo() is called → New Function Execution Context (FEC) is created.
// 3. foo() completes → FEC is popped off the Call Stack.
// 4. Only GEC remains until program ends.

// The window Object in Global Execution Context
var a = 100;
console.log(window.a); // 100
console.log(this.a);   // 100

// this in the global scope refers to window in browsers.
