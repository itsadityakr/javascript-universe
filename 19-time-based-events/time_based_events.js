/**
 * JavaScript Timing-Based Events
 *
 * JavaScript provides built-in methods to execute code after a delay or repeatedly over time.
 * These methods are useful for animations, delayed actions, or repeated tasks.
 *
 * Methods covered:
 * - setTimeout()
 * - setInterval()
 * - clearTimeout()
 * - clearInterval()
 */

/**
 * 1. setTimeout()
 * Executes a function once after a specified delay (in milliseconds).
 */

// Example: Display an alert after 3 seconds
setTimeout(function() {
    alert("This alert appears after 3 seconds!");
}, 3000);
// Expected Output (after 3 seconds): An alert box with message "This alert appears after 3 seconds!"

// Example: Cancel a setTimeout before it executes
let timeoutID = setTimeout(function() {
    console.log("This won't run if cleared.");
}, 5000);
clearTimeout(timeoutID); // Cancels the timeout
// Expected Output: No output, as the timeout is cleared before execution

/**
 * 2. setInterval()
 * Executes a function repeatedly at fixed intervals (in milliseconds).
 */

// Example: Print a message every 2 seconds
let intervalID = setInterval(function() {
    console.log("This message prints every 2 seconds.");
}, 2000);
// Expected Output (every 2 seconds): "This message prints every 2 seconds."

// Example: Stop the interval after 5 seconds
setTimeout(function() {
    clearInterval(intervalID);
    console.log("Interval has been cleared.");
}, 5000);
// Expected Output: "Interval has been cleared." (after 5 seconds), and no more messages printed

/**
 * 3. clearTimeout()
 * Cancels a setTimeout() before it runs.
 */

// Example: Prevent execution of a delayed function
let timeoutID2 = setTimeout(function() {
    console.log("This will not execute because it's cleared.");
}, 3000);
clearTimeout(timeoutID2); // Cancels the timeout
// Expected Output: No output, as the timeout is cleared before execution

/**
 * 4. clearInterval()
 * Stops a setInterval() from executing repeatedly.
 */

// Example: Stop an interval after 5 seconds
let intervalID2 = setInterval(function() {
    console.log("This will print every second.");
}, 1000);
// Expected Output (every second): "This will print every second."

setTimeout(function() {
    clearInterval(intervalID2);
    console.log("Interval stopped after 5 seconds.");
}, 5000);
// Expected Output (after 5 seconds): "Interval stopped after 5 seconds." and no further messages

/**
 * Key Differences:
 * | Method        | Description                          | Frequency            | Use Case                          |
 * |--------------|----------------------------------|--------------------|---------------------------------|
 * | setTimeout() | Executes once after a delay       | One-time execution | Delayed actions                  |
 * | setInterval()| Executes repeatedly at intervals | Repeated execution | Repetitive tasks                  |
 * | clearTimeout()| Cancels a scheduled timeout      | Stops one-time execution | Prevents a timeout from running |
 * | clearInterval()| Cancels a running interval      | Stops repeated execution | Stops a repeated task |
 */

/**
 * Practical Example:
 * Display a message every 3 seconds, but stop after 10 seconds.
 */

let intervalID3 = setInterval(function() {
    console.log("This message prints every 3 seconds.");
}, 3000);
// Expected Output (every 3 seconds): "This message prints every 3 seconds."

setTimeout(function() {
    clearInterval(intervalID3);
    console.log("Interval stopped after 10 seconds.");
}, 10000);
// Expected Output (after 10 seconds): "Interval stopped after 10 seconds." and no further messages

/**
 * Conclusion:
 * - Use setTimeout() for delayed actions.
 * - Use setInterval() for repeated actions.
 * - Use clearTimeout() and clearInterval() to stop these actions before execution.
 *
 * Next Steps:
 * - Experiment with different timing values and functions.
 * - Combine these methods to create interactive time-based features.
 */
