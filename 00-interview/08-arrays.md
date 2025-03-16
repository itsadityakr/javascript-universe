# JS Interview Questions #8
---

## **Arrays in JavaScript**

---

### **1. What is the difference between an array and an object in JavaScript?**  

#### **Important Terms:**  
- **Array:** A special type of object used to store ordered, indexed collections of elements.  
- **Object:** A collection of key-value pairs where values are accessed by keys, not indexes.  

#### **Answer:**  
- Arrays are **ordered** collections of elements, accessed by numerical indexes.  
- Objects are **unordered** collections of key-value pairs, accessed using property names.  

Example:  
```javascript
const arrayExample = [10, 20, 30]; // Array
console.log(arrayExample[0]); // 10

const objectExample = { a: 10, b: 20 }; // Object
console.log(objectExample.a); // 10
```
**Key Differences:**  
| Feature  | Arrays | Objects |  
|----------|--------|---------|  
| Indexing | Uses numbers (0,1,2...) | Uses named keys |  
| Order | Ordered | Unordered |  
| Use case | Lists, sequences | Key-value mappings |  

---

### **2. How do you check if a variable is an array in JavaScript?**  

#### **Important Terms:**  
- **`Array.isArray()`**: The best method to check if a variable is an array.  

#### **Answer:**  
Use `Array.isArray(variable)` to check if a variable is an array.  

Example:  
```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ key: "value" })); // false
```
Other methods (not recommended):  
```javascript
console.log(myVar instanceof Array); // Works but unreliable across frames
console.log(Object.prototype.toString.call(myVar) === "[object Array]"); // Works but verbose
```

---

### **3. What is the difference between `array.length = 0` and `array = []`?**  

#### **Important Terms:**  
- **`array.length = 0`**: Clears the array but keeps the reference.  
- **`array = []`**: Creates a new empty array and changes the reference.  

#### **Answer:**  
```javascript
let arr = [1, 2, 3];

arr.length = 0; // Clears the array but keeps reference
console.log(arr); // []

arr = []; // Assigns a new empty array, old reference lost
console.log(arr); // []
```
**Key Difference:**  
- `arr.length = 0` affects all references to the array.  
- `arr = []` does not affect other references to the original array.  

---

### **4. How do arrays behave differently when assigned to another variable in JavaScript?**  

#### **Important Terms:**  
- **Reference Type:** Arrays are stored in memory as references, not copies.  

#### **Answer:**  
When you assign an array to another variable, both variables **point to the same reference** in memory.  

Example:  
```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // Both refer to the same array

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (Modified!)
```
To create a copy instead:  
```javascript
let arrCopy = [...arr1]; // Spread operator
```

---

### **5. What is the difference between shallow copy and deep copy in arrays?**  

#### **Important Terms:**  
- **Shallow Copy:** Copies only references to nested objects.  
- **Deep Copy:** Creates a fully independent copy.  

#### **Answer:**  
```javascript
let original = [{ a: 1 }, { b: 2 }];

let shallowCopy = [...original]; // Shallow copy
shallowCopy[0].a = 42; 

console.log(original[0].a); // 42 (Changed!)
```
To create a **deep copy**:  
```javascript
let deepCopy = JSON.parse(JSON.stringify(original));
```
**Shallow copies** affect the original object for nested data, while **deep copies** do not.  

---

### **6. What is the difference between `.map()`, `.forEach()`, and `.reduce()`?**  

#### **Important Terms:**  
- **`.map()`**: Returns a new array by transforming elements.  
- **`.forEach()`**: Iterates but does not return a new array.  
- **`.reduce()`**: Reduces the array to a single value.  

#### **Answer:**  
```javascript
const arr = [1, 2, 3];

const mapped = arr.map(x => x * 2); // [2, 4, 6]
const forEachResult = arr.forEach(x => console.log(x * 2)); // No return
const reduced = arr.reduce((sum, num) => sum + num, 0); // 6
```

---

### **7. How does `.filter()` work, and how does it differ from `.map()`?**  

#### **Important Terms:**  
- **`.filter()`**: Returns a new array with elements that pass a condition.  
- **`.map()`**: Transforms each element and returns a new array.  

#### **Answer:**  
```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(n => n % 2 === 0); // [2, 4]
const squaredNumbers = numbers.map(n => n ** 2); // [1, 4, 9, 16, 25]
```

---

### **8. How do you remove duplicate values from an array in JavaScript?**  

#### **Important Terms:**  
- **`Set`**: A collection of unique values.  

#### **Answer:**  
Using `Set`:  
```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)]; // [1, 2, 3, 4]
```
Other methods:  
```javascript
const uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
```

---

### **9. What is the difference between `.splice()` and `.slice()`?**  

#### **Important Terms:**  
- **`.splice()`**: Modifies the original array.  
- **`.slice()`**: Returns a new array without modifying the original.  

#### **Answer:**  
```javascript
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2); // Removes 2nd and 3rd elements, modifies array
console.log(arr); // [1, 4, 5]

let slicedArr = arr.slice(1, 3); // Extracts elements without modifying
console.log(slicedArr); // [4, 5]
```

---

### **10. How do `.push()`, `.pop()`, `.shift()`, and `.unshift()` work?**  

#### **Important Terms:**  
- **`.push()`**: Adds an element to the end.  
- **`.pop()`**: Removes the last element.  
- **`.shift()`**: Removes the first element.  
- **`.unshift()`**: Adds an element to the beginning.  

#### **Answer:**  
```javascript
let arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]

arr.unshift(0); // [0, 1, 2, 3]
arr.shift(); // [1, 2, 3]
```
| Method   | Effect | Returns |  
|----------|--------|---------|  
| `.push(x)` | Adds `x` to the end | New length |  
| `.pop()` | Removes last element | Removed element |  
| `.shift()` | Removes first element | Removed element |  
| `.unshift(x)` | Adds `x` to the start | New length |  


---

### **11. How do you reverse an array without modifying the original array?**  

#### **Important Terms:**  
- **`.reverse()`**: Modifies the original array.  
- **`slice()`**: Creates a copy to prevent modification.  

#### **Answer:**  
To reverse an array **without modifying it**, use `slice()` with `reverse()`:  
```javascript
const arr = [1, 2, 3, 4, 5];
const reversedArr = [...arr].reverse(); // or arr.slice().reverse()

console.log(reversedArr); // [5, 4, 3, 2, 1]
console.log(arr); // [1, 2, 3, 4, 5] (Unchanged)
```
Using `reduce()`:  
```javascript
const reversed = arr.reduce((acc, val) => [val, ...acc], []);
```
---

### **12. What is the purpose of `.find()` and `.findIndex()` methods?**  

#### **Important Terms:**  
- **`.find()`**: Returns the first matching element.  
- **`.findIndex()`**: Returns the index of the first matching element.  

#### **Answer:**  
```javascript
const numbers = [10, 20, 30, 40, 50];

const found = numbers.find(num => num > 25); // 30-how-js-works
const foundIndex = numbers.findIndex(num => num > 25); // 2

console.log(found, foundIndex);
```
**Key Difference:**  
| Method | Returns | When No Match |  
|--------|---------|--------------|  
| `.find()` | Element | `undefined` |  
| `.findIndex()` | Index | `-1` |  

---

### **13. How do you sort an array of numbers correctly in JavaScript?**  

#### **Important Terms:**  
- **`.sort()`**: Converts elements to strings and sorts lexicographically.  
- **Comparator Function**: Ensures numerical sorting.  

#### **Answer:**  
```javascript
const numbers = [10, 5, 8, 1, 4];

numbers.sort((a, b) => a - b); // Correct numerical sorting
console.log(numbers); // [1, 4, 5, 8, 10]
```
---

### **14. How does the `.some()` method differ from `.every()`?**  

#### **Important Terms:**  
- **`.some()`**: Returns `true` if at least one element passes the test.  
- **`.every()`**: Returns `true` if all elements pass the test.  

#### **Answer:**  
```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers.some(num => num > 25)); // true
console.log(numbers.every(num => num > 25)); // false
```
**Key Differences:**  
| Method | Returns `true` if | Stops Early? |  
|--------|------------------|-------------|  
| `.some()` | At least one element matches | Yes |  
| `.every()` | All elements match | Yes (on first failure) |  

---

### **15. How do you merge two arrays without duplicates?**  

#### **Important Terms:**  
- **`Set`**: Automatically removes duplicates.  
- **`concat()` and `spread operator`**: Used to merge arrays.  

#### **Answer:**  
```javascript
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const merged = [...new Set([...arr1, ...arr2])]; // [1, 2, 3, 4, 5]
```
---

### **16. What is the most efficient way to loop through an array?**  

#### **Important Terms:**  
- **`for` loop**: Fastest for performance.  
- **`.forEach()`**: Clean but slightly slower.  

#### **Answer:**  
```javascript
const arr = [1, 2, 3, 4];

// Most efficient
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Cleanest for readability
arr.forEach(num => console.log(num));
```
---

### **17. How do JavaScript arrays handle sparse (empty) indexes?**  

#### **Important Terms:**  
- **Sparse Arrays**: Arrays with missing indices (`holes`).  

#### **Answer:**  
```javascript
const arr = [1, , 3]; // Sparse array
console.log(arr[1]); // undefined (but exists)
console.log(arr.length); // 3
```
Operations like `.map()` and `.forEach()` **skip** sparse indexes.  

---

### **18. How do you flatten a nested array in JavaScript?**  

#### **Important Terms:**  
- **`.flat(depth)`**: Flattens an array to a specified depth.  

#### **Answer:**  
```javascript
const nested = [1, [2, [3, 4]], 5];

const flatArr = nested.flat(2); // [1, 2, 3, 4, 5]
console.log(flatArr);
```
For deep flattening:  
```javascript
const deepFlat = arr => arr.flatMap(x => Array.isArray(x) ? deepFlat(x) : x);
```
---

### **19. What is the difference between `.reduce()` and `.flatMap()`?**  

#### **Important Terms:**  
- **`.reduce()`**: Accumulates values into a single output.  
- **`.flatMap()`**: Maps and flattens in one step.  

#### **Answer:**  
```javascript
const numbers = [1, 2, 3];

// Reduce: Sum all numbers
const sum = numbers.reduce((acc, val) => acc + val, 0); // 6

// FlatMap: Double numbers and flatten result
const flatMapped = numbers.flatMap(n => [n, n * 2]); // [1, 2, 2, 4, 3, 6]
```
---

### **20. How can you shuffle the elements of an array randomly?**  

#### **Important Terms:**  
- **Fisher-Yates Algorithm**: The most efficient way to shuffle an array.  

#### **Answer:**  
```javascript
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
}

const numbers = [1, 2, 3, 4, 5];
shuffleArray(numbers);
console.log(numbers);
```

---


---

### **21. Find the Second Largest Number in an Array**  

#### **Approach:**  
1. Remove duplicates to avoid incorrect results.  
2. Sort the array in descending order.  
3. Return the second element.  

#### **Solution:**  
```javascript
function secondLargest(arr) {
    let uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1] ?? null; // Return second largest or null if not found
}

console.log(secondLargest([10, 20, 4, 45, 99, 99])); // 45
```
**Alternative Approach:**  
```javascript
function secondLargest(arr) {
    let max = -Infinity, secondMax = -Infinity;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    return secondMax === -Infinity ? null : secondMax;
}
```
---

### **22. Rotate an Array `n` Times to the Right**  

#### **Approach:**  
- Use slicing and concatenation to rotate efficiently.  
- Optimize by reducing unnecessary rotations (`n % length`).  

#### **Solution:**  
```javascript
function rotateArray(arr, n) {
    let rotations = n % arr.length; // Avoid extra rotations
    return [...arr.slice(-rotations), ...arr.slice(0, -rotations)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
```
**Alternative Approach (Using Loop)**  
```javascript
function rotateArray(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
```
---

### **23. Find the Intersection of Two Arrays**  

#### **Approach:**  
- Use `Set` for fast lookup.  
- Filter elements present in both arrays.  

#### **Solution:**  
```javascript
function arrayIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    return arr2.filter(num => set1.has(num));
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
```
**Alternative Approach (Using `.reduce()`)**  
```javascript
function arrayIntersection(arr1, arr2) {
    return arr1.reduce((acc, num) => arr2.includes(num) ? [...acc, num] : acc, []);
}
```
---

### **24. Flatten a Nested Array Without Using `.flat()`**  

#### **Approach:**  
- Use **recursion** to iterate through nested arrays.  
- Use **reduce()** and `concat()` to flatten dynamically.  

#### **Solution:**  
```javascript
function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
```
**Alternative Approach (Using Stack - Iterative Method)**  
```javascript
function flattenArray(arr) {
    let stack = [...arr];
    let result = [];

    while (stack.length) {
        let next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next); // Spread nested array into stack
        } else {
            result.push(next);
        }
    }
    return result.reverse(); // Since we used `pop()`, reverse for correct order
}
```
---

### **25. Find the Missing Number in a Consecutive Sequence**  

#### **Approach:**  
- Use **sum formula**: Sum of first `n` natural numbers = `(n * (n + 1)) / 2`.  
- Subtract the sum of the given array from the expected sum.  

#### **Solution:**  
```javascript
function findMissingNumber(arr) {
    let n = arr.length + 1; // Since one number is missing
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
```
**Alternative Approach (Using XOR - More Efficient)**  
```javascript
function findMissingNumber(arr) {
    let missing = arr.length + 1;
    for (let i = 1; i <= arr.length + 1; i++) {
        missing ^= i;
    }
    for (let num of arr) {
        missing ^= num;
    }
    return missing;
}
```
**Explanation:**  
- XOR cancels out duplicate values and isolates the missing number.  
- Faster than sum-based method (avoids large number operations).  


---

![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)