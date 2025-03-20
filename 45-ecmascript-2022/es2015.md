# Modern JavaScript - EcmaScript 2015

---

## LET AND CONST - EcmaScript 2015

### let Keyword

The `let` keyword is used to declare variables with block scope. Variables declared with `let` are mutable, meaning their values can be reassigned.

```javascript
let favoriteLanguage = "JavaScript";
favoriteLanguage = "TypeScript";
console.log(favoriteLanguage);
```

### const Keyword

The `const` keyword is used to declare variables with block scope, but once a value is assigned to a `const` variable, it cannot be reassigned. `const` variables are immutable.

```javascript
const programmingLanguage = "JavaScript";
// programmingLanguage = "Python"; // This will cause an error
console.log(programmingLanguage);
```

### Demonstrating `var` Scope

```javascript
var city = "New York";

if (true) {
  var city = "Los Angeles";
  console.log(city); // Output: Los Angeles
}

city = "Chicago";
console.log(city); // Output: Chicago
```

### Demonstrating `let` Scope

```javascript
let country = "USA";

if (true) {
  let country = "Canada";
  console.log(country); // Output: Canada
}

country = "Mexico";
console.log(country); // Output: Mexico
```

### Demonstrating `const` Scope

```javascript
const continent = "Asia";

if (true) {
  const continent = "Europe";
  console.log(continent); // Output: Europe
}

// continent = "Africa"; // This will cause an error
console.log(continent); // Output: Asia
```

---

## TEMPLATE STRINGS - EcmaScript 2015

In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than single or double quotes.

### Example:

```javascript
let firstName = "John";
let lastName = "Doe";

// Using template string for string interpolation
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: John Doe
```

---

### String Interpolation

Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in `${}`.

```javascript
let age = 25;

// String interpolation with variable
let message = `I am ${age} years old.`;
console.log(message);
```

---

### Multi-line Strings

Template strings make it easy to create multi-line strings without the need for concatenation or escape characters.

```javascript
let multiLineString = `
  This is a multi-line
  string using template literals.
  It is much cleaner and easier to read.
`;

console.log(multiLineString);
```

---

### Expression Evaluation

```javascript
let number = 4;
console.log(`5 * ${number} = ${5 * number}`);
```

### Advantages:

1. **Readability**: Template strings make the code more readable, especially for complex string constructions.
2. **Conciseness**: They eliminate the need for explicit string concatenation and reduce the use of escape characters.
3. **Expression Flexibility**: Any JavaScript expression can be embedded within `${}`.
4. **Multi-line Support**: Creating multi-line strings is more straightforward.

---

## DEFAULT PARAMETERS

In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.

### Example:

```javascript
function sum(a = 10, b = 20) {
  return a + b;
}

console.log(sum()); // Output: 30
console.log(sum(5)); // Output: 25
console.log(sum(5, 15)); // Output: 20
```

---

## FAT ARROW FUNCTION

In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions.

### Example:

```javascript
const sum = function (a, b) {
  let result = `The sum of ${a} and ${b} is ${a + b}.`;
  console.log(result);
};

sum(5, 5);
```

### Converting to Fat Arrow Function:

```javascript
const sum = (a, b) => console.log(`The sum of ${a} and ${b} is ${a + b}.`);
sum(5, 5);
```

### Notes:

1. **Single Expression Functions**: If the function body consists of a single expression, the braces `{}` and the `return` keyword can be omitted.

```javascript
const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum(5, 5));
```

2. **Single Parameter Functions**: If there is only one parameter, the parentheses `()` around the parameter list can be omitted.

```javascript
const square = (a) => `The square of ${a} is ${a * a}`;
console.log(square(5));
```

3. **No Parameter Functions**: If there are no parameters, use an empty set of parentheses `()`.

```javascript
const greet = () => console.log("Please like, share, and subscribe!");
greet();
```

---

## Part 2 of Modern JavaScript

---

## Object Properties

### Traditional Way

Before ES6, object properties were assigned explicitly when the property name and variable name were the same:

```javascript
const userName = "John";
const userAge = 25;

// Traditional way
const user = { name: userName, age: userAge };
console.log(user);
```

### ES6 Shorthand Notation

With ES6, if the property name matches the variable name, you can use shorthand notation:

```javascript
const name = "John";
const age = 25;

// Shorthand notation
const user = { name, age };
console.log(user);
```

This makes object creation more concise and readable.

---

## Destructuring

Destructuring allows extracting values from arrays or objects and assigning them to variables in a concise and readable way.

### Destructuring Arrays

#### Extracting Specific Elements

```javascript
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(second); // Output: 20
```

#### Ignoring Elements

```javascript
const [, , third] = numbers;
console.log(third); // Output: 30
```

---

### Interview Question: Swap Two Variables Without Using a Third Variable

```javascript
let x = 10;
let y = 30;

// Swapping values using destructuring
[x, y] = [y, x];

console.log(x, y); // Output: 30 10
```

---

### Destructuring Objects

```javascript
const user = { name: "Alice", age: 28 };

// Extracting properties
const { name, age } = user;
console.log(name, age); // Output: Alice 28
```

#### Renaming Properties

```javascript
const { name: fullName, age: userAge } = user;
console.log(fullName, userAge); // Output: Alice 28
```

---

## Spread Operator

The **spread operator (`...`)** allows for copying, merging, and modifying arrays and objects efficiently.

### 1. Copying an Array

```javascript
const fruits = ["Apple", "Orange", "Mango", "Banana"];
const newFruits = [...fruits];
console.log(newFruits);
```

### 2. Concatenating Arrays

```javascript
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6]
```

### 3. Adding Elements to an Existing Array

```javascript
let fruits = ["Apple", "Orange"];
fruits.push(...["Grapes", "Mango"]);
console.log(fruits);
```

---

### Using Spread Operator with Strings

```javascript
const country = "INDIA";
console.log([...country]); // Output: ["I", "N", "D", "I", "A"]
```

---

## Rest Parameters

The **rest parameter (`...`)** allows functions to accept an indefinite number of arguments and store them in an array.

### Traditional Function

```javascript
const sum = (a, b, c, d) => {
  return a + b + c + d;
};

console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Using Rest Parameters

```javascript
const sum = (a, b, ...numbers) => {
  return numbers.reduce((total, num) => total + num, a + b);
};

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

#### **Note:**

- A function can only have **one** rest parameter.
- The rest parameter **must be the last parameter** in the function definition.

```javascript
// Incorrect usage of rest parameter
// function incorrectFunction(...one, ...two) {} // ❌
// function incorrectFunction(...wrong, arg2) {} // ❌
```

---

### Summary

| Feature          | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| Object Shorthand | Allows defining objects with concise property names when variable names match. |
| Destructuring    | Extracts values from arrays and objects easily.                                |
| Spread Operator  | Expands iterable elements like arrays and objects.                             |
| Rest Parameters  | Allows functions to accept multiple arguments dynamically.                     |

This concludes **Part 2 of Modern JavaScript** with advanced features introduced in ES6.

---
