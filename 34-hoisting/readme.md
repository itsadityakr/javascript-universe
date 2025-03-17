# Hoisting in JavaScript

Hoisting is a **JavaScript mechanism** where **variable and function declarations** are moved to the **top of their scope** before code execution. However, **only declarations are hoisted**, not initializations. This means that while you can use functions and variables before they are declared in your code, the behavior differs depending on how they are declared.

---

## How Hoisting Works?

- **Function Declarations** are **fully hoisted**, meaning the entire function (including its body) is moved to the top. ✅
- **Variables (`var`)** are hoisted **but initialized with `undefined`**. ✅
- **`let` and `const`** are hoisted **but not initialized**. Accessing them before declaration results in a **ReferenceError** due to the **Temporal Dead Zone (TDZ)**. ✅

---

## Example of Hoisting with `var`

```js
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

### What Happens Behind the Scenes?

```js
// JavaScript internally processes it like this:
var x; // Declaration is hoisted to the top
console.log(x); // undefined
x = 5; // Initialization happens here
console.log(x); // 5
```

**`var` is hoisted, but its value remains `undefined` until it's assigned.** ✅

---

## Hoisting with `let` and `const`

```js
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

### Why?

- `let` and `const` are **hoisted** but are **not initialized**. ✅
- Accessing them **before declaration** causes an **error** due to the **Temporal Dead Zone (TDZ)**. ❌

**Always declare `let` and `const` before using them!** ✅

---

## Function Hoisting

### Function Declarations

```js
sayHello(); // ✅ Works! "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

Function declarations are **fully hoisted**, meaning you can call them **before defining them**. ✅

### Function Expressions (Not Hoisted)

```js
greet(); // ❌ TypeError: greet is not a function

var greet = function () {
  console.log("Hi!");
};
```

- Here, `greet` is **hoisted as `undefined`** (because it's a `var`). ✅
- Calling `greet()` before initialization **causes an error**. ❌

**Only function declarations are fully hoisted, not function expressions!** ✅

---

## Summary: Function Declarations vs Arrow Functions

- **Function Declarations** are fully hoisted. ✅  
- **`var`** is hoisted but initialized as `undefined`. ✅  
- **`let` and `const`** are hoisted but stay in the Temporal Dead Zone (TDZ), causing errors if accessed too early. ✅  
- **Function expressions and arrow functions are not hoisted** like function declarations. ✅  

| Function Type                | Hoisted?  | Usable Before Declaration? | Error Type |
|------------------------------|----------|----------------------------|------------|
| **Function Declaration**      | ✅ Yes  | ✅ Yes | ❌ No error |
| **Arrow Function (`var`)**    | ✅ Partially (`undefined`) | ❌ No | ❌ TypeError |
| **Arrow Function (`let`)**    | ✅ Hoisted (TDZ) | ❌ No | ❌ ReferenceError |
| **Arrow Function (`const`)**  | ✅ Hoisted (TDZ) | ❌ No | ❌ ReferenceError |

---

## Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the period between entering a scope and the actual declaration of a variable. During this time, accessing the variable will result in a **ReferenceError**.

### Example of TDZ

```js
console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
let z = 20;
```

### Why TDZ Exists?

- **`let` and `const`** are designed to prevent the use of variables before they are declared. ✅
- This helps in writing more predictable and less error-prone code. ✅

**Always declare `let` and `const` variables at the top of their scope to avoid TDZ issues.** ✅

---

## Best Practices for Hoisting

1. **Use `let` and `const` instead of `var`**: This helps avoid unexpected behavior due to hoisting. ✅
2. **Declare variables at the top of their scope**: This makes it clear where variables are available and avoids TDZ issues. ✅
3. **Use function declarations for hoisting**: If you need to call a function before its declaration, use a function declaration instead of a function expression. ✅

---

## Common Pitfalls and How to Avoid Them

### Pitfall 1: Using `var` and Expecting Block Scope

```js
if (true) {
  var x = 10;
}
console.log(x); // 10
```

- **Issue**: `var` is function-scoped, not block-scoped. ❌
- **Solution**: Use `let` or `const` for block-scoped variables. ✅

```js
if (true) {
  let y = 20;
}
console.log(y); // ❌ ReferenceError: y is not defined
```

### Pitfall 2: Accessing `let` and `const` Before Declaration

```js
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 30;
```

- **Issue**: Accessing `let` or `const` before declaration results in a ReferenceError. ❌
- **Solution**: Always declare `let` and `const` variables before using them. ✅

### Pitfall 3: Confusing Function Declarations and Expressions

```js
foo(); // ❌ TypeError: foo is not a function
var foo = function() {
  console.log("Hello");
};
```

- **Issue**: Function expressions are not hoisted like function declarations. ❌
- **Solution**: Use function declarations if you need to call the function before its definition. ✅

---

## Conclusion

Understanding hoisting is crucial for writing predictable and bug-free JavaScript code. By knowing how different declarations (`var`, `let`, `const`, function declarations, and function expressions) are hoisted, you can avoid common pitfalls and write more maintainable code.

**Key Takeaways:**
- **Function declarations** are fully hoisted. ✅
- **`var`** is hoisted but initialized as `undefined`. ✅
- **`let` and `const`** are hoisted but remain in the TDZ until declared. ✅
- **Function expressions** and **arrow functions** are not hoisted like function declarations. ✅

By following best practices and being aware of the Temporal Dead Zone, you can leverage hoisting to your advantage and write cleaner, more efficient JavaScript code. ✅

---