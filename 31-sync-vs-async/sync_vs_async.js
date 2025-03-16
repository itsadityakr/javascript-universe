// ==========================================
// Synchronous vs Asynchronous JavaScript
// ==========================================

// ------------------------------------------------
// 1. Synchronous Programming (Blocking Execution)
// ------------------------------------------------
// JavaScript executes each statement one by one, waiting for each to finish.

console.log("Step 1: Start Cooking");
console.log("Step 2: Chop Vegetables");
console.log("Step 3: Serve Food");

// Expected Output:
// Step 1: Start Cooking
// Step 2: Chop Vegetables
// Step 3: Serve Food

// Problem: If a task takes too long, it blocks further execution.

function longTask() {
    let start = Date.now();
    while (Date.now() - start < 5000) {}  // Simulates a 5-second delay
}

console.log("Start");
longTask(); // Blocks execution for 5 seconds
console.log("End");

// Expected Output (with 5 seconds delay between "Start" and "End"):
// Start
// (Waits for 5 seconds)
// End

// ------------------------------------------------
// 2. Asynchronous Programming (Non-Blocking Execution)
// ------------------------------------------------
// JavaScript executes some tasks asynchronously using Web APIs, Task Queue, and Event Loop.

console.log("Step 1: Order Pizza");

setTimeout(() => {
    console.log("Step 2: Pizza Delivered");
}, 3000);  // Simulates a 3-second delay

console.log("Step 3: Drink Water");

// Expected Output:
// Step 1: Order Pizza
// Step 3: Drink Water
// (After 3 seconds)
// Step 2: Pizza Delivered

// ------------------------------------------------
// 3. Event Loop Demonstration
// ------------------------------------------------
// JavaScript uses the Event Loop to manage async tasks.

console.log("Start");

setTimeout(() => {
    console.log("Async Task Done!");
}, 2000); // Runs after 2 seconds

console.log("End");

// Expected Output:
// Start
// End
// (After 2 seconds)
// Async Task Done!

// ------------------------------------------------
// 4. Synchronous vs Asynchronous Comparison
// ------------------------------------------------

function syncTask() {
    console.log("Synchronous Task Start");
    for (let i = 0; i < 1000000000; i++) {} // Simulates delay
    console.log("Synchronous Task End");
}

function asyncTask() {
    console.log("Asynchronous Task Start");
    setTimeout(() => {
        console.log("Asynchronous Task End");
    }, 2000); // Non-blocking
}

console.log("== Running Sync Task ==");
syncTask();

console.log("== Running Async Task ==");
asyncTask();

console.log("== End of Script ==");

// Expected Output:
// == Running Sync Task ==
// Synchronous Task Start
// (Waits due to blocking task)
// Synchronous Task End
// == Running Async Task ==
// Asynchronous Task Start
// == End of Script ==
// (After 2 seconds)
// Asynchronous Task End

// ------------------------------------------------
// 5. Summary of Key Differences
// ------------------------------------------------

// Synchronous:
// - Executes one task at a time.
// - Blocks execution until the current task finishes.
// - Example: Cooking step by step.
//
// Asynchronous:
// - Executes multiple tasks without waiting.
// - Uses Web APIs and the Event Loop.
// - Example: Ordering pizza while doing other tasks.
