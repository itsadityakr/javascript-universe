# JS Interview Questions #5
---

## **Expressions and Operators in JavaScript**  

---

## **Arithmetic & Assignment Operators**  
---

### **1. What is the difference between `==` and `===` in JavaScript?**  
#### - **`==` (Equality Operator)**  
  - Performs **type coercion** before comparing values.  
  - Converts values to a common type before checking equality.  
  ```js
  console.log(5 == "5"); // true (string "5" is converted to number 5)
  console.log(null == undefined); // true (they are loosely equal)
  ```
#### - **`===` (Strict Equality Operator)**  
  - **Does not** perform type coercion.  
  - Checks both **value** and **type** strictly.  
  ```js
  console.log(5 === "5"); // false (different types: number vs. string)
  console.log(null === undefined); // false (different types)
  ```

---

### **2. Why does `5 + "5"` return `"55"`, but `"5" - 5` returns `0`?**  
#### - **`+` Operator Triggers String Concatenation**  
  - If either operand is a string, JavaScript treats `+` as concatenation.  
  ```js
  console.log(5 + "5"); // "55"
  ```
#### - **`-` Operator Forces Numeric Conversion**  
  - `-` is an arithmetic operator, so `"5"` is converted to a number.  
  ```js
  console.log("5" - 5); // 0
  ```

---

### **3. What is the difference between `++i` and `i++`?**  
#### - **Pre-Increment (`++i`)**  
  - Increments the variable **before** returning the value.  
  ```js
  let i = 5;
  console.log(++i); // 6
  console.log(i);   // 6
  ```
#### - **Post-Increment (`i++`)**  
  - Returns the original value **before** incrementing.  
  ```js
  let j = 5;
  console.log(j++); // 5 (returns old value)
  console.log(j);   // 6 (after increment)
  ```

---

### **4. How does the exponentiation operator (`**`) work, and how does it differ from `Math.pow()`?**  
#### - **Exponentiation (`**`) Operator**  
  - Introduced in ES7 (`ES2016`), works like `Math.pow()`.  
  ```js
  console.log(2 ** 3); // 8
  ```
#### - **`Math.pow()` Method**  
  - An older method for exponentiation.  
  ```js
  console.log(Math.pow(2, 3)); // 8
  ```

---

### **5. What happens when you divide a number by zero in JavaScript?**  
#### - **Positive Infinity**  
  ```js
  console.log(5 / 0); // Infinity
  ```
#### - **Negative Infinity**  
  ```js
  console.log(-5 / 0); // -Infinity
  ```
#### - **NaN for `0/0`**  
  ```js
  console.log(0 / 0); // NaN
  ```

---

### **6. Why does `0.1 + 0.2 !== 0.3` in JavaScript, and how can it be fixed?**  
#### - **Floating-Point Precision Issue**  
  - JavaScript uses **IEEE 754** floating-point numbers, which cause precision errors.  
  ```js
  console.log(0.1 + 0.2); // 0.30000000000000004
  ```
#### - **Fix: Use `toFixed()` or `Number.EPSILON`**  
  ```js
  console.log((0.1 + 0.2).toFixed(2)); // "0.30-how-js-works"
  console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true
  ```

---

## **Comparison & Logical Operators**  
---

### **7. What is the difference between `null == undefined` and `null === undefined`?**  
#### - `null == undefined`: **True** because both represent "no value".  
#### - `null === undefined`: **False** because they are different types.  
```js
console.log(null == undefined); // true
console.log(null === undefined); // false
```

---

### **8. How do JavaScript’s logical operators (`&&`, `||`, `!`) behave with non-Boolean values?**  
#### - **`&&` (AND)** returns the first falsy value or the last value.  
  ```js
  console.log(5 && 0); // 0
  console.log(5 && "Hello"); // "Hello"
  ```
#### - **`||` (OR)** returns the first truthy value.  
  ```js
  console.log(0 || "Hello"); // "Hello"
  console.log(false || 5); // 5
  ```
#### - **`!` (NOT)** converts values to boolean and negates them.  
  ```js
  console.log(!0); // true
  ```

---

### **9. What is the difference between `&&` and `||` in JavaScript short-circuit evaluation?**  
#### - **`&&` stops at the first falsy value.**  
  ```js
  console.log(5 && 0 && "Hello"); // 0
  ```
#### - **`||` stops at the first truthy value.**  
  ```js
  console.log(null || "Default"); // "Default"
  ```

---

### **10. What does the `??` (nullish coalescing operator) do, and how does it differ from `||`?**  
#### - `??` only considers `null` and `undefined` as nullish values.  
  ```js
  console.log(null ?? "Default"); // "Default"
  console.log(0 ?? "Default"); // 0
  ```
#### - `||` treats **falsy** values (`0`, `""`, `false`) as nullish.  
  ```js
  console.log(0 || "Default"); // "Default"
  ```

---

### **11. How does the ternary operator (`? :`) work, and when should it be used?**  
#### - **Syntax:** `condition ? expr1 : expr2`  
```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---

## **Bitwise & Type Operators**  
---

### **12. What are bitwise operators, and how do they work in JavaScript?**  
#### - **Bitwise AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), Shift (`<<`, `>>`)**  
  ```js
  console.log(5 & 1); // 1 (0101 & 0001 = 0001)
  console.log(5 | 1); // 5 (0101 | 0001 = 0101)
  ```

---

### **13. How does the `typeof` operator behave with different data types?**  
```js
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof null); // "object" (known JavaScript bug)
console.log(typeof undefined); // "undefined"
```

---

### **14. What is the purpose of the `instanceof` operator, and how does it work?**  
#### - Checks if an object is an instance of a class.  
```js
class Person {}
let obj = new Person();
console.log(obj instanceof Person); // true
```

---

### **15. How does the `delete` operator work, and can it delete variables?**  
#### - Deletes **object properties** but **not variables**.  
```js
let obj = { name: "Alice" };
delete obj.name; 
console.log(obj); // {}
```

---

## **Miscellaneous & Advanced Operators**  
---

### **17. What is the difference between spread (`...`) and rest (`...`) operators?**  
#### - **Spread** expands elements.  
```js
let arr = [1, 2, 3];
console.log([...arr, 4, 5]); // [1, 2, 3, 4, 5]
```
#### - **Rest** gathers remaining arguments.  
```js
function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }
console.log(sum(1, 2, 3)); // 6
```

---

### **18. What does `void 0` do in JavaScript, and why is it used?**  
#### **Understanding `void` Operator**  
- The `void` operator evaluates an expression and returns `undefined`.  
- `void 0` is a commonly used way to produce `undefined` explicitly.  

#### **Why Use `void 0` Instead of `undefined`?**  
- In older JavaScript versions, `undefined` was not a reserved keyword and could be reassigned.  
- `void 0` **guarantees** an `undefined` value, regardless of environment modifications.  
- Example:  
  ```js
  var undefined = "Hello"; 
  console.log(undefined); // "Hello"
  console.log(void 0); // undefined
  ```

#### **Modern Usage**  
- Since **ES5**, `undefined` is read-only, so `void 0` is rarely needed today.

---

### **19. What are tagged template literals, and how do they work?**  
#### **What are Template Literals?**  
- Template literals use backticks (`` ` ``) and allow interpolation with `${}`.  
  ```js
  let name = "Alice";
  console.log(`Hello, ${name}!`); // "Hello, Alice!"
  ```

#### **Tagged Template Literals**  
- A **tag function** processes a template literal before it's interpolated.  
- The tag function receives an **array of string parts** and **substitutions** separately.  

#### **Example: Custom Tag Function**  
```js
function tag(strings, ...values) {
    console.log(strings); // ["Hello, ", "! How are you?"]
    console.log(values); // ["Alice"]
    return strings[0] + values[0].toUpperCase() + strings[1];
}

let name = "Alice";
console.log(tag`Hello, ${name}! How are you?`);  
// Output: "Hello, ALICE! How are you?"
```

#### **Use Cases**  
- **Sanitizing user input** to prevent XSS attacks.
- **Custom formatting** for dates, currency, or localization.
- **Logging or debugging** template literals.

---

### **20. How does the optional chaining operator (`?.`) work, and when should it be used?**  
#### **What is Optional Chaining (`?.`)?**  
- **Prevents errors** when accessing deeply nested properties that may be `null` or `undefined`.  
- Instead of throwing an error, it returns `undefined` if a property does not exist.

#### **Example: Without Optional Chaining**  
```js
let user = {}; 
console.log(user.profile.name); // TypeError: Cannot read property 'name' of undefined
```

#### **Example: With Optional Chaining**  
```js
let user = {}; 
console.log(user.profile?.name); // undefined (No error!)
```

#### **How It Works**  
- **Access object properties safely:**  
  ```js
  console.log(user?.profile?.name); // undefined
  ```
- **Call functions safely:**  
  ```js
  let obj = { greet: () => "Hello" };
  console.log(obj.greet?.()); // "Hello"
  console.log(obj.unknownMethod?.()); // undefined (No error!)
  ```
- **Access array elements safely:**  
  ```js
  let arr = null;
  console.log(arr?.[0]); // undefined (No error!)
  ```

#### **Use Cases**  
- Prevents `TypeError` when working with **optional data structures**.  
- Useful for API responses where some fields may be missing.  
- Helps simplify **long conditional checks**.  

---


![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)