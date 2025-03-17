# Scope in JavaScript  

Scope in JavaScript defines **where** variables and functions are accessible in your code. It determines **the lifetime and visibility** of variables.  

---

## Types of Scope in JavaScript  

1. **Global Scope**  
2. **Function Scope**  
3. **Block Scope**  
4. **Lexical Scope (Scope Chaining)**  

---

## Global Scope  

- Variables declared **outside any function or block** belong to the **global scope**.  
- They can be accessed **from anywhere** in the program.  

### Example:  
```js
var globalVar = "I am global";

function testFunction() {
  console.log(globalVar); // ✅ Accessible inside the function
}

testFunction();
console.log(globalVar); // ✅ Accessible outside the function too
```

✅ **Global variables are accessible everywhere.**  

---

## Function Scope  

- Variables declared inside a function using `var`, `let`, or `const` are **only available inside that function**.  
- **Cannot be accessed outside the function.**  

### Example:  
```js
function exampleFunction() {
  var functionScopedVar = "I am inside a function";
  console.log(functionScopedVar); // ✅ Accessible inside the function
}

exampleFunction();

console.log(functionScopedVar); // ❌ Error: functionScopedVar is not defined
```

✅ **Function-scoped variables are only accessible inside their function.**  

---

## Block Scope  

- Variables declared with `let` and `const` inside a **block** (`{}`) are limited to that block.  
- `var` **does not respect block scope** and is still function-scoped.  

### Example:  
```js
if (true) {
  let blockScopedLet = "I'm block-scoped";
  const blockScopedConst = "Me too!";
  var functionScopedVar = "I'm function-scoped (even inside a block)";
}

console.log(functionScopedVar); // ✅ Works (var is NOT block-scoped)
console.log(blockScopedLet); // ❌ Error: blockScopedLet is not defined
console.log(blockScopedConst); // ❌ Error: blockScopedConst is not defined
```

✅ **`let` and `const` are block-scoped.**  
❌ **`var` is NOT block-scoped (it belongs to the enclosing function or global scope).**  

---

## Lexical Scope & Scope Chaining  

**Lexical Scope** means that a function **can access variables from its parent scope**.  

**Scope Chaining:**  
- When JavaScript looks for a variable, it first checks **inside the current function**.  
- If the variable **is not found**, it looks **in the outer function**.  
- If still **not found**, it keeps searching **up the chain** until the **global scope** is reached.  

### Example:  
```js
const globalVar = "I am global";

function outerFunction() {
  const outerVar = "I am in outerFunction";

  function innerFunction() {
    const innerVar = "I am in innerFunction";

    console.log(globalVar); // ✅ Accessible (from global scope)
    console.log(outerVar); // ✅ Accessible (from parent function)
    console.log(innerVar); // ✅ Accessible (inside own function)
  }

  innerFunction();
}

outerFunction();
console.log(innerVar); // ❌ Error: innerVar is not defined
```

### How Scope Chaining Works?  
1. `innerFunction()` searches for `innerVar` → ✅ Found in its own scope.  
2. Then it looks for `outerVar` → ✅ Found in `outerFunction()`.  
3. Then it looks for `globalVar` → ✅ Found in the global scope.  
4. If the variable **is not found anywhere**, it results in a `ReferenceError`.  

✅ **Functions can access variables from their parent scope but NOT vice versa!**  

---

## Interview Question: Global vs. Local Variables  

### Example:  
```js
const globalVariable = "I'm a global variable";

function myFunction() {
  const functionVariable = "I'm a function variable";

  if (true) {
    const blockVariable = "I'm a block variable";
    console.log(blockVariable); // ✅ Works (inside the block)
  }

  console.log(functionVariable); // ✅ Works (inside the function)
}

myFunction();

console.log(globalVariable); // ✅ Works (global scope)
console.log(functionVariable); // ❌ Error: Not accessible outside the function
console.log(blockVariable); // ❌ Error: Not accessible outside the block
```

✅ **Global variables are accessible everywhere.**  
✅ **Function-scoped variables are only accessible inside the function.**  
✅ **Block-scoped variables (`let`, `const`) are only accessible inside the block.**  

---

## Summary  

| Scope Type       | Declared Where?                     | Accessible Where?                     |
|------------------|-------------------------------------|---------------------------------------|
| **Global Scope** | Outside any function/block          | Anywhere in the program               |
| **Function Scope** | Inside a function (`var`, `let`, `const`) | Only inside that function             |
| **Block Scope**  | Inside `{}` (e.g., `if`, `for`) with `let`/`const` | Only inside that block                |
| **Lexical Scope** | Inside nested functions             | Functions can access parent scopes     |

---

## Final Thoughts  

- **Global scope** → Variables accessible everywhere.  
- **Function scope** → Variables only accessible inside the function.  
- **Block scope** → `let` and `const` are block-scoped, `var` is function-scoped.  
- **Lexical scoping** → Inner functions can access variables from outer functions (Scope Chaining).  

---

## Visual Diagram of Scope & Scope Chaining  

```plaintext
Global Scope
    |
    |--- globalVar
    |
    |--- outerFunction()
            |
            |--- outerVar
            |
            |--- innerFunction()
                    |
                    |--- innerVar
```

- **Global Scope**: Contains `globalVar` and `outerFunction`.  
- **Function Scope**: `outerFunction` contains `outerVar` and `innerFunction`.  
- **Block Scope**: `innerFunction` contains `innerVar`.  
- **Scope Chaining**: `innerFunction` can access `outerVar` and `globalVar`.  

This hierarchical structure ensures that variables are accessible in a predictable manner based on their scope.