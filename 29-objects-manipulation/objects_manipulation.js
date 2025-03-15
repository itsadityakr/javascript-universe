// ===================== JavaScript: Object Methods & Interview Questions =====================
// JavaScript objects store key-value pairs and provide built-in methods for manipulation.
// ===========================================================================================

// -------------------------------------------------------------------------------------------
// 1. Example Object
// -------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------
// 2. Object Methods
// -------------------------------------------------------------------------------------------

// Object.keys() - Returns an array of all property names (keys)
let keys = Object.keys(product);
console.log(keys);
// Expected Output: [ 'id', 'name', 'category', 'brand', 'price', 'stock', 'description', 'image' ]

// Object.values() - Returns an array of all property values
let values = Object.values(product);
console.log(values);
// Expected Output: [1, 'Laptop', 'Computers', 'ExampleBrand', 999.99, 50, 'Powerful laptop...', 'image link...']

// Object.entries() - Returns an array of key-value pairs
let entries = Object.entries(product);
console.log(entries);
// Expected Output: [['id', 1], ['name', 'Laptop'], ..., ['image', 'image link...']]

// Object.hasOwnProperty() - Checks if a property exists
console.log(product.hasOwnProperty("name")); // Expected Output: true
console.log(product.hasOwnProperty("isStudent")); // Expected Output: false

// Object.assign() - Merges two or more objects
const target = { a: 1, b: 5 };
const source = { b: 3, c: 4 };
const mergedObject = Object.assign({}, target, source);
console.log(mergedObject);
// Expected Output: { a: 1, b: 3, c: 4 }

// Object.freeze() - Freezes an object (prevents modification)
Object.freeze(product);
product.price = 1200; // ❌ Modification won't apply
console.log(product.price); // Expected Output: 999.99 (unchanged)

// -------------------------------------------------------------------------------------------
// 3. Interview Questions on Objects
// -------------------------------------------------------------------------------------------

// 3.1 Merging objects with Object.assign()
const mergedObjExample = Object.assign({}, { x: 10, y: 20 }, { y: 30, z: 40 });
console.log(mergedObjExample);
// Expected Output: { x: 10, y: 30, z: 40 }

// 3.2 Add a Subject to a Student’s Grades
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
// Expected Output: { name: 'Bob', age: 20, grades: { math: 90, science: 85, history: 88, computer: 92 } }

// 3.3 Compare Two Objects
const areObjectsEqual = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

let objA = { name: "Alice", age: 26, city: "New York" };
let objB = { name: "Alice", age: 26, city: "New York" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };

console.log(areObjectsEqual(objA, objB)); // Expected Output: true
console.log(areObjectsEqual(objA, objC)); // Expected Output: false

// 3.4 Transform an Array of Objects into an Object
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
/* Expected Output:
{
  '1': { id: 1, name: 'Alice' },
  '2': { id: 2, name: 'Bob' },
  '3': { id: 3, name: 'Charlie' }
}
*/

// -------------------------------------------------------------------------------------------
// 4. Summary of Object Methods
// -------------------------------------------------------------------------------------------
// Summary of Object Methods:
// 1. Object.keys(obj)  -> Returns an array of keys.
// 2. Object.values(obj) -> Returns an array of values.
// 3. Object.entries(obj) -> Returns an array of [key, value] pairs.
// 4. Object.hasOwnProperty(prop) -> Checks if a property exists.
// 5. Object.assign(target, ...sources) -> Merges objects.
// 6. Object.freeze(obj) -> Freezes an object (no modifications allowed).