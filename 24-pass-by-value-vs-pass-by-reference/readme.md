# **Pass by Value vs Pass by Reference in JavaScript**  

## **1. Understanding How JavaScript Handles Data in Memory**  
JavaScript stores data in two memory locations:  

- **Stack Memory (For Primitive Data Types - Pass by Value)**  
  - Stores fixed-size, immutable data types.  
  - Each variable gets its own separate copy of the value.  

- **Heap Memory (For Objects - Pass by Reference)**  
  - Stores dynamic, mutable data like Objects, Arrays, and Functions.  
  - Variables contain references (pointers) to the actual data stored in the heap.  
  - Modifying the reference modifies the original object in heap memory.  

---

## **2. Pass by Value (For Primitive Data Types)**  
**Pass by value means a copy of the value is passed, and changes do not affect the original variable.**  

### **Primitive Data Types in JavaScript**  
- `Number`
- `String`
- `Boolean`
- `null`
- `undefined`
- `Symbol`
- `BigInt`

#### **Example 1: Pass by Value with Variable Assignment**
```js
let a = 10;
let b = a;  // A new copy of 'a' is created and assigned to 'b'

b = 20; // Modifying 'b' does not affect 'a'

console.log(a); // Output: 10
console.log(b); // Output: 20
```
- `b` gets a **separate copy** of `a`, so changing `b` does not modify `a`.  

#### **Example 2: Pass by Value in Functions**
```js
function updateValue(x) {
    x = 50; // Local copy inside function changes, original remains unchanged
}

let num = 100;
updateValue(num);

console.log(num); // Output: 100
```
- `x` is a **copy of `num`**, and modifying `x` does not change `num`.  

---

## **3. Pass by Reference (For Objects, Arrays, and Functions)**  
**Pass by reference means the reference (memory address) is passed instead of a copy, so changes affect the original object.**  

### **Reference Data Types in JavaScript**  
- `Object`
- `Array`
- `Function`

#### **Example 1: Pass by Reference with Objects**
```js
let obj1 = { name: "Alice" };
let obj2 = obj1;  // Both variables point to the same memory location

obj2.name = "Bob"; // Modifies the original object

console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob
```
- `obj1` and `obj2` reference the **same memory address**, so changing `obj2` affects `obj1`.  

#### **Example 2: Pass by Reference in Functions**
```js
function modifyObject(obj) {
    obj.name = "Charlie";  // Changes the original object
}

let person = { name: "David" };
modifyObject(person);

console.log(person.name); // Output: Charlie
```
- `person` is passed **by reference**, so modifying it inside the function affects the original object.

---

## **4. Comparison by Reference (Important Concept for Objects & Arrays)**  

When comparing objects and arrays, JavaScript **compares memory addresses (references), not values**.

### **Example: Object Comparison by Reference**
```js
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };

console.log(obj1 === obj2); // Output: false
```
- Even though `obj1` and `obj2` have the same properties, they are **different objects in memory**, so the comparison returns `false`.  

### **Example: Same Reference Comparison**
```js
let obj1 = { name: "Alice" };
let obj2 = obj1;  // obj2 holds the same reference as obj1

console.log(obj1 === obj2); // Output: true
```
- Both `obj1` and `obj2` reference the **same memory location**, so the comparison returns `true`.  

### **Example: Array Comparison by Reference**
```js
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2); // Output: false
```
- Even though both arrays have identical values, they are stored at **different memory addresses**, so JavaScript treats them as different objects.  

---

## **5. Preventing Unwanted Changes in Objects (Avoiding Mutation)**  

### **Creating a Shallow Copy**
A **shallow copy** copies the first level of an object but keeps nested objects referenced.  

#### **Using the Spread Operator (`{ ...obj }`)**
```js
let original = { name: "Emma", details: { age: 25 } };
let copy = { ...original }; // Creates a new object but keeps nested references

copy.name = "Sophia";
copy.details.age = 30; // Modifies the original object

console.log(original.details.age); // Output: 30-how-js-works
console.log(copy.details.age);  // Output: 30-how-js-works
```
- Only the **top-level** properties are copied, but nested objects still **share references**.  

---

## **6. Deep Copy (Creating a Completely Independent Copy of an Object)**  
A **deep copy** creates a fully independent object, including nested properties.

### **Using `JSON.parse(JSON.stringify(obj))` (Simple Deep Copy)**
```js
let nestedObj = { person: { name: "John", age: 30 } };
let deepCopy = JSON.parse(JSON.stringify(nestedObj));

deepCopy.person.name = "Michael";

console.log(nestedObj.person.name); // Output: John
console.log(deepCopy.person.name);  // Output: Michael
```
- `JSON.stringify()` converts the object into a JSON string.  
- `JSON.parse()` creates a **new object**, breaking all references.  

### **Using Structured Cloning (Modern Approach)**
```js
let deepClone = structuredClone(nestedObj);
```
- **`structuredClone(obj)`** is a built-in method that creates a deep copy, **preserving functions, dates, and special objects**.

---

## **7. Common Mistakes and Misconceptions**  

### **1. Thinking Primitive Data Types Are Passed by Reference**
```js
let str1 = "Hello";
let str2 = str1;

str2 = "World";

console.log(str1); // Output: Hello
console.log(str2); // Output: World
```
- Strings are **immutable** and **passed by value**, so `str2` does not affect `str1`.  

### **2. Expecting `const` to Make Objects Immutable**
```js
const obj = { name: "John" };
obj.name = "Mike"; // Allowed
console.log(obj.name); // Output: Mike
```
- `const` prevents reassignment but **does not prevent modifying the object’s properties**.  
- Use `Object.freeze(obj)` to make an object immutable.

```js
const obj = Object.freeze({ name: "John" });
obj.name = "Mike"; // No effect, silently fails
console.log(obj.name); // Output: John
```

### **3. Copying Objects Incorrectly**
```js
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { ...obj1 };

obj2.b.c = 100;

console.log(obj1.b.c); // Output: 100 (Unexpected)
```
- Spread operator only creates a **shallow copy**, so nested objects remain referenced.

---

## **8. Summary Table**  

| Feature            | Pass by Value                     | Pass by Reference                 |
|--------------------|---------------------------------|-----------------------------------|
| **Data Types**     | Primitives (`Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`) | Objects (`Object`, `Array`, `Function`) |
| **Memory Location** | Stored in **Stack**             | Stored in **Heap**               |
| **Copies or References?** | **Copies the value**      | **Copies the reference**         |
| **Modification Effect** | Does **not** affect original | Affects original object          |
| **Fix to Avoid Mutation** | No fix needed            | Use spread operator or deep copy |

---

## **Final Thoughts**
- **Primitive values** are passed **by value**, meaning they are copied.
- **Objects, arrays, and functions** are passed **by reference**, meaning modifications affect the original data.
- Use **spread operator `{ ...obj }`** or **deep cloning (`JSON.parse(JSON.stringify(obj))` or `structuredClone(obj)`)** to prevent unintended mutations.

---