//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* If Statement
//* ===============================

//? If Else: The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? Let's check the temperature
var currentTemperature = 28; // Changed variable name for clarity
if (currentTemperature > 30) {
  console.log("It's hot, let's go to the beach!");
} else {
  console.log("It's cool, let's watch some TV.");
}

//? Using an else-if clause to check additional conditions:
var currentTemperature = 18;
if (currentTemperature >= 30) {
  console.log("It's very hot, let's go to the beach!");
} else if (currentTemperature >= 20 && currentTemperature < 30) {
  console.log("It's warm, let's watch TV.");
} else {
  console.log("It's cold, grab a blanket and stay cozy.");
}

//* ===============================
//* Interview Question
//* ===============================

//! Requirements:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.

let personAge = 21; // Changed variable name for clarity
let isCitizen = false; // Assume true for citizen, false for non-citizen
let isRegistered = true; // Assume true for registered, false for not registered

if (personAge >= 18) {
  if (isCitizen) {
    if (isRegistered) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible due to registration status.");
    }
  } else {
    console.log("You are not eligible due to citizenship status.");
  }
} else {
  console.log("You are not eligible to vote (Too young).");
}

//* ===============================
//* Interview Questions
//* ===============================

//! 1: Write a program to check if a number is even or odd.
let number = 14; // Changed variable name and value
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

let potentialPrime = 17; // Changed variable name and value
let isPrime = true;

for (let i = 2; i < potentialPrime; i++) {
  if (potentialPrime % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${potentialPrime} is a prime number.`);
} else {
  console.log(`${potentialPrime} is not a prime number.`);
}

//! 3: Write a program to check if a number is positive, negative, or zero.
let testNumber = 0; // Changed variable name and value
if (testNumber === 0) {
  console.log("The number is zero.");
} else if (testNumber > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is negative.");
}

//* ===============================
//* Switch Statement
//* ===============================

//? Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

//todo Example of Switch Statement
//! Explain how the switch statement works and what will be the output when the variable dayOfWeek is set to different values.

var dayOfWeek = "Saturday"; // Changed variable name and value

switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday, start the week strong!");
    break;

  case "Friday":
    console.log("It's Friday, let's have a party!");
    break;

  case "Sunday":
    console.log("It's Sunday, time for relaxation.");
    break;

  default:
    console.log("No matching day found.");
}

//?=========================
//? Challenge Time
//? ==========================

//! Write a JavaScript switch statement that takes a variable `shapeType` representing different shapes and calculates the area.

let shapeType = "Circle"; // Changed variable name and value
let sideA = 6; // Side for square or one side of rectangle
let sideB = 8; // Other side of rectangle
let radius = 4; // Radius for circle
let area;

switch (shapeType) {
  case "Square":
    area = sideA * sideA;
    console.log(`The area of the square is ${area}.`);
    break;

  case "Rectangle":
    area = sideA * sideB;
    console.log(`The area of the rectangle is ${area}.`);
    break;

  case "Circle":
    area = Math.PI * radius * radius; // Using Math.PI for better precision
    console.log(`The area of the circle is ${area.toFixed(2)}.`); // Rounded to 2 decimal places
    break;

  default:
    console.log("Sorry, the shape is not available.");
}

//! Additional Notes:
//? - Always use `break` in each case to avoid fall-through issues.
//? - `default` acts as a fallback when no cases match.
//? - `Math.PI` provides a precise value of π for circle calculations.
//? - Use meaningful variable names to improve code readability.

//! Question: Explain the purpose of the code. What is it calculating based on the values of areaOfShapes, a, and b?
//? The code calculates and logs the area of different shapes (rectangle, circle, square) based on the value of the areaOfShapes variable.

//! Question: What will be the output if areaOfShapes is set to "Square" and why?
//? The output will be the square of the variable a (25) since the case matches "Square."

//! Question: Why is there a break statement after each case in the switch statement?
//? The break statement is used to exit the switch statement after the corresponding case is executed, preventing fall-through to subsequent cases.

//! Question: If areaOfShapes is set to "Circle," what will be logged to the console, and why is the variable r defined within the case block?
//? The output will be the area of a circle with radius r (28.26) since the case matches "Circle," and r is defined within the case block.

//! Question: What will happen if areaOfShapes is set to a shape that is not covered by any of the existing case statements?
//? The default case logs "Sorry, the shape is not available" if areaOfShapes is set to a shape not covered by any existing case.

//! Question: How does the switch statement handle the flow of control based on the value of areaOfShapes?
//? The switch statement evaluates the value of areaOfShapes and executes the code block corresponding to the matching case. The break statements ensure that only the relevant code block is executed.

//* ===============================
//* While Loop
//* ===============================

// ? While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true.
// ? It is commonly used when the number of iterations is unknown or depends on user input.

// Syntax:
// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Example 1: Simple while loop to count from 1 to 10 🧑‍💻
let count = 1; // Starting point of the loop
while (count <= 10) { // Condition to keep the loop running
  console.log(count); // Print the current value of count
  count++; // Increment count to avoid an infinite loop
}

//! Practice Example 🧑‍💻
//? Example 2: Create a multiplication table for 5 (Table of 5)
// Multiplication tables are a common use case for loops.

// let multiplier = 1; // Starting number for the multiplication
while (multiplier <= 10) { // Loop until multiplier reaches 10
  console.log("5 * " + multiplier + " = " + 5 * multiplier); // Print the result
  // Alternatively, use template literals for cleaner formatting:
  // console.log(`5 * ${multiplier} = ${5 * multiplier}`);
  multiplier++; // Increment the multiplier
}

//* ===============================
//* Do-While Loop
//* ===============================

//? Do...While Loop: A do...while loop ensures that the code inside the loop runs at least once, regardless of the condition.
//? Useful for scenarios like user input validation, where you need the input at least once before checking its validity.

// Syntax:
// do {
//   // Code to be executed at least once
// } while (condition);

//* Example 1: Simple do...while loop to count from 1 to 10 🧑‍💻

let start = 1; // Starting point
do {
  console.log(start); // Print the current value of start
  start++; // Increment start
} while (start <= 10); // Condition to continue the loop

//? Example 2: Validating user input with a do...while loop
// Ensures that the user enters a positive number. Repeats until a valid input is provided.

let userInput; // Variable to store user input
let positiveNumber; // Variable to store the parsed positive number
do {
  userInput = prompt("Enter any positive number:"); // Ask for input
  positiveNumber = parseFloat(userInput); // Parse input to a floating-point number
} while (isNaN(positiveNumber) || positiveNumber < 0); // Repeat if input is not valid
console.log("You entered a valid positive number:", positiveNumber); // Print the valid input

//* ===============================
//* For Loop
//* ===============================

//? For Loop: The for loop is ideal for cases where the number of iterations is known beforehand. It combines initialization, condition checking, and iteration update in one line.

// Syntax:
// for (initialization; condition; iteration) {
//   // Code to be executed for each iteration
// }

//* Example 1: Simple for loop to count from 1 to 10
for (let num = 1; num <= 10; num++) {
  console.log(num); // Print the current value of num
}

//? Infinite Loop Example:
//* The code `for (;;) {}` represents an infinite loop.
//* Commonly used in scenarios like game development, where the game loop runs continuously until a specific condition (e.g., game over) is met.

// for (;;) {
//   // Game logic and rendering go here
//   // Use `break;` to exit the loop when needed
// }

//! Practice Examples:
//! Example 1: Calculate the sum of numbers from 1 to 10 🧑‍💻
let sum = 0; // Initialize sum
for (let num = 1; num <= 10; num++) {
  sum += num; // Add current number to sum
}
console.log("Sum of numbers from 1 to 10:", sum); // Print the result

//! Example 2: Generate a multiplication table for 5 🧑‍💻
for (let multiplier = 1; multiplier <= 10; multiplier++) {
  console.log("5 * " + multiplier + " = " + 5 * multiplier); // Print the table
}

//! Homework ➡️ Write a JavaScript program to print tables for given numbers (e.g., 8, 9, 12, 15) using a for loop.

//* ===============================
//* Additional Practice
//* ===============================

//! 1. Program to check if a year is a leap year 🧑‍💻
// Leap years are divisible by 4 but not by 100 unless divisible by 400.

let year = 2020; // Year to check
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

//! 2. Drawing Patterns with Asterisks 🧑‍💻
// Draw a right-angle triangle using nested loops

//*       i\j  1    2    3    4    5
//*       ----------------------------
//*       1    *    -    -    -    -
//*       2    *    *    -    -    -
//*       3    *    *    *    -    -
//*       4    *    *    *    *    -
//*       5    *    *    *    *    *

for (let i = 1; i <= 5; i++) { // Outer loop for rows
  let pattern = ""; // Initialize empty pattern for the current row
  for (let j = 1; j <= i; j++) { // Inner loop for columns
    pattern += " *"; // Add an asterisk to the pattern
  }
  console.log(pattern); // Print the pattern for the current row
}

