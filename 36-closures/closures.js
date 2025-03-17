// Closures in JavaScript

// Basic Closure Example
function outerFunction() {
  var outerVariable = "I'm from outer";

  function innerFunction() {
    console.log(outerVariable); // Expected output: "I'm from outer"
  }

  return innerFunction;
}

var closureFunction = outerFunction(); // outerFunction runs & returns innerFunction
console.dir(closureFunction); // Logs innerFunction (along with closure scope)
closureFunction(); // Expected output: "I'm from outer"

// Function Factory Example
function multiplier(factor) {
  return function (number) {
    console.log(number, factor); // Expected output: number value, factor value
    return number * factor;
  };
}

const double = multiplier(2); // multiplier() runs, returns an inner function
console.log(double(5)); // Expected output: 5, 2  | 10

// Module Pattern using Closures (Private Variables)
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log("Count:", count); // Expected output: Count value
    },
    decrement: function () {
      count--;
      console.log("Count:", count); // Expected output: Count value
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // Expected output: Count: 1
counter.increment(); // Expected output: Count: 2
counter.decrement(); // Expected output: Count: 1
console.log(counter.getCount()); // Expected output: 1

// Closures in Event Handlers
function setupButton() {
  let count = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    count++;
    console.log("Button clicked", count, "times"); // Expected output: Button clicked count times
  });
}

setupButton();

// Common Pitfall: Closures in Loops (Incorrect)
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Expected output: 4, 4, 4 (due to closure capturing same i)
  }, 1000);
}

// Solution 1: Using let (Creates new block-scoped i for each iteration)
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Expected output: 1, 2, 3
  }, 1000);
}

// Solution 2: Using IIFE (Immediately Invoked Function Expression)
for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i); // Expected output: 1, 2, 3
    }, 1000);
  })(i);
}

// Memory Leak Example with Closures
function createHeavyClosure() {
  let largeArray = new Array(1000000).fill("data");

  return function () {
    console.log("Closure still holds reference to largeArray");
  };
}

let holdClosure = createHeavyClosure();
// 'largeArray' is retained in memory even if not needed

// To prevent memory leak
holdClosure = null; // Release the closure to allow garbage collection