# **Understanding `"use strict"` in JavaScript**  

## **1. Introduction to `"use strict"`**  
`"use strict"` is a directive introduced in **ECMAScript 5 (ES5)** to enforce stricter JavaScript execution. It helps in writing **cleaner, more secure, and error-free code** by preventing common mistakes.

---

## **2. How to Enable `"use strict"`**  

### **2.1 Global Strict Mode**  
Placing `"use strict"` at the beginning of a script applies strict mode to the entire script.  

```js
"use strict";

x = 10; // ❌ Error: x is not defined
console.log(x);
```

### **2.2 Function-Level Strict Mode**  
You can enable strict mode only inside a function.  

```js
function myFunction() {
  "use strict";
  y = 20; // ❌ Error: y is not defined
}

myFunction();
```

---

## **3. Benefits and Rules of `"use strict"`**  

### **3.1 Prevents Accidental Global Variables**  
In normal JavaScript, assigning a value to an undeclared variable **creates a global variable automatically**.  

```js
x = 5; // ✅ Allowed in normal mode
console.log(x);
```

With `"use strict"`:  

```js
"use strict";
x = 5; // ❌ Error: x is not defined
```

---

### **3.2 Prevents Duplicate Property Names in Objects**  
JavaScript allows duplicate property names, which can cause unexpected behavior.  

```js
const person = {
  name: "Alice",
  name: "Bob", // ✅ Allowed in normal mode
};
console.log(person.name); // Output: Bob
```

With `"use strict"`:  

```js
"use strict";
const person = {
  name: "Alice",
  name: "Bob", // ❌ Error: Duplicate property name
};
```

---

### **3.3 Prevents Duplicate Function Parameters**  
```js
function myFunc(a, a) { // ✅ Allowed in normal mode
  console.log(a);
}
```

With `"use strict"`:  

```js
"use strict";
function myFunc(a, a) { // ❌ Error: Duplicate parameter name not allowed
  console.log(a);
}
```

---

### **3.4 Prevents `this` from Defaulting to `window`**  
```js
function showThis() {
  console.log(this); // ✅ Output: window (in browsers)
}
showThis();
```

With `"use strict"`:  

```js
"use strict";
function showThis() {
  console.log(this); // ❌ Output: undefined
}
showThis();
```

---

### **3.5 Prevents Deleting Variables or Functions**  
```js
var num = 10;
delete num; // ✅ Normal mode: Does nothing
```

With `"use strict"`:  

```js
"use strict";
var num = 10;
delete num; // ❌ Error: Deleting a variable is not allowed
```

---

### **3.6 Prevents Writing to Read-Only Properties**  
```js
const obj = {};
Object.defineProperty(obj, "name", { value: "Alice", writable: false });

obj.name = "Bob"; // ✅ Normal mode: Fails silently
console.log(obj.name); // Output: Alice
```

With `"use strict"`:  

```js
"use strict";
const obj = {};
Object.defineProperty(obj, "name", { value: "Alice", writable: false });

obj.name = "Bob"; // ❌ Error: Cannot assign to read-only property
```

---

### **3.7 Prevents `eval()` from Creating Variables**  
```js
eval("var x = 10;");
console.log(x); // ✅ Normal mode: x is created globally
```

With `"use strict"`:  

```js
"use strict";
eval("var x = 10;");
console.log(x); // ❌ Error: x is not defined
```

---

## **4. Performance Benefits of `"use strict"`**  
- **Optimized Code Execution**: JavaScript engines can **optimize strict mode code** better.  
- **Prevents Accidental Bugs**: By catching errors early, strict mode helps avoid performance bottlenecks.  

---

## **5. When to Use `"use strict"`**  

### **5.1 Recommended Usage**  
✔ **Use strict mode** in:
- **New projects** to write safer, cleaner code.  
- **Functions that rely on `this`** to avoid unexpected behavior.  
- **ES6 classes and modules** (strict mode is **enabled by default** in ES6 modules).  

### **5.2 When Not to Use Strict Mode**  
🚫 **Avoid strict mode** if:
- You are working with **older JavaScript code** that depends on lax behavior.  
- You are using **third-party libraries** that may not support strict mode.  

---

## **6. Strict Mode in ES6+**  

### **6.1 `"use strict"` in ES6 Modules**  
**ES6 Modules (`import/export`)** automatically use strict mode **without** needing `"use strict"`.  

```js
// myModule.js
export function greet() {
  x = 10; // ❌ Error: x is not defined (Strict mode is enabled by default)
}
```

### **6.2 `"use strict"` in ES6 Classes**  
**ES6 Classes** also run in strict mode **by default**.  

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

const user = new Person("Kodyfier");
user.sayHi(); // ✅ Works fine (strict mode is automatically applied)
```

---

## **7. Summary of `"use strict"` Behavior**  

| Feature | Normal Mode | `"use strict"` Mode |
|---------|------------|---------------------|
| Undeclared Variables | ✅ Allowed | ❌ Error |
| Duplicate Object Properties | ✅ Allowed | ❌ Error |
| Duplicate Function Parameters | ✅ Allowed | ❌ Error |
| `this` in a Function | ✅ Defaults to `window` | ❌ Undefined |
| Deleting Variables/Functions | ✅ Allowed | ❌ Error |
| Writing to Read-Only Properties | ✅ Fails Silently | ❌ Error |
| `eval()` Creating Variables | ✅ Allowed | ❌ Error |

---

## **8. Conclusion**  
✔ `"use strict"` enforces **better coding practices** and helps prevent **silent errors**.  
✔ It **improves performance** by allowing JavaScript engines to optimize code.  
✔ It is **recommended** for **modern JavaScript development**, especially in **new projects, ES6 modules, and classes**.  
