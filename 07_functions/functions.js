//* ===============================
//* Functions in JavaScript
//* ==============================

//? A function is a block of reusable code that performs a specific task or set of tasks.
//? Functions allow us to break down complex problems into smaller tasks, make our code more organized, and prevent repetitive code.

//! Why Use Functions? 
//? 1. **Reusability:** 
//?    - Functions allow you to define a piece of code once and reuse it multiple times without needing to rewrite it. 
//?    - For example, if you need to find the sum of numbers in multiple places in your code, you can create a single function to handle it.
//?    - **Real-world analogy:** Imagine a washing machine. You don't need to wash clothes by hand every time. The washing machine does it automatically when you press a button. Similarly, a function performs a task whenever you "call" it.
//? 2. **Modularity:** 
//?    - Functions help break down complex problems into smaller, manageable tasks. Each function can focus on a specific piece of logic, making your program easier to read and maintain.
//?    - **Real-world analogy:** Consider a car assembly line. Instead of assembling the car in one huge step, different workers handle different tasks, like installing the tires, the engine, etc. In programming, functions allow us to break down tasks like this.
//? 3. **Readability:** 
//?    - Named functions help explain what a particular section of code does. For example, `calculateSum` is clear and understandable, and it improves the overall readability of your code.
//? 4. **Debugging:** 
//?    - If there is an error in your program, you can focus on fixing the function that causes the issue without worrying about other parts of the program. Functions are isolated blocks of code, making it easier to debug.
//? 5. **Efficiency:** 
//?    - By avoiding repetition (with the DRY principle), functions make your code shorter and cleaner. This also reduces the likelihood of introducing bugs due to repeated code.
//?    - **Real-world analogy:** Imagine writing a letter to someone. Instead of rewriting your address and signature every time, you can simply reuse a template or stamp to save time and effort.

//* ===============================
//* Example Problem Without Functions:
//* ==============================

//? Three students want to find the sum of two numbers, but without using functions, the code looks like this:
//? This approach is repetitive and violates the DRY (Don't Repeat Yourself) principle, which says we should avoid repeating the same logic multiple times.

// 1st Student
var num1 = 5, num2 = 10; 
var total1 = num1 + num2; 
console.log(total1); // Output: 15

// 2nd Student
var num1 = 15, num2 = 15;
var total2 = num1 + num2;
console.log(total2); // Output: 30

// 3rd Student
var num1 = 55, num2 = 15;
var total3 = num1 + num2;
console.log(total3); // Output: 70

//? This solution is repetitive, and every time we want to calculate a sum, we need to write the same code. It's inefficient and error-prone.

//* ===============================
//* Solution: Use a Reusable Function
//* ==============================

//? Now, let's refactor the code using a function to calculate the sum. The goal is to create a function that we can call with different inputs to perform the same operation without repeating the code.

//* Function Declaration
//? We declare a function using the `function` keyword, followed by the name of the function and parentheses. The parameters inside the parentheses act as placeholders for values we provide when we call the function.

function addNumbers(a, b) {
  //? `a` and `b` are parameters. They represent the values (arguments) that the function will work with.
  return a + b; //? The function performs the addition and returns the result.
}

//? Function Calls:
console.log(addNumbers(5, 10)); // Output: 15
console.log(addNumbers(15, 50)); // Output: 65
console.log(addNumbers(25, 750)); // Output: 775

//? This solution is much cleaner. We've written the addition code once, and now we can call `addNumbers` with different arguments whenever we need to find a sum. This also allows us to modify the logic in one place if necessary.

//* ===============================
//* Function Declaration Syntax:
//* ==============================

//? The syntax for a function declaration looks like this:
//? `function functionName(parameter1, parameter2, ...) {}`
//? - `functionName` is the name of the function.
//? - `parameter1, parameter2, ...` are the parameters that the function will use to perform its task.

function greetStudent() {
  //? The greetStudent function doesn't need parameters because it's always going to display the same greeting.
  console.log("Hello! Welcome to the JavaScript course.");
}

//* Function Invocation (Calling a Function)
//? After defining a function, we call it to make it run. Calling a function is as simple as writing the function's name followed by parentheses.
//? If the function has parameters, we pass values (arguments) inside the parentheses when we call it.

greetStudent(); // Output: Hello! Welcome to the JavaScript course.

//* ===============================
//* Function Parameters and Arguments:
//* ==============================

//? Parameters are placeholders used in a function definition to represent the values that will be passed when the function is called.
//? Arguments are the actual values passed to the parameters when calling the function. 

function introducePerson(name, age) {
  //? `name` and `age` are parameters.
  console.log(`Hi, I'm ${name}, and I'm ${age} years old.`);
}

//? Here, we're calling the function and passing values for `name` and `age`:
introducePerson("Alice", 25); // Output: Hi, I'm Alice, and I'm 25 years old.
introducePerson("Bob", 30);   // Output: Hi, I'm Bob, and I'm 30 years old.

//? In these examples, "Alice" and 25 are the arguments passed to the function, and the function uses those values to execute its task.

//* ===============================
//* Anonymous Functions:
//* ==============================

//? An anonymous function is a function that does not have a name. It is often used as a function expression, meaning it can be assigned to a variable for later use.

//? Example of an anonymous function assigned to a variable:
const multiplyNumbers = function (x, y) {
  return x * y; // Multiplies two numbers.
};

//? Calling the anonymous function:
console.log(multiplyNumbers(6, 7)); // Output: 42

//? Anonymous functions are often used when we don’t need to reference the function elsewhere by name. They're commonly used as callbacks in event handling or for short operations.


//* ===============================
//* Arrow Functions:
//* ==============================

//? Arrow functions provide a shorter syntax for writing functions. They're especially useful for simple functions, like callbacks or one-liners. Arrow functions also don't bind their own `this` context, which can be helpful in certain situations.

//? Here is a basic arrow function:
const greetArrow = () => console.log("Hello from an Arrow Function!");
greetArrow(); // Output: Hello from an Arrow Function!

//? Arrow function with parameters:
const subtractNumbers = (a, b) => a - b; // Shorter syntax for functions that return a value.
console.log(subtractNumbers(15, 5)); // Output: 10

//* ===============================
//* IIFE - Immediately Invoked Function Expression:
//* ==============================

//? An IIFE is a function that runs immediately after it is defined. It doesn't need to be called later in the code because it's executed as soon as it’s declared.
//? IIFE helps avoid polluting the global namespace with unnecessary variables and functions.

(function () {
  console.log("This is an IIFE executing immediately!");
})(); // Output: This is an IIFE executing immediately.

//? IIFE with Parameters:
const sumResult = (function (num1, num2) {
  return num1 + num2;
})(5, 10);
console.log(`The sum from the IIFE is ${sumResult}`); // Output: The sum from the IIFE is 15

//? IIFEs are useful when you need a self-contained block of code that doesn’t interfere with the rest of the program.

//* ===============================
//* Calculator Function:
//* ==============================

//? Let's write a simple calculator function that can handle basic arithmetic operations.

const calculator = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      return number1 + number2; // Addition
    case "-":
      return number1 - number2; // Subtraction
    case "*":
      return number1 * number2; // Multiplication
    case "/":
      // Handle division by zero
      return number2 !== 0 ? number1 / number2 : "Division by zero is not allowed.";
    default:
      return "Invalid operator."; // If an unsupported operator is provided
  }
};

console.log(calculator(10, 5, "+")); // Output: 15
console.log(calculator(20, 0, "/")); // Output: Division by zero is not allowed.

//* ===============================
//* Reverse a String:
//* ==============================

//? Let's write a function to reverse a string without using the built-in `reverse()` method.

const reverseString = (text) => {
  let reversed = ""; // Initialize an empty string.
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i]; // Add each character in reverse order.
  }
  return reversed; // Return the reversed string.
};

console.log(reverseString("JavaScript")); // Output: tpircSavaJ

//* ===============================
//* Palindrome Checker:
//* ==============================

//? A palindrome is a word that reads the same backward as forward, like "level" or "radar".

const isPalindrome = (text) => {
  const reversed = reverseString(text); // Reuse the reverseString function.
  return text === reversed; // Check if the original text matches the reversed version.
};

console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//* ===============================
//* Best Practices:
//* ==============================

//? 1. **Use meaningful names for functions and variables.**
//?    - Function names like `calculateSum`, `reverseString`, and `greetStudent` describe their purpose clearly, making the code easier to understand.
//? 2. **Keep functions small and focused on a single task.**
//?    - A function should do one thing, and do it well. This makes it easier to test, debug, and maintain.
//? 3. **Avoid modifying global variables within functions.**
//?    - This helps prevent unexpected side effects that could break your code.
//? 4. **Use default parameters for optional arguments.**
//?    - JavaScript allows you to set default values for function parameters, which is helpful if some arguments may be omitted.

