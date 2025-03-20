# ECMAScript Features (2017) / ES8  

---

## New Features Introduced in ES8  

- **String Padding (`padStart()`, `padEnd()`)**  
- **Trailing Commas**  
- **`Object.values()` and `Object.entries()`**  
- **Async/Await (Async Functions)**  

---

## **String Padding**  

String padding in JavaScript allows adding extra characters (like spaces or custom symbols) to a string to ensure it reaches a specific length.  

### **Use Case:**  
- Helps with **formatting text**, especially for UI alignments, tables, and logs.  
- Ensures **consistent** string lengths for better readability.  

---

### **Using `padStart()`** (Pads from the beginning)  

```javascript
const companyName = "Kodyfier";

// Pads to a total length of 15 characters, adding spaces at the beginning
const paddedName = companyName.padStart(15);
console.log(paddedName); // Output: "      Kodyfier"
console.log(paddedName.length); // Output: 15

// Pads using a specific character
const paddedWithDash = companyName.padStart(15, "-");
console.log(paddedWithDash); // Output: "------Kodyfier"
```

---

### **Using `padEnd()`** (Pads from the end)  

```javascript
// Pads with spaces at the end to make the total length 15
const paddedEnd = companyName.padEnd(15);
console.log(paddedEnd); // Output: "Kodyfier      "

// Pads with custom characters
const paddedWithDollar = companyName.padEnd(15, "$");
console.log(paddedWithDollar); // Output: "Kodyfier$$$$$$$"
```

### **Key Points:**  
- `padStart()` and `padEnd()` **do not modify** the original string.  
- They accept two arguments:  
  - `targetLength` → The desired total length of the string.  
  - `padString` (optional) → The string to use for padding (defaults to spaces).  
- If the original string **already meets or exceeds the target length**, it remains unchanged.  

---

## **Trailing Commas**  

Trailing commas allow leaving a comma **at the end** of function parameters, array elements, and object properties without causing errors.  

### **Function Parameters**  

```javascript
function greet(name, age, boolean,) {  // ✅ Trailing comma after the last parameter
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet("John", 30, true,);  // ✅ Trailing comma in function call
```

### **Array Literals**  

```javascript
const colors = ["red", "green", "blue",];  // ✅ No error
console.log(colors);
```

### **Object Literals**  

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,  // ✅ Trailing comma
};

console.log(person);
```

### **Why Use Trailing Commas?**  
- Makes **version control (Git diffs) cleaner** when adding/removing elements.  
- Reduces syntax errors when **reordering** items in objects or arrays.  

---

## **`Object.values()` & `Object.entries()`**  

### **`Object.values()` → Extracts all values from an object**  

```javascript
const user = { name: "Alice", age: 25, city: "New York" };
console.log(Object.values(user)); // Output: ["Alice", 25, "New York"]
```

---

### **`Object.entries()` → Returns key-value pairs as an array of arrays**  

```javascript
console.log(Object.entries(user));
/* Output:
[
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"]
]
*/
```

---

## **Async/Await (Async Functions)**  

Async functions are **covered separately** as they play a key role in handling asynchronous operations efficiently. They eliminate **callback hell** and make working with **Promises** much easier.  

---