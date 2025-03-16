// ===================================================
// JavaScript Asynchronous Execution: Call Stack, Web API, Callback Queue, and Event Loop
// ===================================================

// ---------------------------------------------------
// 1. Call Stack (Synchronous Execution)
// ---------------------------------------------------
// The Call Stack follows the Last In, First Out (LIFO) principle.
// Each function runs one at a time.

function first() {
    console.log("First function executed");
}

function second() {
    console.log("Second function executed");
}

console.log("Start of Call Stack");
first();
second();
console.log("End of Call Stack");

// Expected Output:
// Start of Call Stack
// First function executed
// Second function executed
// End of Call Stack

// ---------------------------------------------------
// 2. Web API (Handles Asynchronous Operations)
// ---------------------------------------------------
// The Web API manages non-blocking tasks like setTimeout, setInterval, fetch, and DOM events.

console.log("Start");

setTimeout(() => {
    console.log("Hello from setTimeout (2 seconds)");
}, 2000); // This task is sent to the Web API

console.log("End");

// Execution Flow:
// 1. "Start" is printed.
// 2. setTimeout() is sent to the Web API (non-blocking).
// 3. "End" is printed immediately.
// 4. After 2 seconds, the callback moves to the Callback Queue.
// 5. The Event Loop moves it to the Call Stack when it's empty.
// 6. "Hello from setTimeout (2 seconds)" is printed.

// Expected Output:
// Start
// End
// (After 2 seconds)
// Hello from setTimeout (2 seconds)

// ---------------------------------------------------
// 3. Callback Queue (Manages Completed Async Tasks)
// ---------------------------------------------------

console.log("Start of Callback Queue");

setTimeout(() => {
    console.log("Task from Callback Queue");
}, 3000); // Moves to Callback Queue after 3 seconds

console.log("End of Callback Queue");

// Expected Output:
// Start of Callback Queue
// End of Callback Queue
// (After 3 seconds)
// Task from Callback Queue

// ---------------------------------------------------
// 4. Event Loop (Moves Tasks from Queue to Stack)
// ---------------------------------------------------

console.log("Start of Event Loop Demo");

setTimeout(() => {
    console.log("Async Task Completed (3 sec)");
}, 3000);

console.log("End of Event Loop Demo");

// Execution Flow:
// 1. "Start of Event Loop Demo" is printed.
// 2. setTimeout() moves the callback to the Web API.
// 3. "End of Event Loop Demo" is printed.
// 4. After 3 seconds, the callback moves to the Callback Queue.
// 5. The Event Loop checks the Call Stack.
// 6. The callback moves to the Call Stack and executes.

// Expected Output:
// Start of Event Loop Demo
// End of Event Loop Demo
// (After 3 seconds)
// Async Task Completed (3 sec)

// ---------------------------------------------------
// 5. How Everything Works Together
// ---------------------------------------------------

console.log("Step 1: Call Stack Execution");

setTimeout(() => {
    console.log("Step 3: Web API Task Completed");
}, 2000); // Moves to Web API

console.log("Step 2: Call Stack Finished");

// Execution Flow:
// 1. "Step 1: Call Stack Execution" is printed.
// 2. setTimeout() moves the task to the Web API.
// 3. "Step 2: Call Stack Finished" is printed.
// 4. After 2 seconds, the callback moves to the Callback Queue.
// 5. The Event Loop moves it to the Call Stack when empty.
// 6. "Step 3: Web API Task Completed" is printed.

// Expected Output:
// Step 1: Call Stack Execution
// Step 2: Call Stack Finished
// (After 2 seconds)
// Step 3: Web API Task Completed
