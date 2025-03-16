// ============================ JavaScript: How It Works ============================
// JavaScript processes code in three main phases: Parsing, Compilation, and Execution.
// Think of it as a chef reading a recipe, preparing ingredients, and then cooking.
// ================================================================================

// --------------------------------------------------------------------------------
// 1. Parsing (Understanding the Code)
// --------------------------------------------------------------------------------

// 1.1 Lexical Analysis (Breaking into Words)
// JavaScript reads the code and breaks it into tokens.
// Example:
let age = 25;
// Tokens: 'let', 'age', '=', '25', ';'

// 1.2 Syntax Analysis (Making Sense of It)
// JavaScript checks if the tokens form valid syntax and builds an AST (Abstract Syntax Tree).

// --------------------------------------------------------------------------------
// 2. Compilation (JIT - Just In Time Compilation)
// --------------------------------------------------------------------------------

// JavaScript compiles the code into an intermediate representation before execution.
// The Just-In-Time (JIT) compiler translates this into machine code at runtime.

console.log("Compilation completed!");
// Expected Output: Compilation completed!

// --------------------------------------------------------------------------------
// 3. Execution (Running the Code)
// --------------------------------------------------------------------------------

// 3.1 Call Stack (The Chef's To-Do List)
// JavaScript keeps track of function calls using the Call Stack (LIFO: Last In, First Out).

function firstTask() {
  console.log("First task done!");
}

function secondTask() {
  console.log("Second task done!");
  firstTask();
}

secondTask();
// Expected Output:
// Second task done!
// First task done!

// 3.2 Heap Memory (Storage Area)
// Objects and dynamically allocated data are stored in the heap.

let user = { name: "Alice", age: 30 };
console.log(user);
// Expected Output: { name: 'Alice', age: 30 }

// --------------------------------------------------------------------------------
// 4. Creation Phase vs Execution Phase
// --------------------------------------------------------------------------------

// 4.1 Creation Phase (Setting Up the Kitchen)
// JavaScript scans the code first and sets up variables in memory.

console.log(name); // 'name' exists but is undefined
var name = "Alice";
// Expected Output: undefined

// 4.2 Execution Phase (Cooking Time)
// Now, JavaScript assigns values and executes functions.

console.log(name);
// Expected Output: Alice

// --------------------------------------------------------------------------------
// 5. Final Takeaways
// --------------------------------------------------------------------------------

// How JavaScript Works:
// 1. Parsing: Reads and understands the code.
// 2. Compilation: Prepares the code for execution (JIT Compilation).
// 3. Execution: Runs the code step by step.
