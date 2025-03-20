# **ECMAScript Features (2019) / ES10**  

---

### **New Features Introduced in ES10 (ES2019)**  
1. `Array.prototype.flat()` and `Array.prototype.flatMap()`  
2. `Object.fromEntries()`  
3. `String.prototype.trimStart()` and `String.prototype.trimEnd()`  
4. `Symbol.prototype.description`  
5. Optional Catch Binding  

---

## **1. Array.flat() & Array.flatMap()**  

### **flat() – Flattens Nested Arrays**  

The `flat()` method converts a **multi-dimensional array** into a **single-level array**.  

```javascript
const nestedArray = [1, 2, [3, 4], 5];
console.log(nestedArray.flat()); // Output: [1, 2, 3, 4, 5]

const nestedArray1 = [1, [2, [3, [4]]], 5];
console.log(nestedArray1.flat(3)); // Output: [1, 2, 3, 4, 5]
```

By default, `flat()` removes one level of nesting. You can specify a depth value to flatten deeper levels.  

---

### **flatMap() – Combines flat() and map()**  

The `flatMap()` method applies a mapping function to an array and then flattens the result by one level.  

```javascript
const words = ["Hello world", "JavaScript ES10"];
const splitWords = words.flatMap((sentence) => sentence.split(" "));
console.log(splitWords); // Output: ["Hello", "world", "JavaScript", "ES10"]
```

---

## **2. Object.fromEntries()**  

The `Object.fromEntries()` method converts an **array of key-value pairs** into an **object**.  

```javascript
const entries = [["name", "John"], ["age", 25]];
const person = Object.fromEntries(entries);
console.log(person); // Output: { name: "John", age: 25 }
```

This is the **opposite of `Object.entries()`**, which converts an object into an array of key-value pairs.  

```javascript
console.log(Object.entries(person)); 
// Output: [["name", "John"], ["age", 25]]
```

---

## **3. String.prototype.trimStart() and trimEnd()**  

These methods remove whitespace from the **beginning** or **end** of a string.  

```javascript
const text = "   Hello World   ";
console.log(text.trimStart()); // Output: "Hello World   "
console.log(text.trimEnd()); // Output: "   Hello World"
```

These methods work the same way as `trim()`, but only affect the **start** or **end** of the string.  

---

## **4. Symbol.prototype.description**  

The `description` property allows you to **access the description** of a `Symbol`.  

```javascript
const mySymbol = Symbol("This is a description");
console.log(mySymbol.description); // Output: "This is a description"
```

Before ES10, you could not directly access the description of a `Symbol`.  

---

## **5. Optional Catch Binding**  

In previous versions of JavaScript, the `catch` statement required a **parameter**, even if it was unused.  

```javascript
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log("An error occurred");
}
```

With **optional catch binding**, the `catch` block does not need a parameter if it is not used.  

```javascript
try {
  throw new Error("Something went wrong");
} catch {
  console.log("An error occurred");
}
```

This makes the code cleaner when the error object is not needed.  

---

### **Summary**  
- `flat()` and `flatMap()` simplify working with nested arrays.  
- `Object.fromEntries()` allows creating objects from key-value pairs.  
- `trimStart()` and `trimEnd()` help with string formatting.  
- `Symbol.prototype.description` provides a way to access the symbol description.  
- Optional catch binding makes error handling more concise.  

---