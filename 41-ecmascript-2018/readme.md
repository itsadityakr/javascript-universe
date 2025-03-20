# **ECMAScript Features (2018) / ES9**  

---

### **New Features Introduced in ES9 (ES2018)**  
- **Rest/Spread Properties for Objects**  
- **`Promise.prototype.finally()`**  

---

## **Rest/Spread Properties for Objects**  

ECMAScript 2018 extended the **rest (`...`) and spread (`...`) operators** to work with objects, making it easier to manipulate object properties dynamically.  

---

### **Rest Operator (`...`) with Objects**  

The **rest operator** allows extracting specific properties from an object while collecting the remaining properties into a new object.  

#### **Example: Extracting Properties from an Object**  

```javascript
const student = {
  age: 10,
  name: "Alex",
  isStudent: true,
};

// Extract 'age' and collect the rest into 'others'
const { age, ...others } = student;

console.log(age);     // Output: 10
console.log(others);  // Output: { name: "Alex", isStudent: true }
```

### **Use Cases**  
✅ Helps when working with APIs where only a few properties are needed.  
✅ Useful for **excluding** certain properties before passing objects to a function.  

---

### **Spread Operator (`...`) with Objects**  

The **spread operator** allows cloning and merging objects more easily.  

#### **Example: Merging Objects**  

```javascript
const obj1 = { a: 10, b: 20, c: 50 };
const obj2 = { c: 30, d: 40 };

const mergedObj = { ...obj2, ...obj1 };

console.log(mergedObj);  
// Output: { c: 50, d: 40, a: 10, b: 20 }
```

✅ **Properties in the second spread (`obj1`) override** the properties from the first (`obj2`).  
✅ Useful for **merging configurations** or **overriding values dynamically**.  

---

## **`Promise.prototype.finally()`**  

The `finally()` method was introduced in ES9 to handle **cleanup** operations, ensuring that a block of code runs **whether a Promise is resolved or rejected**.  

### **Example: Using `finally()` in a Promise**  

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    let success = true; // Change to false to simulate error

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data!");
      }
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log("Success:", data))
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Cleanup: Closing connection."));
```

### **Why Use `finally()`?**  
✅ Ensures cleanup tasks (closing connections, hiding loaders, logging actions) always run.  
✅ No need to duplicate code inside `.then()` and `.catch()`.  

---

### **Summary of ES9 Features**  
✔ **Rest/Spread for Objects** → Extract, merge, and copy object properties dynamically.  
✔ **`Promise.prototype.finally()`** → Ensures a block of code runs **after** a promise is settled (resolved/rejected).  

---