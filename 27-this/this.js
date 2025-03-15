// ===================== The `this` Keyword in JavaScript =====================
// The `this` keyword refers to an object, but which object depends on how it is called.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. `this` in the Global Context
// ----------------------------------------------------------------------------

console.log("Global `this`:", this);
// In Browser: Window object
// In Node.js: global object

"use strict";
console.log("Strict Mode Global `this`:", this);
// Output: undefined

// ----------------------------------------------------------------------------
// 2. `this` in a Regular Function
// ----------------------------------------------------------------------------

function regularFunction() {
  console.log("Inside regular function, `this`:", this);
}

regularFunction();
// In Browser: Window object
// In Node.js: global object
// In Strict Mode: undefined

"use strict";
function strictFunction() {
  console.log("Inside strict function, `this`:", this);
}

strictFunction();
// Output: undefined (because of `"use strict"`)

// ----------------------------------------------------------------------------
// 3. `this` Inside an Object Method
// ----------------------------------------------------------------------------

const person = {
  name: "Kodyfier",
  greet: function () {
    console.log("Inside object method, `this`:", this);
  },
};

person.greet();
// Output: person object itself

// ----------------------------------------------------------------------------
// 4. `this` with Arrow Functions
// ----------------------------------------------------------------------------

const obj = {
  name: "Kodyfier",
  greet: () => {
    console.log("Arrow function `this`:", this);
  },
};

obj.greet();
// Output: Window (browser) or global (Node.js), NOT obj

// ----------------------------------------------------------------------------
// 5. `this` in Event Listeners
// ----------------------------------------------------------------------------

// Uncomment the following and run in an HTML file

// document.getElementById("btn").addEventListener("click", function () {
//   console.log("Event listener `this`:", this); // Refers to button element
// });

// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Arrow function event listener `this`:", this); // Refers to Window/global
// });

// ----------------------------------------------------------------------------
// 6. Changing `this` with `call()`, `apply()`, and `bind()`
// ----------------------------------------------------------------------------

function greet() {
  console.log("`this` in function with call():", this.name);
}

const user = { name: "Kodyfier" };

greet.call(user);  // Output: "Kodyfier"
greet.apply(user); // Output: "Kodyfier"

const boundGreet = greet.bind(user);
boundGreet(); // Output: "Kodyfier"

// ----------------------------------------------------------------------------
// 7. `this` in Constructor Functions
// ----------------------------------------------------------------------------

function Person(name) {
  this.name = name;
}

const user1 = new Person("Kodyfier");
console.log("Constructor function `this`:", user1.name); // Output: "Kodyfier"

// ----------------------------------------------------------------------------
// 8. `this` in Classes
// ----------------------------------------------------------------------------

class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Class method `this`:", this.name);
  }
}

const user2 = new User("Kodyfier");
user2.greet(); // Output: "Kodyfier"

// ----------------------------------------------------------------------------
// 9. `this` in `setTimeout()` and `setInterval()`
// ----------------------------------------------------------------------------

const obj2 = {
  name: "Kodyfier",
  greet: function () {
    setTimeout(function () {
      console.log("setTimeout Regular function `this`:", this.name);
    }, 1000);
  },
};

obj2.greet(); // Output: undefined (because `this` refers to window/global)

const obj3 = {
  name: "Kodyfier",
  greet: function () {
    setTimeout(() => {
      console.log("setTimeout Arrow function `this`:", this.name);
    }, 1000);
  },
};

obj3.greet(); // Output: "Kodyfier"

// ----------------------------------------------------------------------------
// 10. Checking If Code is Running in Strict Mode
// ----------------------------------------------------------------------------

function isStrictMode() {
  return (function () { return !this; })();
}

console.log("Is strict mode enabled?", isStrictMode()); // Output: true (if strict mode is enabled)

// ----------------------------------------------------------------------------
// Summary
// ----------------------------------------------------------------------------
// - `this` in global context → window/global (undefined in strict mode)
// - `this` in a function → window/global (undefined in strict mode)
// - `this` in an object method → the object itself
// - `this` in an arrow function → inherited from surrounding scope
// - `this` in an event listener → the element that received the event
// - `call()`, `apply()`, `bind()` can manually set `this`
// - `this` in a constructor function → the new instance
// - `this` in a class → the class instance
// - `this` in setTimeout() → window/global (unless using an arrow function)

