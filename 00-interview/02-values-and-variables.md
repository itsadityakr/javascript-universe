# JS Interview Questions #2
---
## **Values and Variables in JavaScript**

---

### **1. What are the rules for naming variables in JavaScript?**
####**Important Terms:**
- **Identifiers**: Names assigned to variables, functions, and objects.
- **Reserved Keywords**: Words like `let`, `var`, `const` that cannot be used as variable names.

####**Explanation:**
- Must begin with a letter, `_`, or `$`.
- Cannot be a reserved keyword (e.g., `let`, `var`, `const`).
- Case-sensitive (`myVar` and `myvar` are different).
- Should be descriptive and use camelCase by convention.

---

### **2. What is the difference between declaring a variable with `var`, `let`, and `const`?**
####**Important Terms:**
- **Scope**: Defines where a variable can be accessed.
- **Hoisting**: JavaScript moves variable declarations to the top of their scope.
- **Reassignment**: Whether a variable's value can be changed after declaration.

####**Explanation:**
| Feature | `var` | `let` | `const` |
|---------|------|------|--------|
| Scope | Function | Block | Block |
| Reassignable? | Yes | Yes | No |
| Hoisting | Yes (initialized as `undefined`) | Yes (Temporal Dead Zone) | Yes (Temporal Dead Zone) |

Example:
```js
var a = 10;
let b = 20;
const c = 30;
c = 35;  // Error
```


---

### **3. What happens when you use a variable without declaring it?**
####**Important Terms:**
- **Implicit Global Variable**: A variable created without `var`, `let`, or `const` is automatically global.

####**Explanation:**
If a variable is used without declaration, JavaScript creates it as a global variable (not recommended).
```js
x = 10; // Implicit global variable
console.log(x);
```

---
### **4. How does JavaScript handle variable hoisting? Provide examples.**
####**Important Terms:**
- **Hoisting**: JavaScript moves variable and function declarations to the top before execution.
- **Temporal Dead Zone (TDZ)**: The time between entering a scope and variable declaration where access causes an error.

####**Explanation:**
Hoisting moves variable declarations to the top of their scope before execution.
```js
console.log(a); // undefined
console.log(b); // ReferenceError
var a = 10;
let b = 20;
```

---
### **5. What is the difference between `undefined` and `not defined` in JavaScript?**
####**Important Terms:**
- **`undefined`**: A variable declared but not assigned a value.
- **`not defined`**: A variable that has never been declared.

####**Explanation:**
Example:
```js
let x;
console.log(x); // undefined
console.log(y); // ReferenceError: y is not defined
```

---
### **6. What happens when you reassign a `const` variable?**
####**Important Terms:**
- **Immutable**: `const` variables cannot be reassigned after declaration.

####**Explanation:**
Attempting to reassign a `const` variable throws an error.
```js
const pi = 3.14;
pi = 3.14159; // TypeError: Assignment to constant variable
```

---
### **7. What are global variables, and how do they impact JavaScript programs?**
####**Important Terms:**
- **Global Scope**: Variables accessible from anywhere in the program.

####**Explanation:**
Global variables are accessible from anywhere in the code but can lead to unexpected behavior.
```js
var globalVar = "I'm global";
function test() {
    console.log(globalVar);
}
test();
```

---

### **8. Why is it recommended to avoid using global variables?**
####**Important Terms:**
- **Namespace Pollution**: Too many global variables can cause conflicts.
- **Memory Leaks**: Global variables remain in memory until the program ends.

####**Explanation:**
- Can be modified anywhere, leading to conflicts.
- Harder to debug and maintain.
- Can cause memory leaks.

---

### **9. What is the difference between mutable and immutable variables in JavaScript?**
####**Important Terms:**
- **Mutable**: Can be modified after initialization (e.g., objects, arrays).
- **Immutable**: Cannot be changed after assignment (e.g., numbers, strings).

####**Explanation:**
Example:
```js
let arr = [1, 2, 3];
arr.push(4); // Allowed (mutable array)
let str = "Hello";
str[0] = "Y"; // No effect (immutable string)
```

---

### **10. What are the different ways to assign values to variables in JavaScript?**
####**Important Terms:**
- **Destructuring Assignment**: Extracting values from arrays or objects into variables.

####**Explanation:**
```js
let x = 10;
let name = "John";
let [a, b] = [1, 2];
```

---

### **11. How does JavaScript treat uninitialized variables?**
####**Important Terms:**
- **Default Value**: Uninitialized variables get the value `undefined`.

####**Explanation:**
```js
let x;
console.log(x); // undefined
```

---

### **12. Can you change the type of a variable after it has been declared?**
####**Important Terms:**
- **Dynamic Typing**: JavaScript allows variables to hold different data types over time.

####**Explanation:**
Yes, JavaScript allows dynamic typing.
```js
let x = 10;
x = "Hello";
console.log(typeof x); // string
```

---

### **13. Why does `NaN === NaN` return `false` in JavaScript?**
####**Important Terms:**
- **NaN (Not-a-Number)**: Represents an invalid number computation.

####**Explanation:**
`NaN` is not equal to itself.
```js
console.log(NaN === NaN); // false
```
To check for `NaN`, use:
```js
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true
```

---

### **14. How can you check if a variable has been declared but not assigned a value?**
####**Important Terms:**
- **`typeof` Operator**: Used to check the data type of a variable.

####**Explanation:**
```js
let x;
console.log(typeof x === "undefined"); // true
```
```js
if (typeof myVar === "undefined") {
    console.log("myVar is not assigned a value");
}
```

---

![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)