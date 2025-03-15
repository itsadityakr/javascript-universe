// //* ====================================
// //* Values and Variable in JavaScript
// //* ====================================

// //* In JavaScript, values and variables are fundamental concepts that form the basis of programming.

// //* Values: A value is a piece of information that a program can work with. It can be a number, text, true/false, or more complex data like arrays and objects.

// //* Variables: A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.

// //* Syntax for Declaring Variables:
// //* - Before ES6: Use `var` to declare variables.
// //* - After ES6: Use `let` and `const` for better scoping and immutability control.

// console.log("Welcome to the best JS course!");

// //* Example of a variable declaration using `var`:
// var myAge = 30-how-js-works; // A variable named `myAge` storing a number value.
// console.log(myAge); // Logs the value of `myAge` to the console.

// //! Let's test variable naming conventions
// var my_firstName = "John";
// //? Explanation: This is a valid variable name. It starts with a letter, and the subsequent characters include letters, numbers, and an underscore. It follows JavaScript naming rules.
// console.log(my_firstName);

// var _myLastName$ = "Doe";
// //? Explanation: This is a valid variable name. It starts with an underscore, and the subsequent characters include letters, numbers, and a dollar sign. It follows JavaScript naming rules.
// console.log(_myLastName$);

// // var 123myAge = 25;
// //? Explanation: This is not a valid variable name. It starts with a number, which is not allowed as per JavaScript naming rules. Variable names cannot begin with a digit.

// // var $cityName = "New York";
// //? Explanation: This is a valid variable name. It starts with a dollar sign, and the subsequent characters include letters. It follows JavaScript naming rules.
// console.log($cityName);

// var my@Email = "john@example.com";
// //? Explanation: This is not a valid variable name. It includes the special character '@', which is not allowed in JavaScript variable names. Only letters, numbers, underscores, and dollar signs are allowed.

// //! Additional Notes:
// //* - JavaScript variable names are case-sensitive (e.g., `myAge` and `myage` are different variables).
// //* - It's a good practice to use camelCase for variable names in JavaScript (e.g., `myFirstName`).
// //* - Avoid using reserved keywords (e.g., `var`, `let`, `const`, `if`, etc.) as variable names.
// //* - Use `const` for values that should not change and `let` for values that can change.
// //* - Use meaningful names for variables to make code more readable and maintainable.

// //* Example using `let` and `const`:
// let userAge = 25; // This value can be reassigned later.
// console.log(userAge);

// const pi = 3.14159; // This value cannot be reassigned.
// console.log(pi);

// //! Errors to Avoid:
// //* - Do not use spaces in variable names (e.g., `my Age` is invalid).
// //* - Do not use special characters (e.g., `my#Name` is invalid).
// //* - Ensure variable names are descriptive and meaningful (e.g., `temp` is less descriptive than `temperature`).
