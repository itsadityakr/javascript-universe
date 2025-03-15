// ==========================================
//   Pass by Value vs Pass by Reference
// ==========================================

// ==========================================
// 1. Understanding JavaScript Memory Model
// ==========================================

// JavaScript stores data in two types of memory:
// - Stack (for Primitive Data Types - Pass by Value)
// - Heap (for Reference Data Types - Pass by Reference)

// Stack Memory:
// - Stores primitive values directly (fixed size, immutable).
// - Each variable gets a separate copy of the value.

// Heap Memory:
// - Stores reference types like objects and arrays.
// - Variables hold references (pointers) to the actual data in memory.
// - Modifying a reference modifies the original object.

// ==========================================
// 2. Pass by Value (Primitives)
// ==========================================
// - When a primitive type is assigned to another variable,
//   JavaScript creates a new copy of the value.
// - Changing the new variable does NOT affect the original variable.

let num1 = 10;
let num2 = num1; // num2 gets a COPY of num1

num2 = 20; // Changing num2 does NOT change num1

console.log(num1); // Output: 10
console.log(num2); // Output: 20

// Example with Strings (also a primitive type)
let str1 = "Hello";
let str2 = str1;

str2 = "World";

console.log(str1); // Output: Hello
console.log(str2); // Output: World

// ==========================================
// 3. Pass by Value in Functions
// ==========================================
// - When primitives are passed to a function,
//   JavaScript passes a copy of the value.

function updateNumber(x) {
    x = 100; // This modifies the local copy
}

let value = 50;
updateNumber(value);

console.log(value); // Output: 50 (unchanged)

// ==========================================
// 4. Pass by Reference (Objects & Arrays)
// ==========================================
// - When assigning an object/array to a variable,
//   JavaScript assigns a reference (memory address), NOT a copy.
// - Modifying the new variable modifies the original object.

let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 gets a reference to obj1's memory location

obj2.name = "Bob"; // Modifies the same memory location

console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob

// ==========================================
// 5. Pass by Reference in Functions
// ==========================================
// - When an object is passed to a function,
//   any modification inside the function affects the original object.

function modifyObject(obj) {
    obj.age = 30; // Modifies the original object
}

let person = { name: "David" };
modifyObject(person);

console.log(person.age); // Output: 30 (original object modified)

// ==========================================
// 6. Comparison of Objects & Arrays (Reference-Based)
// ==========================================
// - Objects & Arrays are compared by their reference (memory address),
//   not by their content.

let objA = { value: 10 };
let objB = { value: 10 };

console.log(objA === objB); // Output: false (different memory locations)

let objC = objA; // objC and objA reference the same object

console.log(objA === objC); // Output: true (same memory reference)

// ==========================================
// 7. Preventing Unwanted Changes (Avoiding Mutation)
// ==========================================

// Using the spread operator `{ ...obj }` (Shallow Copy)
let original = { name: "Emma", details: { age: 25 } };
let copy = { ...original }; // Creates a new object, but nested objects are still referenced

copy.name = "Sophia"; // Changes only the top-level property
copy.details.age = 30; // This affects the original object (shallow copy issue)

console.log(original.details.age); // Output: 30 (unexpected)
console.log(copy.details.age);  // Output: 30

// ==========================================
// 8. Deep Copying (Creating a Completely Independent Copy)
// ==========================================
// - A **deep copy** creates a fully independent object, including nested properties.

// Using JSON.parse(JSON.stringify(obj)) - Works for simple objects
let nestedObj = { person: { name: "John", age: 30 } };
let deepCopy = JSON.parse(JSON.stringify(nestedObj));

deepCopy.person.name = "Michael"; // Changes only the deep copy

console.log(nestedObj.person.name); // Output: John (original object unaffected)
console.log(deepCopy.person.name);  // Output: Michael

// Modern Approach: Using `structuredClone()` (Supports functions, dates, etc.)
let deepClone = structuredClone(nestedObj);
deepClone.person.name = "Sophia";

console.log(nestedObj.person.name); // Output: John
console.log(deepClone.person.name); // Output: Sophia

// ==========================================
// 9. Common Mistakes & Misconceptions
// ==========================================

// Mistake 1: Thinking Primitives Are Passed by Reference
let text1 = "JavaScript";
let text2 = text1;

text2 = "Python";

console.log(text1); // Output: JavaScript
console.log(text2); // Output: Python

// Mistake 2: Expecting `const` to Make Objects Immutable
const user = { name: "John" };
user.name = "Mike"; // This is allowed (modifies object properties)

console.log(user.name); // Output: Mike

// To make an object immutable, use Object.freeze()
const frozenUser = Object.freeze({ name: "David" });
frozenUser.name = "James"; // This will NOT change the object

console.log(frozenUser.name); // Output: David

// Mistake 3: Copying Objects Incorrectly
let objX = { a: 1, b: { c: 2 } };
let objY = { ...objX };

objY.b.c = 100; // Changes original object due to shallow copy

console.log(objX.b.c); // Output: 100 (unexpected)

// ==========================================
// 10. Summary Table
// ==========================================


// -----------------------------------------------------
// | Feature            | Pass by Value  | Pass by Reference |
// -----------------------------------------------------
// | Data Types        | Primitives     | Objects & Arrays  |
// | Memory Location   | Stack          | Heap              |
// | Copies or References?| Copy        | Reference         |
// | Modification Effect?| No impact   | Affects original  |
// -----------------------------------------------------


// ==========================================
// 11. Final Thoughts
// ==========================================
// - **Primitive values** are passed **by value**, meaning they are copied.
// - **Objects, arrays, and functions** are passed **by reference**, meaning modifications affect the original data.
// - Use **spread operator `{ ...obj }`** or **deep cloning (`JSON.parse(JSON.stringify(obj))` or `structuredClone(obj)`)** to prevent unintended mutations.

console.log("Pass by Value vs Pass by Reference - Complete!");
