// * ============================
// * Data Types Section
// * ============================

// * Data types define the type of values that a variable can hold.

// ? Types of Primitive Data Types

// ? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
var favoriteNumber = -15;
console.log(favoriteNumber); // Output: -15

// ? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
var userName = 'Alice';
console.log(userName); // Output: 'Alice'

// ? Boolean: Represents a logical entity with two values: true or false.
// Example:
var isSnowing = true;
var isUserLoggedIn = false;
console.log(isSnowing); // Output: true
console.log(isUserLoggedIn); // Output: false

// ? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
var currentTask;
console.log(currentTask); // Output: undefined

// ? Null: Represents the absence of a value. Often used to explicitly indicate no value assigned.
// Example:
var memoryToForget = null;
console.log(memoryToForget); // Output: null

// ? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
const largeValue = 987654321012345678901234567890123456789n;
console.log(largeValue); // Output: 987654321012345678901234567890123456789n

// ? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
const uniqueIdentifier = Symbol("uniqueID");
console.log(uniqueIdentifier); // Output: Symbol(uniqueID)

// ! ============================
// ! Data Types Interview Questions
// ! ============================

// ? 1: What is the difference between null and undefined in JavaScript❓
// Explanation provided with real-life comparisons:

// null: An empty box (explicitly empty).
// undefined: A box that hasn't been opened or initialized yet.

// ? 2: What is the purpose of `typeof` operator in JavaScript❓
// Example:
var userAge = 25;
console.log(userAge); // Output: 25
console.log(typeof userAge); // Output: 'number'

// ? 3: What is the result of `typeof null` in JavaScript❓
// Example:
var emptyMemory = null;
console.log(emptyMemory); // Output: null
console.log(typeof null); // Output: 'object' (this is a known quirk in JavaScript)

// ? 4: What are primitive data types in JavaScript❓
// Answer:
// - Number
// - String
// - Boolean
// - undefined
// - Null
// - BigInt
// - Symbol

// ? 5: Convert a string to a number❓
// Method 1: Using the `+` operator
var stringAge = "30";
console.log(typeof +stringAge); // Output: 'number'

// Method 2: Using the `Number()` function
console.log(typeof Number(stringAge)); // Output: 'number'

// ? 6: Convert a number to a string❓
var score = 42;
console.log(typeof (score + "")); // Output: 'string'

// ? 7: Truthy and Falsy Values in JavaScript❓
// Truthy values: Evaluated as true in boolean contexts.
// Examples: true, "world", 99, {}, []

// Falsy values: Evaluated as false in boolean contexts.
// Examples: false, 0, '', null, undefined, NaN

// Example to check truthy or falsy:
var temperature = 0;
if (temperature) {
  console.log("This is a truthy value");
} else {
  console.log("This is a falsy value");
}

// * ========== parseInt & parseFloat Section ==========
// ? parseInt: Converts a string to an integer (ignores decimal part).
const stringValue = "89.7";
console.log(parseInt(stringValue)); // Output: 89

// ? parseFloat: Converts a string to a floating-point number (includes decimal part).
console.log(parseFloat(stringValue)); // Output: 89.7

// * Key Differences:
// parseInt: Only processes the integer part of the string.
// parseFloat: Processes the decimal part as well.

// Additional Examples:
console.log(parseInt("567xyz")); // Output: 567
console.log(parseFloat("567.89abc")); // Output: 567.89
console.log(parseInt("&567")); // Output: NaN (invalid input)

// ? What is NaN in JavaScript❓
// NaN stands for "Not a Number". It is returned when an invalid mathematical operation occurs.
// To check if a value is NaN, use `isNaN()`:
console.log(isNaN("unknown")); // Output: true
console.log(parseInt("random")); // Output: NaN

// NaN !== NaN
// NaN is not equal to itself. This is a unique behavior in JavaScript.
if (NaN === NaN) {
  console.log("Both are equal");
} else {
  console.log("NaN is not equal to NaN"); // This will execute
}

// * ========== Data Types End Section ==========
