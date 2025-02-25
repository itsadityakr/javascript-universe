# JS Interview Questions #3
---
## **Data Types in JavaScript**

---

### 1. What are the different data types available in JavaScript?  
#### JavaScript has **seven primitive data types** and **one non-primitive data type**:  
   - **Primitive types**:  
     1. `Number` – Represents both integer and floating-point numbers. Example: `let num = 42;`  
     2. `String` – Represents text. Example: `let str = "Hello";`  
     3. `Boolean` – Represents `true` or `false`. Example: `let isTrue = true;`  
     4. `Undefined` – A variable that has been declared but not assigned a value. Example: `let x;`  
     5. `Null` – Represents an intentional absence of value. Example: `let y = null;`  
     6. `Symbol` – Represents unique values (introduced in ES6). Example: `let sym = Symbol("id");`  
     7. `BigInt` – Represents large integers beyond `Number.MAX_SAFE_INTEGER`. Example: `let big = 9007199254740991n;`  

   - **Non-primitive type**:  
     - `Object` – A collection of key-value pairs. Example: `let obj = { name: "John", age: 30 };`  

---

### 2. What is the difference between primitive and non-primitive (reference) data types in JavaScript?  
#### - **Primitive Data Types** are immutable and stored directly in memory. They are copied by **value**.  
   ```js
   let a = 10;
   let b = a; // b gets a copy of a
   b = 20;
   console.log(a); // 10 (unchanged)
   ```
#### - **Non-Primitive Data Types (Objects)** are mutable and stored as **references** in memory.  
   ```js
   let obj1 = { name: "Alice" };
   let obj2 = obj1; // obj2 references obj1
   obj2.name = "Bob";
   console.log(obj1.name); // "Bob" (affected by obj2 change)
   ```

---

### 3. How does JavaScript handle dynamic typing? Provide examples.  
#### JavaScript is **dynamically typed**, meaning variables can hold values of different types at runtime.  
   ```js
   let x = 10; // Number
   x = "Hello"; // Now a String
   x = true; // Now a Boolean
   ```

---

### 4. What is the difference between `null` and `undefined` in JavaScript?  
#### - `null` is an **intentional absence** of a value.  
#### - `undefined` means a variable has been **declared but not assigned** a value.  
   ```js
   let a = null;
   let b;
   console.log(a); // null
   console.log(b); // undefined
   ```

---

### 5. Why does `typeof null` return `"object"`? Is this a bug in JavaScript?  
#### Yes, this is a **historical bug** in JavaScript due to its early implementation. `null` was incorrectly classified as an object and remains for backward compatibility.  
   ```js
   console.log(typeof null); // "object"
   ```

---

### 6. What are `Symbol` and `BigInt` in JavaScript, and when should they be used?  
#### - `Symbol` is used to create **unique** property keys to avoid naming conflicts.  
   ```js
   const sym1 = Symbol("id");
   const sym2 = Symbol("id");
   console.log(sym1 === sym2); // false
   ```
#### - `BigInt` is used for large numbers beyond `Number.MAX_SAFE_INTEGER`.  
   ```js
   const big = 123456789012345678901234567890n;
   console.log(big + 1n); // Works fine
   ```

---

### 7. What is type coercion, and how does JavaScript implicitly convert types?  
#### Type coercion is JavaScript’s automatic conversion of values between types.  
   ```js
   console.log(5 + "5"); // "55" (number to string)
   console.log("10" - 5); // 5 (string to number)
   console.log(true + 1); // 2 (boolean to number)
   ```

---

### 8. What are truthy and falsy values in JavaScript? Provide examples.  
#### - **Falsy values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`  
   ```js
   if (!0) console.log("Falsy"); // "Falsy"
   ```
#### - **Truthy values**: Everything else, including `"0"`, `"false"`, `{}`, `[]`  
   ```js
   if ("0") console.log("Truthy"); // "Truthy"
   ```

---

### 9. What is the difference between `==` and `===` in JavaScript?  
#### - `==` allows type coercion, while `===` does not.  
   ```js
   console.log(5 == "5"); // true
   console.log(5 === "5"); // false
   ```

---

### 10. How does JavaScript handle floating-point precision issues?  
#### JavaScript uses **IEEE 754 floating-point arithmetic**, which can cause rounding errors.  
   ```js
   console.log(0.1 + 0.2); // 0.30000000000000004
   ```

---

### 11. Why does `0.1 + 0.2 !== 0.3` in JavaScript? How can this be fixed?  
#### JavaScript cannot represent 0.1 and 0.2 exactly in binary. Fix it using `.toFixed()` or `Number.EPSILON`.  
   ```js
   console.log((0.1 + 0.2).toFixed(2)); // "0.30"
   console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
   ```

---

### 12. What is the `instanceof` operator, and how does it differ from `typeof`?  
#### - `typeof` returns a **string** describing the variable type.  
#### - `instanceof` checks if an object belongs to a certain **class or prototype chain**.  
   ```js
   console.log(typeof {}); // "object"
   console.log([] instanceof Array); // true
   ```

---

### 13. How do you check if a variable is an object in JavaScript?  
#### Use `typeof` and `instanceof`.  
   ```js
   console.log(typeof {} === "object" && !Array.isArray({})); // true
   ```

---

### 14. How can you convert a string to a number in JavaScript?  
#### Use `Number()`, `parseInt()`, or `parseFloat()`.  
   ```js
   console.log(Number("42")); // 42
   console.log(parseInt("42px")); // 42
   console.log(parseFloat("3.14")); // 3.14
   ```

---

### 15. What is the difference between `parseInt()`, `parseFloat()`, and `Number()`?  
#### - `Number()` converts the entire string (fails if non-numeric characters are present).  
#### - `parseInt()` converts up to the first non-digit character.  
#### - `parseFloat()` converts floating-point numbers.  
   ```js
   console.log(Number("42px")); // NaN
   console.log(parseInt("42px")); // 42
   console.log(parseFloat("3.14px")); // 3.14
   ```

---

### 16. How do you determine if a value is NaN (Not-a-Number) in JavaScript?  
#### Use `isNaN()` or `Number.isNaN()`.  
   ```js
   console.log(isNaN("hello")); // true
   console.log(Number.isNaN("hello")); // false
   ```

---

### 17. How do JavaScript’s loosely typed nature and automatic type conversion impact performance and debugging?  
#### - **Pros**: Flexibility, easier to write code  
#### - **Cons**: Unexpected behaviors, hard-to-trace bugs  
   ```js
   console.log([] + []); // "" (unexpected behavior)
   console.log([] + {}); // "[object Object]"
   ```
---

![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)