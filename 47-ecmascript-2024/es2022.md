# **ECMAScript Features (2022) / ES13**  

---

### **New Features Introduced in ES13 (ES2022)**  
1. `.at()` function for indexing  
2. `Object.hasOwn(obj, propKey)`  

---

## **1. `.at()` Method for Indexing**  

### **Problem Before ES2022**  
Previously, accessing elements from an array (especially from the end) required:  

```javascript
const array = [1, 2, 4, 5, 6, 7];
console.log(array[array.length - 1]); // Output: 7
```

This method works, but it’s not very readable.  

### **Solution: `.at()`**  
The `.at()` method allows accessing elements using both **positive** and **negative** indexing.  

```javascript
const array = [1, 2, 4, 5, 6, 7];

console.log(array.at(0));  // Output: 1
console.log(array.at(-1)); // Output: 7 (last element)
console.log(array.at(-2)); // Output: 6
```

### **Supported Data Types**  
- **Arrays**
- **Strings**
- **Typed Arrays** (e.g., `Uint8Array`)

### **Example with Strings**  

```javascript
const text = "Hello";
console.log(text.at(-1)); // Output: "o"
console.log(text.at(2));  // Output: "l"
```

---

## **2. `Object.hasOwn(obj, propKey)`**  

### **Problem Before ES2022**  
The standard way to check if an object has a property was:  

```javascript
const book = {
  name: "JavaScript Guide",
  author: "ECMA",
};

console.log(book.hasOwnProperty("name"));  // Output: true
console.log(book.hasOwnProperty("price")); // Output: false
```

### **Issues with `hasOwnProperty`**  
1. **Inheritance Problem**  
   - If an object inherits from another, `hasOwnProperty()` may return incorrect results.  

2. **Objects Created with `Object.create(null)`**  
   - These objects **do not inherit** from `Object.prototype`, so `hasOwnProperty()` does **not work**.  

```javascript
const student = Object.create(null);
student.name = "John";

// This will throw an error because `hasOwnProperty` is missing
// console.log(student.hasOwnProperty("name")); 

// Instead, use `Object.hasOwn()`
console.log(Object.hasOwn(student, "name")); // Output: true
```

### **Solution: `Object.hasOwn()`**  
Introduced in ES2022, `Object.hasOwn()` is a **safer and more reliable** method.  

```javascript
console.log(Object.hasOwn(book, "name"));   // Output: true
console.log(Object.hasOwn(book, "price"));  // Output: false
```

### **Advantages of `Object.hasOwn()`**  
- Works on **all** objects, including those created with `Object.create(null)`.  
- Avoids potential conflicts from inherited properties.  

---

### **Summary**  
| Feature         | Description |
|----------------|-------------|
| **`.at()`**    | Access elements using positive or negative indexing. Works for Arrays, Strings, and Typed Arrays. |
| **`Object.hasOwn()`** | Safely checks if an object has a specific property, even for objects without `Object.prototype`. |

---