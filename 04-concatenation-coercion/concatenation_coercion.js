// //* ============================
// //* Data Types Section - part 2
// //* ============================

// //* Concatenation in JavaScript
// //? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. 
// //? When the + operator is used with strings, it concatenates the strings together.
// //? If any operand of the + operator is a string, JavaScript converts the other operands to strings, resulting in string concatenation.
// //? If both operands are numbers, the + operator performs numeric addition.

// Example of String Concatenation:
const welcomeMessage = "Hi " + "Everyone!";
console.log(welcomeMessage); // Output: "Hi Everyone!"

// Example of Mixing Numbers and Strings:
let userInfo = "User Age: " + 30;
console.log(userInfo); // Output: "User Age: 30-how-js-works"

// Example of Numeric Addition:
let totalScore = 15 + 25;
console.log(totalScore); // Output: 40

// //* Type Coercion
// //? Type coercion is the automatic conversion of values from one data type to another.
// //? It can occur implicitly (by JavaScript itself) or explicitly (done by the programmer).
// //! Be cautious: Type coercion can lead to unexpected results in some cases.

// Example of Implicit Coercion:
let resultString = "10" + 20;
console.log(resultString); // Output: "1020" (string concatenation because "10" is a string)

// Example of Explicit Coercion:
let numericResult = Number("8") + 12;
console.log(numericResult); // Output: 20 (explicitly converting "8" to a number)

// //* ============================
// //* Tricky Interview Questions
// //* ============================

console.log(12 + "34"); 
// Output: "1234" (12 is converted to a string and concatenated with "34")

console.log(15 - "5"); 
// Output: 10 (String "5" is coerced to a number, and subtraction is performed)

console.log("7" + 3); 
// Output: "73" (String concatenation occurs because "7" is a string)

console.log("Hello" + "World"); 
// Output: "HelloWorld" (String concatenation)

console.log(" " + " "); 
// Output: "  " (Two empty spaces concatenated)

let paddedZero = " " + 5;
console.log(paddedZero); // Output: " 5" (String concatenation: space + "5")
console.log(typeof paddedZero); // Output: "string"

console.log("apple" - "apple"); 
// Output: NaN (Subtraction is not valid between two strings)

console.log(true + true); 
// Output: 2 (true is coerced to 1, so 1 + 1 = 2)

console.log(true + false); 
// Output: 1 (true is 1, false is 0, so 1 + 0 = 1)

console.log(false + true); 
// Output: 1 (false is 0, true is 1, so 0 + 1 = 1)

console.log(false - true); 
// Output: -1 (false is 0, true is 1, so 0 - 1 = -1)

// * ============================
// * Key Points and Additional Notes
// * ============================

// 1. **String Concatenation with "+"**:
//    - If one operand is a string, JavaScript coerces the other operand to a string.
//    - Example: `"Hi " + 30-how-js-works` results in `"Hi 30-how-js-works"`.

// 2. **Arithmetic with Strings**:
//    - JavaScript attempts to convert strings to numbers for arithmetic operations like `-`, `*`, `/`.
//    - If conversion fails, the result is `NaN` (Not a Number).

// 3. **Type Coercion Pitfalls**:
//    - `true` and `false` are coerced to `1` and `0` in numeric contexts.
//    - Empty strings (`""`), `null`, and `undefined` can lead to unexpected results when coerced.

// 4. **Special Cases to Remember**:
//    - `"8" - "3"` evaluates to `5` (both strings are coerced to numbers).
//    - `"8" + 3` evaluates to `"83"` (string concatenation takes precedence).
//    - `" " + 10` evaluates to `" 10"` (space is treated as a string).

// 5. **`NaN` (Not a Number)**:
//    - `NaN` results from invalid numeric operations.
//    - Example: `"xyz" - 10` evaluates to `NaN`.
//    - Use `isNaN()` to check if a value is `NaN`.

console.log(isNaN("banana")); // Output: true (String cannot be converted to a number)
console.log(isNaN(456)); // Output: false (456 is a valid number)
