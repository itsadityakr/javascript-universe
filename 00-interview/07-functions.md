# JS Interview Questions #7
---

## **Functions**  

---

### **1. What is the difference between a function declaration and a function expression?**  

#### **Important Terms:**  
- **Function Declaration:** A function defined using the `function` keyword at the top level of a script or block.  
- **Function Expression:** A function assigned to a variable.  

#### **Answer:**  
A **function declaration** defines a function with a specified name and allows it to be **hoisted**, meaning it can be called before its definition in the code.  

Example:  
```javascript
function greet() {
    console.log("Hello!");
}
```
A **function expression**, on the other hand, assigns a function to a variable. It is **not hoisted**, meaning it cannot be called before the line where it is defined.  

Example:  
```javascript
const greet = function() {
    console.log("Hello!");
};
```

---

### **2. What are first-class functions in JavaScript, and why are they important?**  

#### **Important Terms:**  
- **First-Class Functions:** Functions treated as variables (can be assigned, passed as arguments, and returned from other functions).  
- **Higher-Order Functions:** Functions that take other functions as arguments or return functions.  

#### **Answer:**  
JavaScript treats functions as **first-class citizens**, meaning functions can:  
1. Be assigned to variables  
2. Be passed as arguments to other functions  
3. Be returned from other functions  

Example:  
```javascript
function sayHello() {
    return "Hello";
}

function greet(fn) {
    console.log(fn());
}

greet(sayHello); // Output: Hello
```
**Importance:**  
First-class functions allow **functional programming**, callback functions, and higher-order functions like `map()`, `filter()`, and `reduce()`.

---

### **3. What is the difference between named and anonymous functions?**  

#### **Important Terms:**  
- **Named Function:** A function with a name identifier.  
- **Anonymous Function:** A function without a name.  

#### **Answer:**  
A **named function** has a specific name, making debugging easier.  
```javascript
function add(a, b) {
    return a + b;
}
```
An **anonymous function** does not have a name and is often used inside expressions.  
```javascript
const multiply = function(a, b) {
    return a * b;
};
```
**Key Difference:** Named functions improve stack trace readability, whereas anonymous functions are useful for short-lived tasks.

---

### **4. How do arrow functions differ from regular function expressions?**  

#### **Important Terms:**  
- **Arrow Function:** A shorter syntax introduced in ES6.  
- **Lexical `this`:** Arrow functions do not have their own `this`, they inherit from their enclosing scope.  

#### **Answer:**  
Arrow functions have a more concise syntax and do not bind their own `this` context.  

Example:  
```javascript
const greet = () => console.log("Hello!");
```
Key differences:  
1. **Shorter syntax**: `const sum = (a, b) => a + b;`  
2. **No `this` binding**: Useful in event listeners or object methods.  

```javascript
function regularFunction() {
    console.log(this); // Depends on how it is called
}

const arrowFunction = () => {
    console.log(this); // Inherits `this` from surrounding scope
};
```

---

### **5. What is an Immediately Invoked Function Expression (IIFE), and when should it be used?**  

#### **Important Terms:**  
- **IIFE:** A function that executes immediately after it is defined.  
- **Encapsulation:** Keeps variables private within the function scope.  

#### **Answer:**  
An **IIFE (Immediately Invoked Function Expression)** is a function that runs immediately after it is created.  
```javascript
(function() {
    console.log("I am an IIFE!");
})();
```
**Use Cases:**  
1. **Encapsulation** – Prevents global variable pollution.  
2. **Module pattern** – Used for private variables.  

Example:  
```javascript
const counter = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
})();
```
This keeps `count` private.

---

### **6. How does function scope work in JavaScript?**  

#### **Important Terms:**  
- **Scope:** The area where a variable is accessible.  
- **Local Scope:** Variables declared inside a function are accessible only within that function.  
- **Global Scope:** Variables declared outside any function are accessible anywhere.  

#### **Answer:**  
Functions create a **local scope**, meaning variables defined inside a function are not accessible outside.  

Example:  
```javascript
function example() {
    let a = 10; // Local scope
    console.log(a);
}
console.log(a); // Error: a is not defined
```
Variables declared with `var` are **function-scoped**, while `let` and `const` are **block-scoped**.

---

### **7. What is a closure, and how does it work? Provide an example.**  

#### **Important Terms:**  
- **Closure:** A function that retains access to its parent scope even after the parent has finished execution.  

#### **Answer:**  
A **closure** is when a function "remembers" variables from its parent scope even after the parent function has executed.  

Example:  
```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2
```
Closures are useful for **data hiding and maintaining state**.

---

### **8. What are the use cases of closures in real-world applications?**  

#### **Use Cases:**  
1. **Data Privacy** – Variables inside closures cannot be accessed directly.  
2. **Memoization** – Store previously computed values for optimization.  
3. **Event Listeners** – Maintain state in event handling.  
4. **SetTimeout/SetInterval** – Store variables for delayed execution.  

Example:  
```javascript
function createCounter() {
    let count = 0;
    return () => count++;
}

const counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
```
Closures **keep data safe and prevent accidental modifications**.

---

### **9. How does JavaScript handle variable hoisting inside functions?**  

#### **Important Terms:**  
- **Hoisting:** JavaScript moves variable and function declarations to the top of their scope before execution.  

#### **Answer:**  
Function declarations are **hoisted entirely**, while variables are hoisted **without values**.  

Example:  
```javascript
console.log(x); // Undefined
var x = 5;
```
Function declarations:  
```javascript
greet(); // Works!
function greet() {
    console.log("Hello");
}
```
**Function expressions are not hoisted!**  
```javascript
console.log(sayHi); // Undefined
var sayHi = function() {
    console.log("Hi");
};
```

---

### **10. What are higher-order functions, and how are they used?**  

#### **Important Terms:**  
- **Higher-Order Function:** A function that takes another function as an argument or returns a function.  

#### **Answer:**  
A **higher-order function** is a function that **accepts another function as a parameter** or **returns a function**.  

Example:  
```javascript
function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
console.log(operate(5, 3, add)); // Output: 8
```
**Common Higher-Order Functions:**  
- `map()`, `filter()`, `reduce()`  
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```
Higher-order functions **increase reusability and modularity**.  

---

### **11. How does JavaScript handle default parameters in functions?**  

#### **Important Terms:**  
- **Default Parameters:** Allow setting default values for function arguments.  

#### **Answer:**  
Default parameters prevent errors when an argument is missing.  
```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```
**Use Cases:**  
- Avoid `undefined` values.  
- Reduce the need for conditional checks.  

---

### **12. What is the purpose of the `arguments` object in functions?**  

#### **Important Terms:**  
- **`arguments` Object:** A built-in array-like object containing function parameters.  

#### **Answer:**  
The `arguments` object allows access to all passed parameters, even if they are not explicitly defined.  
```javascript
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```
**Limitations:**  
- Not available in arrow functions.  
- Modern JavaScript uses the **rest parameter (`...args`)** instead.  
```javascript
const sum = (...args) => args.reduce((acc, num) => acc + num, 0);
```

---

### **13. What is function currying, and how can it be implemented?**  

#### **Important Terms:**  
- **Currying:** Transforming a function with multiple arguments into a sequence of functions, each taking one argument.  

#### **Answer:**  
Currying makes functions more reusable and allows partial application.  

Example:  
```javascript
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // Output: 10
```
Using **arrow functions**:  
```javascript
const multiply = a => b => a * b;
console.log(multiply(3)(4)); // Output: 12
```

---

### **14. What is memoization, and how can it improve function performance?**  

#### **Important Terms:**  
- **Memoization:** Caching function results to improve performance.  

#### **Answer:**  
Memoization avoids redundant computations by storing previously calculated results.  

Example:  
```javascript
function memoizedFactorial() {
    let cache = {};
    return function factorial(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return 1;
        return (cache[n] = n * factorial(n - 1));
    };
}

const factorial = memoizedFactorial();
console.log(factorial(5)); // Output: 120 (computed)
console.log(factorial(5)); // Output: 120 (cached)
```
**Use Cases:**  
- Optimizing recursive functions.  
- Improving performance in complex calculations.  

---

### **15. How does JavaScript handle recursion, and what are the risks of deep recursion?**  

#### **Important Terms:**  
- **Recursion:** A function calling itself.  
- **Stack Overflow:** Too many recursive calls can exhaust memory.  

#### **Answer:**  
Recursion is useful for problems like tree traversal but may cause a stack overflow if too deep.  

Example:  
```javascript
function countdown(n) {
    if (n <= 0) return;
    console.log(n);
    countdown(n - 1);
}

countdown(5);
```
**Risks of deep recursion:**  
- **Call Stack Limit:** Exceeding the maximum call stack size.  
- **Memory Consumption:** Each function call occupies stack space.  

**Solution:** Use **tail recursion** or **iterative solutions** when possible.

---

### **16. What is a pure function, and why is it important in functional programming?**  

#### **Important Terms:**  
- **Pure Function:** Always returns the same output for the same input and has no side effects.  

#### **Answer:**  
A **pure function** ensures predictable behavior and avoids side effects.  

Example:  
```javascript
function add(a, b) {
    return a + b;
}
```
**Benefits:**  
- Easier to test.  
- Supports functional programming.  
- Prevents unintended changes to global state.  

**Impure function example:**  
```javascript
let total = 0;
function addToTotal(value) {
    total += value; // Side effect
}
```

---

### **17. Write a function that checks if a given string is a palindrome.**  

```javascript
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

---

### **18. Write a recursive function to calculate the factorial of a number.**  

```javascript
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

---

### **19. Write a function that returns another function to demonstrate closures.**  

```javascript
function outerFunction(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

const greetAlice = outerFunction("Alice");
greetAlice(); // Output: Hello, Alice!
```

---

### **20. Write a function that throttles another function, ensuring it executes at most once per second.**  

```javascript
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}

const logMessage = throttle(() => console.log("Throttled Function Executed"), 1000);

setInterval(logMessage, 300); // Executes at most once per second
```

---

### **21. Write a function that deep clones an object without modifying the original.**  

```javascript
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 42;

console.log(original.b.c); // Output: 2 (unchanged)
```

For better deep cloning with support for functions and special objects, use:  
```javascript
function deepClone(obj) {
    return structuredClone(obj);
}
```


---

![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)