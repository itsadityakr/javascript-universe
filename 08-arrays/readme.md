# Arrays in JavaScript
---

## What Are Arrays?

An **array** is a special data structure in JavaScript that lets you store multiple values in a single variable. Each value in the array is stored at a specific position called an **index**, starting from `0`.

### Example:

```javascript
let fruits = ["apple", "orange", "banana"];
```

| Index | Value    |
|-------|----------|
| 0     | "apple"  |
| 1     | "orange" |
| 2     | "banana" |

---

## Creating Arrays

You can create arrays in JavaScript in two main ways:

### Using Square Brackets (Preferred)

```javascript
let fruits = ["apple", "orange", "banana"];
```

### Using the Array Constructor

```javascript
let fruits = new Array("apple", "orange", "banana");
```

---

## Accessing Elements

To access an element in an array, use its **index** inside square brackets `[]`.  
Array indices start at `0`.

### Example:

```javascript
let fruits = ["apple", "orange", "banana"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "banana"
```

---

## Modifying Elements

You can change an element in an array by assigning a new value to its index.

### Example:

```javascript
let fruits = ["apple", "orange", "banana"];
fruits[1] = "grapes"; 
console.log(fruits); // ["apple", "grapes", "banana"]
```

---

## Adding and Removing Elements

JavaScript provides methods to add or remove elements from arrays.

| Operation            | Method         | Syntax                                  | Example                                   | Result                              |
|-----------------------|----------------|-----------------------------------------|------------------------------------------|-------------------------------------|
| Add to the end        | `push()`       | `array.push(element)`                   | `fruits.push("kiwi");`                   | `["apple", "orange", "banana", "kiwi"]` |
| Remove from the end   | `pop()`        | `array.pop()`                           | `fruits.pop();`                          | `["apple", "orange"]`              |
| Add to the beginning  | `unshift()`    | `array.unshift(element)`                | `fruits.unshift("kiwi");`                | `["kiwi", "apple", "orange", "banana"]` |
| Remove from the start | `shift()`      | `array.shift()`                         | `fruits.shift();`                        | `["orange", "banana"]`             |

---

## Traversing Arrays

To perform actions on every item in an array, you can use different loops or methods.

### Using a `for` Loop

```javascript
let fruits = ["apple", "orange", "banana"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### Using a `for...of` Loop

```javascript
for (let fruit of fruits) {
  console.log(fruit);
}
```

### Using the `forEach()` Method

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

---

## Transforming Arrays

To create a new array by modifying each element, use the `map()` method.

### Example:

```javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

---

## Adding, Removing, or Replacing Specific Items

The `splice()` method can add, remove, or replace items at specific positions in an array.

### Syntax:

```javascript
array.splice(startIndex, deleteCount, item1, item2, ...);
```

### Examples:

- **Add items**:

```javascript
let fruits = ["apple", "orange", "banana"];
fruits.splice(1, 0, "grapes", "kiwi");
console.log(fruits); // ["apple", "grapes", "kiwi", "orange", "banana"]
```

- **Remove items**:

```javascript
fruits.splice(2, 1); // Removes 1 item at index 2
console.log(fruits); // ["apple", "grapes", "orange", "banana"]
```

- **Replace items**:

```javascript
fruits.splice(1, 2, "pineapple"); // Removes 2 items starting at index 1 and adds "pineapple"
console.log(fruits); // ["apple", "pineapple", "banana"]
```

---

## Key Methods at a Glance

| Method        | Description                           |
|---------------|---------------------------------------|
| `push()`      | Adds one or more elements to the end  |
| `pop()`       | Removes the last element             |
| `unshift()`   | Adds one or more elements to the start|
| `shift()`     | Removes the first element            |
| `splice()`    | Adds, removes, or replaces elements  |
| `forEach()`   | Executes a function on each element  |
| `map()`       | Creates a new array by transforming elements |

---

## Searching in Arrays

JavaScript provides methods like `indexOf`, `lastIndexOf`, and `includes` to search for specific elements in an array.

### 1. `indexOf()`

Returns the first index of a specified element. If the element is not found, it returns `-1`.

#### Syntax:
```javascript
array.indexOf(searchElement[, fromIndex]);
```

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.indexOf(4)); // 3
console.log(numbers.indexOf(7)); // -1
```

### 2. `lastIndexOf()`

Returns the last index of a specified element, searching backward.

#### Syntax:
```javascript
array.lastIndexOf(searchElement[, fromIndex]);
```

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 4];
console.log(numbers.lastIndexOf(4)); // 6
```

### 3. `includes()`

Checks if an array contains a specified element. Returns `true` or `false`.

#### Syntax:
```javascript
array.includes(searchElement[, fromIndex]);
```

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(7)); // false
```

---

## Filtering Arrays

Filtering creates a new array with elements that satisfy a condition.

### 1. `filter()`

Creates a new array with elements that pass a test function.

#### Syntax:
```javascript
array.filter(callbackFn(element, index, array));
```

#### Example:
Filter out numbers greater than 4:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const filtered = numbers.filter(num => num > 4);
console.log(filtered); // [5, 6]
```

### Use Case: Removing an Item

Remove a specific value (e.g., `6`) from an array:
```javascript
const numbers = [1, 2, 3, 6, 4, 6, 5];
const updatedNumbers = numbers.filter(num => num !== 6);
console.log(updatedNumbers); // [1, 2, 3, 4, 5]
```

---

## Finding Elements

### 1. `find()`

Returns the first element that satisfies a test function. If no element matches, it returns `undefined`.

#### Syntax:
```javascript
array.find(callbackFn(element, index, array));
```

#### Example:
Find the first number greater than `4`:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.find(num => num > 4);
console.log(result); // 5
```

### 2. `findIndex()`

Returns the index of the first element that satisfies a test function. Returns `-1` if no match is found.

#### Syntax:
```javascript
array.findIndex(callbackFn(element, index, array));
```

#### Example:
Find the index of the first number greater than `4`:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const index = numbers.findIndex(num => num > 4);
console.log(index); // 4
```

---

## Sorting Arrays

The `sort()` method sorts an array in place and returns the sorted array.

### 1. Default Sorting

By default, `sort()` sorts elements as **strings** in ascending order.

#### Syntax:
```javascript
array.sort();
```

#### Example:
```javascript
const fruits = ["Banana", "Apple", "Orange"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]
```

### 2. Numeric Sorting

To sort numbers, you must provide a **comparison function**.

#### Syntax:
```javascript
array.sort((a, b) => a - b); // Ascending
array.sort((a, b) => b - a); // Descending
```

#### Example:
```javascript
const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 2, 3, 5, 8]

numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // [8, 5, 3, 2, 1]
```

---

## Challenges

1. **Add "Dec" at the end of an array:**
```javascript
const months = ["Jan", "March", "April"];
months.push("Dec");
console.log(months); // ["Jan", "March", "April", "Dec"]
```

2. **Return value of `splice()`:**
The `splice()` method returns an array of removed elements.

```javascript
const months = ["Jan", "March", "April"];
const removed = months.splice(1, 1);
console.log(removed); // ["March"]
```

3. **Update "march" to "March":**
```javascript
const months = ["Jan", "march", "April"];
const index = months.indexOf("march");
if (index !== -1) {
  months[index] = "March";
}
console.log(months); // ["Jan", "March", "April"]
```

4. **Delete "June":**
```javascript
const months = ["Jan", "March", "April", "June"];
const index = months.indexOf("June");
if (index !== -1) {
  months.splice(index, 1);
}
console.log(months); // ["Jan", "March", "April"]
```

---

Here’s a clear and organized guide to **important array methods in JavaScript: `map()`, `filter()`, and `reduce()`** with examples and syntax.

---

### 1. **`map()`**

- **Purpose:** Creates a new array by applying a function to each element of the original array.
- **Key Points:**
  - Does **not** mutate the original array.
  - Iterates through all elements, including `null` or `undefined`.

#### Syntax:
```javascript
array.map(callback(currentValue, index, array));
```

#### Example: Squaring Numbers
```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]
```

---

#### Challenges with `map()`:

**1. Capitalize Strings**
Convert all strings in an array to lowercase:
```javascript
const words = ["APPLE", "banana", "cherry", "date"];
const lowercaseWords = words.map(word => word.toLowerCase());
console.log(lowercaseWords); // ["apple", "banana", "cherry", "date"]
```

**2. Square Only Even Numbers**
Return squares of even numbers in a new array:
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenSquares = numbers
  .map(num => (num % 2 === 0 ? num * num : undefined))
  .filter(num => num !== undefined);
console.log(evenSquares); // [4, 16]
```

**3. Prefix Names with "Mr."**
Add `"Mr. "` as a prefix to each name in an array:
```javascript
const names = ["ram", "vinod", "laxman"];
const prefixedNames = names.map(name => `Mr. ${name}`);
console.log(prefixedNames); // ["Mr. ram", "Mr. vinod", "Mr. laxman"]
```

---

### 2. **`reduce()`**

- **Purpose:** Reduces an array to a single value by iterating over its elements and applying a function.
- **Key Points:**
  - Takes an **accumulator** (result so far) and the **current value**.
  - Can optionally take an **initial value** for the accumulator.
  - Returns the final accumulated result.

#### Syntax:
```javascript
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

#### Example: Sum of Numbers
```javascript
const productPrice = [100, 200, 300, 400, 500];
const totalPrice = productPrice.reduce((accum, curElem) => accum + curElem, 0);
console.log(totalPrice); // 1500
```

#### Example: Flatten an Array
```javascript
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((accum, curElem) => accum.concat(curElem), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]
```

---

### Comparison of Methods:

| Method    | Use Case                     | Returns           | Example                                     |
|-----------|------------------------------|-------------------|---------------------------------------------|
| `map()`   | Transform all elements       | New array         | Add 1 to all numbers                        |
| `filter()`| Select specific elements     | New array         | Numbers > 10                                |
| `reduce()`| Aggregate into a single value| Single value      | Sum of all numbers                          |

---