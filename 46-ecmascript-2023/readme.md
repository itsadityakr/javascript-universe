# **ECMAScript Features (2023) / ES14**  

---

### **New Features Introduced in ES13 (ES2023)**  
1. `Array.findLast()` & `Array.findLastIndex()`  
2. New `Array.prototype` Methods  
   - `.toReversed()`  
   - `.toSorted(compareFn)`  
   - `.toSpliced(start, deleteCount, ...items)`  
   - `.with(index, value)`  

---

## **1. `Array.findLast()` & `Array.findLastIndex()`**  

### **Problem Before ES13**  
The standard `.find()` method finds the first element that matches a condition.  
But what if we need to find the **last matching** element?  

```javascript
const array = [1, 2, 3, 4, 5, 6, 4];

console.log(array.find((elem) => elem > 4)); 
// Output: 5 (First match from start)
```

This is **not ideal** if we want to find the last matching value.  

### **Solution: `findLast()` and `findLastIndex()`**  
These methods **search from the end** of the array instead of the beginning.  

```javascript
console.log(array.findLast((elem) => elem > 4));  
// Output: 6 (Last match from end)

console.log(array.findLastIndex((elem) => elem > 4));  
// Output: 5 (Index of last match)
```

---

## **2. New `Array.prototype` Methods**  

### **a) `.toReversed()`**  
A non-mutating version of `.reverse()`.  
Previously, `.reverse()` modified the original array, but `.toReversed()` **returns a new array**.  

```javascript
const names = ["Alice", "Bob", "Charlie"];
const reversedNames = names.toReversed();

console.log("Original:", names);      // Output: ["Alice", "Bob", "Charlie"]
console.log("Reversed:", reversedNames); // Output: ["Charlie", "Bob", "Alice"]
```

---

### **b) `.toSorted(compareFn)`**  
A non-mutating version of `.sort()`.  
Before, `.sort()` changed the original array. Now, `.toSorted()` **returns a new sorted array**.  

```javascript
const numbers = [3, 1, 4, 1, 5, 9];
const sortedNumbers = numbers.toSorted();

console.log("Original:", numbers);  // Output: [3, 1, 4, 1, 5, 9]
console.log("Sorted:", sortedNumbers);  // Output: [1, 1, 3, 4, 5, 9]
```

---

### **c) `.toSpliced(start, deleteCount, ...items)`**  
A non-mutating version of `.splice()`.  
Previously, `.splice()` **modified** the original array. Now, `.toSpliced()` **returns a new array**.  

```javascript
const names = ["Alice", "Bob", "Charlie"];
const newNames = names.toSpliced(1, 1, "David");

console.log("Original:", names);  // Output: ["Alice", "Bob", "Charlie"]
console.log("Spliced:", newNames); // Output: ["Alice", "David", "Charlie"]
```

---

### **d) `.with(index, value)`**  
A non-mutating way to replace a value at a specific index.  
Before, we had to manually copy and modify an array. Now, `.with()` makes it simpler.  

```javascript
const names = ["Alice", "Bob", "Charlie"];
const newNames = names.with(1, "David");

console.log("Original:", names);  // Output: ["Alice", "Bob", "Charlie"]
console.log("Updated:", newNames); // Output: ["Alice", "David", "Charlie"]
```

---

### **Summary**  
| Feature | Description |
|---------|-------------|
| `findLast()` | Finds the last matching element in an array. |
| `findLastIndex()` | Finds the index of the last matching element. |
| `toReversed()` | Returns a reversed array **without modifying the original**. |
| `toSorted(compareFn)` | Returns a sorted array **without modifying the original**. |
| `toSpliced(start, deleteCount, ...items)` | Returns a spliced array **without modifying the original**. |
| `with(index, value)` | Returns a new array with a modified value at a given index. |

---