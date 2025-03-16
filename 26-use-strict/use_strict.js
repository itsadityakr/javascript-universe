// ====================== "use strict" in JavaScript ======================
// "use strict" is a directive that enforces stricter JavaScript execution
// to prevent common errors and improve performance.
// ========================================================================

// ------------------------------------------------------------------------
// 1. Global Strict Mode
// ------------------------------------------------------------------------

"use strict"; // Enforces strict mode globally

// x = 10; // ❌ Error: x is not defined (Prevents accidental global variables)

// Declaring properly works
let x = 10;
console.log("Value of x:", x); // ✅ Output: 10

// ------------------------------------------------------------------------
// 2. Function-Level Strict Mode
// ------------------------------------------------------------------------

function strictFunction() {
  "use strict"; // Strict mode only inside this function
  // y = 20; // ❌ Error: y is not defined
  let y = 20;
  console.log("Value of y:", y); // ✅ Output: 20
}

strictFunction();

// ------------------------------------------------------------------------
// 3. Preventing Duplicate Property Names in Objects
// ------------------------------------------------------------------------

const person = {
  name: "Alice",
  // name: "Bob", // ❌ Error: Duplicate property name not allowed in strict mode
};

console.log("Person name:", person.name); // ✅ Output: Alice

// ------------------------------------------------------------------------
// 4. Preventing Duplicate Function Parameters
// ------------------------------------------------------------------------

/*
function duplicateParams(a, a) {
  "use strict";
  console.log(a); // ❌ Error: Duplicate parameter name not allowed
}
*/

// ------------------------------------------------------------------------
// 5. `this` in Functions
// ------------------------------------------------------------------------

function checkThis() {
  console.log("this in function:", this); // ❌ Output: undefined in strict mode
}

checkThis();

const obj = {
  method: function() {
    "use strict";
    console.log("this inside method:", this); // ✅ Output: obj (because it's called on obj)
  },
};

obj.method();

// ------------------------------------------------------------------------
// 6. Preventing Variable and Function Deletion
// ------------------------------------------------------------------------

var number = 10;
// delete number; // ❌ Error: Deleting a variable is not allowed in strict mode

function sampleFunc() {}
// delete sampleFunc; // ❌ Error: Deleting a function is not allowed

// ------------------------------------------------------------------------
// 7. Preventing Read-Only Property Modification
// ------------------------------------------------------------------------

const readOnlyObj = {};
Object.defineProperty(readOnlyObj, "name", { value: "Alice", writable: false });

// readOnlyObj.name = "Bob"; // ❌ Error: Cannot assign to read-only property

console.log("Read-only name:", readOnlyObj.name); // ✅ Output: Alice

// ------------------------------------------------------------------------
// 8. Preventing `eval()` from Creating Variables
// ------------------------------------------------------------------------

"use strict";

eval("var z = 30;");
// console.log(z); // ❌ Error: z is not defined in strict mode

// ------------------------------------------------------------------------
// 9. Strict Mode in ES6 Modules (Automatic)
// ------------------------------------------------------------------------

// In ES6 modules, strict mode is enabled by default.
// This means "use strict" is **not** needed when using `import` or `export`.

export function myModuleFunc() {
  // x = 50; // ❌ Error: x is not defined (Strict mode applies automatically)
  let x = 50;
  console.log("Value from module function:", x); // ✅ Output: 50
}

// ------------------------------------------------------------------------
// 10. Strict Mode in ES6 Classes (Automatic)
// ------------------------------------------------------------------------

class User {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log("User name:", this.name);
  }
}

const user = new User("Kodyfier");
user.showName(); // ✅ Output: Kodyfier

// ------------------------------------------------------------------------
// 11. Checking If Code is Running in Strict Mode
// ------------------------------------------------------------------------

function isStrictMode() {
  return (function() { return !this; })(); // Returns true if in strict mode
}

console.log("Is strict mode enabled?", isStrictMode()); // ✅ Output: true

// ------------------------------------------------------------------------
// Summary
// ------------------------------------------------------------------------
// ✔ "use strict" prevents accidental global variables.
// ✔ It avoids duplicate property names and function parameters.
// ✔ Functions in strict mode have `this` as `undefined` instead of `window`.
// ✔ Prevents deleting variables or functions.
// ✔ Read-only properties cannot be modified in strict mode.
// ✔ eval() does not create global variables in strict mode.
// ✔ ES6 modules and classes use strict mode automatically.

