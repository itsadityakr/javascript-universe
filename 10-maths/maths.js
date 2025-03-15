// =========================================
// JavaScript Math Object
// =========================================

// The `Math` object in JavaScript provides tools for performing mathematical calculations.
// It includes constants, functions, and methods to handle tasks like rounding numbers,
// generating random numbers, and working with logarithms or powers.

// Key Point:
// The `Math` object is a static object, meaning you do not create it like other objects.
// Instead, you directly use its properties and methods by calling Math.<method>().

// =========================================
// 1. Constants in the Math Object
// =========================================

// Math.PI:
// Represents the mathematical constant Pi (π), which is the ratio of a circle's circumference to its diameter.
// It is approximately equal to 3.14159.

const piValue = Math.PI;
console.log(piValue); // Output: 3.141592653589793

// Real-Life Example:
// Use Math.PI when calculating the circumference of a circle:
// Formula: Circumference = 2 * π * radius

const radius = 5;
const circumference = 2 * Math.PI * radius;
console.log(circumference); // Output: ~31-sync-vs-async.4159

// =========================================
// 2. Basic Operations in Math
// =========================================

// Absolute Value: Math.abs(x)
// The Math.abs() method returns the absolute value of a number.
// This means it removes any negative sign and always returns a positive number.

console.log(Math.abs(5));    // Output: 5 (positive stays positive)
console.log(Math.abs(-115)); // Output: 115 (negative becomes positive)

// Key Concept:
// Think of the absolute value as "distance from 0." Both -10 and 10 are 10 units away from 0.

// Rounding Methods

// 1. Math.round(x): Rounds a number to the nearest integer.
// If the decimal part is 0.5 or higher, the number rounds up. Otherwise, it rounds down.
console.log(Math.round(3.7)); // Output: 4
console.log(Math.round(3.2)); // Output: 3

// 2. Math.ceil(x): Always rounds a number up to the nearest integer.
console.log(Math.ceil(3.1)); // Output: 4
console.log(Math.ceil(3.9)); // Output: 4

// 3. Math.floor(x): Always rounds a number down to the nearest integer.
console.log(Math.floor(3.7)); // Output: 3
console.log(Math.floor(3.1)); // Output: 3

// 4. Math.trunc(x): Removes the decimal part of a number, returning only the integer part.
// It does not round up or down—it simply truncates.
console.log(Math.trunc(3.9));  // Output: 3
console.log(Math.trunc(-3.9)); // Output: -3

// Key Difference Between Methods:
// round: Rounds based on decimal part (0.5 or above rounds up).
// ceil: Always rounds up.
// floor: Always rounds down.
// trunc: Only takes the integer part, ignoring decimals.

// =========================================
// 3. Exponential and Logarithmic Functions
// =========================================

// Math.pow(x, y): Calculates the value of x raised to the power of y (i.e., x^y).
console.log(Math.pow(2, 3)); // Output: 8 (2 * 2 * 2)
console.log(2 ** 3);         // Output: 8 (alternative syntax in modern JavaScript)

// Math.sqrt(x): Returns the square root of a number.
// The square root of a number is a value that, when multiplied by itself, equals the original number.
console.log(Math.sqrt(25)); // Output: 5 (because 5 * 5 = 25)

// Math.log(x): Returns the natural logarithm of a number (logarithm base e, where e ≈ 2.718).
console.log(Math.log(1)); // Output: 0 (because e^0 = 1)
console.log(Math.log(2)); // Output: ~0.693

// Math.log2(x): Returns the logarithm base 2 of a number.
// Logarithm base 2 means: "To what power must 2 be raised to get this number?"
console.log(Math.log2(8)); // Output: 3 (because 2^3 = 8)

// =========================================
// 4. Random Numbers
// =========================================

// Math.random():
// Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// This means it could be 0.0, but it will never be 1.0.
console.log(Math.random()); // Output: A random number, e.g., 0.573 (varies each time)

// Generating a Random Number in a Range:
// You can scale the random number to a specific range by multiplying it.
// For example, to get a random number between 0 and 100:
const randomNum = Math.random() * 100;
console.log(randomNum); // Output: A random number between 0 and 100

// Rounding Random Numbers:
// To round the random number to 3 decimal places, use .toFixed():
const roundedRandom = (Math.random() * 100).toFixed(3);
console.log(roundedRandom); // Output: e.g., 45.672 (random)

// Generating Random Integers:
// To generate a random whole number (integer), use Math.floor() or Math.ceil():
const randomInt = Math.floor(Math.random() * 100);
console.log(randomInt); // Output: A random integer between 0 and 99

// Practice Question: Generate a Random Integer in a Custom Range
// Generate a random integer between two values, min and max (inclusive):
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Output: A random integer between 1 and 10

// =========================================
// Additional Notes for Beginners
// =========================================

// 1. Math Methods are Static:
// You always call them using Math.<method>(). You don't create an instance of Math.

// 2. Precision with Decimals:
// When working with floating-point numbers (numbers with decimals), JavaScript may sometimes
// produce unexpected results due to rounding issues in binary representation.
// Use .toFixed() to control the number of decimal places.

// 3. Difference Between Math.random() and Math.floor() Usage:
// - Math.random() generates a decimal.
// - Math.floor() converts it into a whole number by rounding down.
