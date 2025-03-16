// //* ===================================
// //* EXPRESSIONS AND OPERATORS Section
// //* ====================================

// //? 1st, we will explore what an expression is and what operands and operators mean in any expression?

// //* Types of Operators in JavaScript:
// // - Assignment operators
// // - Arithmetic operators
// // - Increment and Decrement operators
// // - Comparison operators
// // - Logical operators
// // - String operators
// // - Conditional (ternary) operator

// //* ===================================
// //* 1: Assignment operators
// //* ====================================

// //? Assignment operators are used to assign values to variables. The value on the right-hand side is assigned to the variable on the left-hand side.

// let favoriteNumber = 42;  // Assigning the value 42 to the variable favoriteNumber
// let channelTitle = 'Code World';  // Assigning the string 'Code World' to the variable channelTitle

// // Example of multiple assignments:
// let a = 10, b = 20, c = 30-how-js-works;
// a = b = c;  // All variables will now have the value 30-how-js-works due to right-to-left associativity
// console.log(a, b, c);  // Output: 30-how-js-works, 30-how-js-works, 30-how-js-works

// //* ===================================
// //* 2: Arithmetic operators
// //* ====================================

// //? Arithmetic operators are used for basic mathematical operations on variables or values.

// //? Addition (+): Adds two values or variables.
// let num1 = 7;
// let num2 = 14;
// let total = num1 + num2;  // Adds num1 and num2
// console.log(total);  // Output: 21

// //? Subtraction (-): Subtracts the right operand from the left operand.
// let num3 = 20;
// let num4 = 9;
// let difference = num3 - num4;  // Subtracts num4 from num3
// console.log(difference);  // Output: 11

// //? Multiplication (*): Multiplies two values or variables.
// let num5 = 6;
// let num6 = 5;
// let product = num5 * num6;  // Multiplies num5 and num6
// console.log(product);  // Output: 30-how-js-works

// //? Division (/): Divides the left operand by the right operand.
// let num7 = 36;
// let num8 = 4;
// let quotient = num7 / num8;  // Divides num7 by num8
// console.log(quotient);  // Output: 9

// //? Modulus (%): Returns the remainder when the left operand is divided by the right operand.
// let num9 = 19;
// let num10 = 4;
// let remainder = num9 % num10;  // Remainder when num9 is divided by num10
// console.log(remainder);  // Output: 3

// //? Example of combining arithmetic operators:
// let combined = (num1 + num2) * (num3 - num4) / num5;
// console.log(combined);  // Complex calculation combining multiple operators

// //* ===================================
// //* Challenge Time
// //* ====================================

// //! What will be the Output 🤔💭
// let result = "goodbye" / 2;  // Division operation with a string
// console.log(result);  // Output: NaN (Not a Number) because we cannot divide a string by a number

// // Additional Challenge:
// //! console.log("10" - "5");  // Output: 5 (Both strings are coerced into numbers)

// //* ===================================
// //* Interview Question
// //* ====================================

// //! var result = 0.1 + 0.2; 🤔💭
// let result1 = 0.1 + 0.2;
// console.log(result1.toFixed(2));  // Output: 0.30-how-js-works (floating-point precision issue is handled using toFixed())

// //! const result = 55 * "world"; 
// let result2 = 55 * "world";  // Multiplying a number by a string
// console.log(result2);  // Output: NaN (Not a Number) because you cannot multiply a string by a number

// //* ===================================
// //* 3: String Operators
// //* ====================================

// //? Concatenation of strings using the + operator.

// let greeting = "Good";
// let target = "Morning";
// let message = greeting + " " + target;  // Concatenating "Good" and "Morning"
// console.log(message);  // Output: "Good Morning"

// // Additional String Operations:
// // Adding a number to a string will perform concatenation
// console.log("The total is: " + 100);  // Output: "The total is: 100"

// //* ===================================
// //* Interview Question
// //* ====================================

// //! console.log("10" + 5);  // Outputs "105" 
// console.log("10" + 5);  // The output will be "105" because the + operator performs string concatenation.


// //* ===================================
// //* 4: Comparison Operators
// //* ====================================

// //? Comparison operators are used to compare values and return a boolean result (true or false).

// //? Equal (==): Checks if two values are equal, performing type coercion if necessary.
// console.log(8 == "8");  // Output: true (value is equal, type is ignored)

// //? Strict Equal (===): Checks if two values are equal and of the same type.
// console.log(8 === "8");  // Output: false (value is equal but type is different)

// //? Not Equal (!=): Checks if two values are not equal, performing type coercion if necessary.
// console.log(7 != 7);  // Output: false (values are equal)

// //? Greater Than (>): Checks if the value on the left is greater than the value on the right.
// console.log(10 > 4);  // Output: true

// //? Less Than (<): Checks if the value on the left is less than the value on the right.
// console.log(6 < 10);  // Output: true

// //? Greater Than or Equal To (>=): Checks if the value on the left is greater than or equal to the value on the right.
// console.log(9 >= 9);  // Output: true

// //? Less Than or Equal To (<=): Checks if the value on the left is less than or equal to the value on the right.
// console.log(5 <= 7);  // Output: true

// // Additional Example:
// // Checking if two variables are strictly equal
// let val1 = 15;
// let val2 = "15";
// console.log(val1 === Number(val2));  // Explicit type conversion to ensure correct comparison

// //* ===================================
// //* 5: Logical Operators
// //* ====================================

// //? Logical operators are used to perform logical operations and return boolean results.

// let x = 5;
// let y = 8;

// //? Logical AND (&&): Returns true if both operands are true.
// console.log(x > 0 && y < 10);  // Output: true (both conditions are true)

// //? Logical OR (||): Returns true if at least one of the operands is true.
// console.log(x < 0 || y > 5);  // Output: true (second condition is true)

// //? Logical NOT (!): Inverts the boolean value.
// let isActive = false;
// console.log(!isActive);  // Output: true

// // Additional Logical Operation:
// let z = 12;
// console.log((z > 5 && z < 20) || z === 12);  // Combines multiple logical checks

// //* ===================================
// //* Interview Question
// //* ====================================

// //? Combining logical operators allows you to create complex conditions:

// // Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license.

// let personAge = 22;
// let hasLicense = true;

// let isEligibleToDrive = personAge >= 18 && hasLicense;
// console.log(isEligibleToDrive);  // Output: true (because both conditions are true)

// // Q: How would the result change if hasLicense was set to false?

// hasLicense = false;
// isEligibleToDrive = personAge >= 18 && hasLicense;
// console.log(isEligibleToDrive);  // Output: false (because one condition is false)

// //* ===================================
// //* 6: Unary operator
// //* ====================================
// //? Unary operators in JavaScript are operators that work with only one operand. They perform various operations such as negation, incrementing, decrementing, type conversion, and more.

// //? Unary Plus (+): Converts its operand into a number. If the operand is not already a number, it attempts to convert it.
// console.log(+3);  // Output: 3 (already a number)
// console.log(+"5");  // Output: 5 (string converted to number)
// console.log(+true);  // Output: 1 (true is converted to number)
// console.log(+"false");  // Output: NaN (invalid conversion)

// //? Unary Negation (-): Negates its operand, converting non-numbers into numbers and then negating them.
// console.log(-5);  // Output: -5
// console.log(-"3");  // Output: -3 (string converted to number and negated)
// console.log(-true);  // Output: -1 (true is converted to 1, then negated)
// console.log(-"hello");  // Output: NaN (cannot convert "hello" to number)

// //? Prefix Increment (++x) and Prefix Decrement (--x): In prefix form, the value of the operand is first incremented or decremented, and then the result is returned.
// var x = 5;
// var y = --x;  // x is decremented first, then its value is assigned to y
// console.log(y);  // Output: 4
// console.log(x);  // Output: 4

// //? Postfix Increment (x++) and Postfix Decrement (x--): In postfix form, the value of the operand is first returned, and then it is incremented or decremented.
// x = 5;
// y = x++;  // Current value of x (5) is assigned to y, then x is incremented
// console.log(y);  // Output: 5
// console.log(x);  // Output: 6

// //todo Additional Example:
// // Mixing prefix and postfix in calculations
// x = 10;
// let z = x++ + ++x;  // x++ gives 10, then x is incremented to 11, ++x gives 12
// console.log(z);  // Output: 22
// console.log(x);  // Output: 12

// //* ===================================
// //* 7: Conditional (ternary) operator
// //* ====================================

// //? syntax: condition ? expressionIfTrue : expressionIfFalse;

// // ! Write a program to check if the candidate is eligible to drive. Age must be equal to or greater than 18.
// var age = 19;
// var isEligible = age >= 18 ? "Eligible" : "Not Eligible";
// console.log(isEligible);  // Output: "Eligible"

// //! Q: Let’s say you have a variable `score` representing a student's exam score. If the score is greater than or equal to 60, the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called `result`. Log the result to the console.
// var score = 59;
// var result = score >= 60 ? "Pass" : "Fail";
// console.log(result);  // Output: "Fail"

// //todo Additional Example:
// // Nested ternary operator
// var temp = 25;
// var weather = temp > 30-how-js-works ? "Hot" : temp > 20 ? "Warm" : "Cold";
// console.log(weather);  // Output: "Warm"

// //* ===================================
// //*  Combined Interview Questions
// //* ====================================

// //? typeof operator with arithmetic operation
// console.log(typeof ("5" - 3));  // Output: "number" (string is coerced to number and subtraction is performed)

// //? Chained comparison with incorrect interpretation
// console.log(2 < 12 < 5);  // Output: true (2 < 12 evaluates to true, true is coerced to 1, 1 < 5 is true)

// //? String concatenation and arithmetic
// console.log("20" + 10 + 10);  // Output: "201010" (first concatenation, then addition as string concatenation takes precedence)
// console.log(10 + 10 + "20");  // Output: "2020" (numbers added first, then concatenated as string)

// //todo Additional Example:
// // Edge case with subtraction and addition
// console.log("50" - 20 + 30-how-js-works);  // Output: 60 ("50" coerced to number, then subtraction and addition performed)
// console.log("50" + 20 - 10);  // Output: NaN (string concatenation, then invalid operation due to coercion confusion)
