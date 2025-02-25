# JS Interview Questions #1 
---
## **Types of JavaScript**  

---

### **1. What are the different data types in JavaScript?**  

JavaScript has **two main categories** of data types:  

#### **A. Primitive Data Types**  
These are the most basic types, stored directly in memory. They include:  

1. **Number** – Represents both integers and floating-point numbers. Example: `let x = 10;`  
2. **String** – Represents text, enclosed in quotes. Example: `let name = "John";`  
3. **Boolean** – Represents `true` or `false`. Example: `let isActive = true;`  
4. **Undefined** – A variable that has been declared but not assigned a value. Example: `let x;`  
5. **Null** – Represents an intentional absence of value. Example: `let y = null;`  
6. **Symbol (ES6)** – Unique and immutable values, often used for object properties. Example: `let sym = Symbol("id");`  
7. **BigInt (ES11)** – Used for very large integers. Example: `let bigNum = 12345678901234567890n;`  

#### **B. Non-Primitive (Reference) Data Types**  
These store references to memory locations.  

1. **Object** – A collection of key-value pairs. Example:  
   ```js
   let person = { name: "John", age: 30 };
   ```
2. **Array** – A list-like object. Example:  
   ```js
   let numbers = [1, 2, 3, 4];
   ```
3. **Function** – A reusable block of code. Example:  
   ```js
   function greet() { console.log("Hello!"); }
   ```

---

### **2. How does JavaScript handle dynamic typing?**  

JavaScript is **dynamically typed**, meaning:  

- A variable's type is determined **at runtime**.  
- The type of a variable can change during execution.  

Example:  
```js
let x = 10;  // x is a number
x = "Hello"; // Now x is a string
x = true;    // Now x is a boolean
```
This flexibility allows ease of use but can also lead to unexpected errors.

---

### **3. What is the difference between `undefined` and `null` in JavaScript?**  

| Feature  | `undefined` | `null` |
|----------|------------|--------|
| Default value? | Yes, when a variable is declared but not assigned a value | No, must be explicitly assigned |
| Type | `undefined` | `object` (historical bug in JavaScript) |
| Meaning | "Not assigned yet" | "No value or empty" |

Example:  
```js
let a;         // Undefined
let b = null;  // Null
console.log(a); // Output: undefined
console.log(b); // Output: null
```

---

### **4. Difference between `var`, `let`, and `const`**  

| Feature | `var` | `let` | `const` |
|---------|------|------|--------|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Reassignable? | Yes | Yes | No |
| Hoisting | Yes (initialized as `undefined`) | Yes (but in **Temporal Dead Zone**) | Yes (also in TDZ) |

Example:  
```js
var x = 10;  
let y = 20;  
const z = 30;  
x = 15;  // Works  
y = 25;  // Works  
z = 35;  // Error: Assignment to constant variable
```

---

### **5. What are primitive and non-primitive data types in JavaScript?**  

- **Primitive Data Types** store values **directly** in memory (immutable).  
- **Non-Primitive Data Types** store a **reference** to the value in memory.  

Example:  
```js
let a = "Hello";  // Primitive, stored directly
let b = { name: "Alice" };  // Non-primitive, stored by reference
```

---

### **6. How does JavaScript treat functions as first-class citizens?**  

JavaScript functions can:  

- Be **assigned** to variables  
- Be **passed** as arguments  
- Be **returned** from other functions  

Example:  
```js
function greet() {
    return "Hello!";
}
let sayHello = greet;  
console.log(sayHello());  // Output: Hello!
```

---

### **7. What is type coercion in JavaScript?**  

Type coercion is **automatic type conversion** when different types are used in an operation.  

Example:  
```js
console.log("5" + 2);  // "52" (String concatenation)
console.log("5" - 2);  // 3 (String converted to Number)
```

---

### **8. Difference between `==` and `===`**  

| Operator | Checks | Example |
|----------|--------|---------|
| `==` | Value (allows type conversion) | `"5" == 5` → `true` |
| `===` | Value & Type (strict) | `"5" === 5` → `false` |

---

### **9. How can you determine the type of a variable in JavaScript?**  

Using the `typeof` operator:  
```js
console.log(typeof 42);      // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof null);    // "object" (JavaScript bug)
console.log(typeof undefined); // "undefined"
```

---

### **10. Limitations of `typeof`**  

- `typeof null` returns `"object"` instead of `"null"`.  
- Cannot differentiate between `array` and `object`.  

To check if a variable is an array:  
```js
console.log(Array.isArray([1, 2, 3])); // true
```

---

### **11. How does JavaScript handle automatic type conversion?**  

JS converts values automatically in certain situations:  

```js
console.log(5 + "5");  // "55" (number converted to string)
console.log(5 - "2");  // 3 (string converted to number)
console.log(false + 5); // 5 (false → 0)
```

---

### **12. What are template literals?**  

Template literals allow string interpolation:  

```js
let name = "Alice";
console.log(`Hello, ${name}!`);  // "Hello, Alice!"
```

---

### **13. How can you check if a variable is an array?**  

Using `Array.isArray()` method:  
```js
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ a: 1 }));  // false
```

---

### **14. How does JavaScript handle numbers?**  

JavaScript has **only one type of number** (`Number`).  

- Floating-point operations can be **inaccurate** due to binary representation:  
  ```js
  console.log(0.1 + 0.2); // 0.30000000000000004
  ```
- Use `toFixed()` or `toPrecision()` to fix precision issues.

---

### **15. Scope in JavaScript (`var`, `let`, `const`)**  

| Type | Defined inside | Accessible outside? |
|------|--------------|------------------|
| Global Scope | Whole script | Yes |
| Function Scope | Function | No |
| Block Scope | `{}` (with `let`, `const`) | No |

Example:  
```js
function example() {
    let a = 10;  // Block scope
    var b = 20;  // Function scope
}
console.log(b);  // Error
```

---

![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)