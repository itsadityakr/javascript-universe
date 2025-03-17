// Heap Memory in JavaScript

// Primitive vs. Reference Types

// Primitive values (Stored in Stack)
let a = 10; // Stored directly in the stack
let b = a; // Copy of value is created
b = 20;
console.log(a, b); // Expected output: 10, 20 (b is independent of a)

// Reference types (Stored in Heap)
let obj1 = { name: "John" }; // Object stored in heap, obj1 holds reference
let obj2 = obj1; // obj2 holds the same reference, NOT a copy
obj2.name = "Doe";
console.log(obj1.name); // Expected output: "Doe" (both point to the same object)

// Heap Memory Allocation and Garbage Collection

// Function holding reference (Preventing garbage collection)
function createObject() {
  return { message: "I exist in heap memory" };
}
let obj = createObject(); // obj stores reference to the object
console.log(obj.message); // Expected output: "I exist in heap memory"

// Releasing reference (Allowing garbage collection)
obj = null; // Now the object can be garbage collected

// Memory Leak Examples

// Unintentional Global Variable (Memory Leak)
function createLeak() {
  leak = "I am a global variable"; // No var, let, or const (becomes global)
}
createLeak();
console.log(leak); // Expected output: "I am a global variable"

// Forgotten Timers or Callbacks
let intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

// Uncomment to prevent memory leak
// clearInterval(intervalId); 

// Closures Holding References
function outer() {
  let largeArray = new Array(1000000).fill("data"); // Large object in heap
  return function inner() {
    console.log("Inner function");
  };
}
let holdClosure = outer(); // 'largeArray' stays in memory
holdClosure = null; // Releasing reference

// Detached DOM Elements (Memory Leak)
let button = document.createElement("button");
document.body.appendChild(button);
button.remove(); // Button removed but still referenced
button = null; // Allows garbage collection

// Performance Optimization Tips

// Using WeakMap to avoid memory leaks
let weakMap = new WeakMap();
let objRef = {};
weakMap.set(objRef, "data");
objRef = null; // Object can now be garbage collected

// Debugging Memory Usage

// Check memory usage in Chrome DevTools:
// 1. Open DevTools → Memory tab
// 2. Take Heap Snapshot before & after object creation
// 3. Identify memory leaks

// Preventing Large Object Retention
function createLargeObject() {
  let bigData = new Array(1000000).fill("data"); // Large object
  return function () {
    console.log("Accessing bigData");
  };
}
let largeObj = createLargeObject();
largeObj = null; // Release reference for garbage collection