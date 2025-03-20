# **ECMAScript Features (2021) / ES12**  

---

### **New Features Introduced in ES12 (ES2021)**  
1. `String.prototype.replaceAll()`  
2. Logical Assignment Operators (`||=`, `&&=`, `??=`)  
3. Numeric Separators (`_`)  
4. `Promise.any()`  

---

## **1. `String.prototype.replaceAll()`**  

The `replaceAll()` method replaces **all occurrences** of a specified string or pattern with another value.  

### **Example 1: Replacing All Occurrences of a Word**  

```javascript
const originalString = "Hello, world! Hello again.";
const newString = originalString.replaceAll("Hello", "Hi");
console.log(newString); 
// Output: "Hi, world! Hi again."
```

### **Example 2: Replacing Multiple Spaces with a Single Space**  

```javascript
const text = "This   has   extra       spaces.";
const normalizedText = text.replaceAll(/\s+/g, " ");
console.log(normalizedText); 
// Output: "This has extra spaces."
```

---

## **2. Logical Assignment Operators (`||=`, `&&=`, `??=`)**  

These operators provide a shorthand way to **assign values conditionally** based on logical operations.  

### **Logical OR-Assignment (`||=`)**  

Assigns the right-hand value **only if** the left-hand value is **falsy** (`false`, `null`, `undefined`, `0`, `''`, `NaN`).  

```javascript
let x = false;
x ||= true; 
console.log(x); 
// Output: true

let y = 10;
y ||= 20; 
console.log(y); 
// Output: 10 (unchanged because 10 is truthy)
```

### **Logical AND-Assignment (`&&=`)**  

Assigns the right-hand value **only if** the left-hand value is **truthy**.  

```javascript
let a = true;
a &&= false;
console.log(a); 
// Output: false

let b = 0;
b &&= 20;
console.log(b); 
// Output: 0 (unchanged because 0 is falsy)
```

### **Nullish Coalescing Assignment (`??=`)**  

Assigns the right-hand value **only if** the left-hand value is `null` or `undefined`.  

```javascript
let c = null;
c ??= "Default Value";
console.log(c); 
// Output: "Default Value"

let d = 0;
d ??= 100;
console.log(d); 
// Output: 0 (unchanged because 0 is not null or undefined)
```

---

## **3. Numeric Separators (`_`)**  

Numeric separators improve **readability** for large numbers by allowing underscores (`_`) as visual separators.  

### **Example**  

```javascript
const bigNumber = 1_000_000_000;
console.log(bigNumber); 
// Output: 1000000000

const hexValue = 0xFF_FF_FF;
console.log(hexValue); 
// Output: 16777215

const binaryValue = 0b1010_1010;
console.log(binaryValue); 
// Output: 170
```

Underscores do **not** affect the number’s value, they just improve readability.  

---

## **4. `Promise.any()`**  

`Promise.any()` takes an **array of promises** and resolves as soon as **any one of them fulfills**.  

### **Example: Resolving the First Fulfilled Promise**  

```javascript
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "Promise 1 resolved")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "Promise 2 rejected")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "Promise 3 resolved")
);

Promise.any([promise1, promise2, promise3]).then(value => console.log(value));

// Output: "Promise 1 resolved" (since promise1 resolves first)
```

### **Difference Between `Promise.any()` and `Promise.race()`**  

| Feature            | `Promise.any()`                        | `Promise.race()`                      |
|-------------------|--------------------------------------|--------------------------------------|
| Resolves when    | **First fulfilled** promise         | First **settled** promise (fulfilled or rejected) |
| If all fail      | Rejects with `AggregateError`       | Rejects with first rejected promise |

### **Example: Handling All Rejections**  

```javascript
const promiseA = new Promise((_, reject) => setTimeout(reject, 100, "Error A"));
const promiseB = new Promise((_, reject) => setTimeout(reject, 200, "Error B"));

Promise.any([promiseA, promiseB])
  .then(value => console.log(value))
  .catch(error => console.log(error.errors));

// Output: ["Error A", "Error B"] (if all promises fail)
```

---

### **Summary**  
- **`replaceAll()`** replaces all occurrences of a string or pattern.  
- **Logical Assignment Operators (`||=`, `&&=`, `??=`)** provide shorthand ways to assign values conditionally.  
- **Numeric Separators (`_`)** make large numbers more readable.  
- **`Promise.any()`** resolves as soon as one promise **fulfills**, unlike `Promise.race()`, which settles on the **first resolved or rejected** promise.  

---