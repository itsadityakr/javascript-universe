# ECMAScript Features (2016)

---

## Exponentiation Operator

ES7 introduced the **exponentiation operator (`**`)**, which provides a simpler way to perform exponentiation compared to `Math.pow()`.

### **Syntax**

```javascript
base_value ** exponent_value;
```

### **Basic Usage**

```javascript
let base = 2;
let exponent = 3;

console.log("Using Math.pow():", Math.pow(base, exponent)); // Output: 8
console.log("Using exponentiation operator:", base ** exponent); // Output: 8
```

### **Using in Expressions**

The exponentiation operator can be used directly in mathematical expressions.

```javascript
// Calculates the area of a circle with a radius of 5 units
let area = Math.PI * 5 ** 2;
console.log(area.toFixed(2)); // Output: 78.54
```

---

## `Array.includes()`

The `includes()` method was introduced in ES7 to check whether an array contains a specific value.

### **Syntax**

```javascript
array.includes(valueToFind);
```

### **Example**

```javascript
let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits.includes("Orange")); // Output: true
console.log(fruits.includes("Grapes")); // Output: false
```

### **Checking with Numbers**

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.includes(20)); // Output: true
console.log(numbers.includes(25)); // Output: false
```

The `includes()` method is case-sensitive and works with both **strings** and **numbers**. It simplifies checking for the presence of an element in an array without using `indexOf()`.
