### **JavaScript Values and Variables - Notes**

In JavaScript, **values** and **variables** are fundamental concepts essential for programming. Below is a detailed explanation with examples.

---

### **1. Values**
A **value** is any data that a program can manipulate. JavaScript supports various types of values:

- **Number**: `42`, `3.14`, `-7`
- **String**: `"Hello"`, `'World'`
- **Boolean**: `true`, `false`
- **Null**: Represents an intentional absence of any value (`null`).
- **Undefined**: A variable that has been declared but not assigned a value.
- **Object**: Complex data like `{ key: "value" }`
- **Array**: Ordered lists like `[1, 2, 3]`

---

### **2. Variables**
A **variable** is a container for storing values. It has:
- A **name**: Used to identify the variable.
- A **value**: The data assigned to the variable.

#### **Syntax for Declaring Variables**
- **Before ES6 (ES2015)**: `var`
- **After ES6**: `let` and `const` (preferred for better scoping and immutability).

---

### **3. Declaring Variables**
#### **Using `var`**
`var` declares variables globally or within the function scope. It does not respect block scoping.

```javascript
var myName = "Alice";
console.log(myName); // Output: Alice
```

#### **Using `let`**
`let` declares variables with block scope and allows reassignment.

```javascript
let age = 25;
console.log(age); // Output: 25

age = 30; // Reassignment is allowed
console.log(age); // Output: 30
```

#### **Using `const`**
`const` declares variables with block scope but does not allow reassignment.

```javascript
const pi = 3.14159;
console.log(pi); // Output: 3.14159

// pi = 3.14; // Error: Assignment to constant variable
```

---

### **4. Variable Naming Conventions**
#### **Rules**
1. Names must start with:
   - A letter (`a-z`, `A-Z`).
   - An underscore (`_`).
   - A dollar sign (`$`).
   
2. Names cannot:
   - Start with a number.
   - Include special characters (e.g., `@`, `#`, `!`, etc.).
   - Use reserved keywords (e.g., `var`, `if`, `else`, `return`).

#### **Examples of Valid Names**
```javascript
var firstName = "John";      // Starts with a letter
var _lastName = "Doe";       // Starts with an underscore
var $price = 99.99;          // Starts with a dollar sign
```

#### **Examples of Invalid Names**
```javascript
// var 1stName = "Alice";   // Starts with a number (Invalid)
// var my@Email = "test";   // Contains special character '@' (Invalid)
```

---

### **5. Best Practices**
1. **Case Sensitivity**: 
   - Variable names are case-sensitive.
   - `userName` and `username` are different variables.

2. **CamelCase**: 
   - Use `camelCase` for variable names. 
   - Example: `userAge`, `firstName`.

3. **Descriptive Names**:
   - Use meaningful names for better readability.
   - Example: Use `temperature` instead of `temp`.

4. **Reserved Keywords**:
   - Avoid using reserved words as variable names (`let`, `const`, `if`).

---

### **6. Examples of `var`, `let`, and `const`**
```javascript
// Example with var
var myAge = 30; 
console.log(myAge); // Output: 30

// Example with let
let userName = "Alice";
console.log(userName); // Output: Alice
userName = "Bob"; // Reassignment allowed
console.log(userName); // Output: Bob

// Example with const
const birthYear = 1990;
console.log(birthYear); // Output: 1990
// birthYear = 1995; // Error: Assignment to constant variable
```

---

### **7. Common Errors to Avoid**
1. **Spaces in Names**:
   ```javascript
   // var my Age = 25; // Invalid
   var myAge = 25; // Valid
   ```

2. **Special Characters**:
   ```javascript
   // var my@Name = "Alice"; // Invalid
   var myName = "Alice"; // Valid
   ```

3. **Reserved Keywords**:
   ```javascript
   // var let = 10; // Invalid
   let score = 10; // Valid
   ```

4. **Unintended Reassignments with `const`**:
   ```javascript
   const value = 100;
   // value = 200; // Error
   ```

---

### **8. Conclusion**
- Use `const` for constants (values that won’t change).
- Use `let` for variables whose values may change.
- Avoid using `var` unless necessary for legacy support.
- Follow naming conventions for clarity and maintainability.

---