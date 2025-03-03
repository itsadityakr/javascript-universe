# **JavaScript Objects: Useful Methods & Interview Questions**  

JavaScript objects are fundamental building blocks that store **key-value pairs**. The language provides **various built-in methods** to work efficiently with objects. This guide covers the most **useful object methods** and provides **real-world coding examples**, including **interview questions**.

---

## **1. Objects in JavaScript**  
An **object** is a collection of properties, where each property has a **key (name)** and a **value**.

Example object:  

```js
const product = {
  id: 1,
  name: "Laptop",
  category: "Computers",
  brand: "ExampleBrand",
  price: 999.99,
  stock: 50,
  description: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD.",
  image: "image link will be added during projects",
};
```

---

## **2. Important JavaScript Object Methods**  

### **2.1 `Object.keys()` - Get All Keys**
- Returns an **array of all property names (keys)** of an object.  
- Useful for **iterating over objects** or checking property names dynamically.  

```js
let keys = Object.keys(product);
console.log(keys);
// Output: [ 'id', 'name', 'category', 'brand', 'price', 'stock', 'description', 'image' ]
```

---

### **2.2 `Object.values()` - Get All Values**
- Returns an **array of all property values** of an object.  

```js
let values = Object.values(product);
console.log(values);
// Output: [1, 'Laptop', 'Computers', 'ExampleBrand', 999.99, 50, 'Powerful laptop...', 'image link...']
```

---

### **2.3 `Object.entries()` - Get Key-Value Pairs**
- Returns an array of **arrays**, where each sub-array contains a **key-value pair**.  

```js
let entries = Object.entries(product);
console.log(entries);

/* Output:
[
  ['id', 1],
  ['name', 'Laptop'],
  ['category', 'Computers'],
  ['brand', 'ExampleBrand'],
  ['price', 999.99],
  ['stock', 50],
  ['description', 'Powerful laptop...'],
  ['image', 'image link...']
]
*/
```

---

### **2.4 `Object.hasOwnProperty()` - Check Property Existence**
- Returns `true` if the object contains the given property; otherwise, `false`.  

```js
console.log(product.hasOwnProperty("name")); // Output: true
console.log(product.hasOwnProperty("isStudent")); // Output: false
```

---

### **2.5 `Object.assign()` - Merge Objects**
- Copies properties from **one or more source objects** into a **target object**.  

```js
const target = { a: 1, b: 5 };
const source = { b: 3, c: 4 };
const mergedObject = Object.assign(target, source);
console.log(mergedObject); 
// Output: { a: 1, b: 3, c: 4 }
```
- **Note:** The target object is **modified in place**.

To avoid modifying the target, pass an **empty object `{}`** as the first argument:

```js
const merged = Object.assign({}, target, source);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
```

---

### **2.6 `Object.freeze()` - Prevent Object Modification**
- **Freezes** an object, making it **immutable** (no adding, modifying, or deleting properties).  

```js
Object.freeze(product);
product.price = 1200; // ❌ This change won't be applied
delete product.brand; // ❌ Deletion won't work
console.log(product.price); // Output: 999.99 (unchanged)
```

---

## **3. Interview Questions on Objects**  

### **3.1 What will be the output?**
```js
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const mergedObject = Object.assign({}, target, source);
console.log(mergedObject);
```
**Answer:**  
The `b` property from `source` **overwrites** the `b` property in `target`.  
```js
// Output: { a: 1, b: 3, c: 4 }
```

---

### **3.2 Add a Subject to a Student’s Grades**
#### **Problem Statement**  
Write a function that adds a new subject and grade to a student’s record. If the `grades` property does not exist, create it.

#### **Solution**
```js
let student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    history: 88,
  },
};

const addSubjectGrade = (student, subject, marks) => {
  if (!student.grades) {
    student.grades = {};
  }
  student.grades[subject] = marks;
};

addSubjectGrade(student, "computer", 92);
console.log(student);

/* Output:
{
  name: 'Bob',
  age: 20,
  grades: { math: 90, science: 85, history: 88, computer: 92 }
}
*/
```

---

### **3.3 Compare Two Objects**
#### **Problem Statement**  
Write a function to compare two objects and check if they have the **same properties and values**.

#### **Solution**
```js
const areObjectsEqual = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

// Example usage:
let objA = { name: "Alice", age: 26, city: "New York" };
let objB = { name: "Alice", age: 26, city: "New York" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };

console.log(areObjectsEqual(objA, objB)); // Output: true
console.log(areObjectsEqual(objA, objC)); // Output: false
```

---

### **3.4 Transform an Array of Objects into an Object**
#### **Problem Statement**  
Convert an **array of objects** into an **object**, where the keys are the objects' `id` values.

#### **Solution**
```js
let inputArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const arrayToObj = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item.id] = item;
  }
  return obj;
};

console.log(arrayToObj(inputArray));

/* Output:
{
  '1': { id: 1, name: 'Alice' },
  '2': { id: 2, name: 'Bob' },
  '3': { id: 3, name: 'Charlie' }
}
*/
```

---

## **4. Summary of Object Methods**
| **Method**          | **Description** |
|---------------------|---------------|
| `Object.keys(obj)`  | Returns an array of keys |
| `Object.values(obj)` | Returns an array of values |
| `Object.entries(obj)` | Returns an array of `[key, value]` pairs |
| `Object.hasOwnProperty(prop)` | Checks if the object has a property |
| `Object.assign(target, ...sources)` | Merges objects |
| `Object.freeze(obj)` | Freezes an object (no modifications allowed) |

---

## **5. Conclusion**
- Objects are **essential** in JavaScript.
- Methods like `Object.keys()`, `Object.assign()`, and `Object.freeze()` help manage object properties efficiently.
- **Interview questions** often test object manipulation, comparison, and transformation.

---