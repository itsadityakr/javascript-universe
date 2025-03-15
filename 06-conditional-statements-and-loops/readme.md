### **JavaScript Control Flow Notes**

---

### **1. Conditional Statements**

#### **1.1. If Statement**
The `if` statement executes a block of code if a specified condition is `true`.

**Syntax:**
```javascript
if (condition) {
  // Code to execute if condition is true
}
```

**Example:**
```javascript
let temperature = 35;
if (temperature > 30) {
  console.log("It's hot outside!");
}
// Output: It's hot outside!
```

---

#### **1.2. If-Else Statement**
The `if-else` statement executes one block of code if the condition is `true`, and another block if it is `false`.

**Syntax:**
```javascript
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

**Example:**
```javascript
let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella!");
} else {
  console.log("No need for an umbrella.");
}
// Output: No need for an umbrella.
```

---

#### **1.3. Else-If Ladder**
The `else-if` ladder checks multiple conditions in sequence. Once a condition is `true`, it executes its block and skips the rest.

**Syntax:**
```javascript
if (condition1) {
  // Code for condition1
} else if (condition2) {
  // Code for condition2
} else {
  // Default code if no conditions are true
}
```

**Example:**
```javascript
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
// Output: Grade: B
```

---

#### **1.4. Switch Statement**
The `switch` statement evaluates an expression and matches it against multiple cases. If no cases match, the `default` case is executed.

**Syntax:**
```javascript
switch (expression) {
  case value1:
    // Code for case 1
    break;
  case value2:
    // Code for case 2
    break;
  default:
    // Code if no cases match
}
```

**Example:**
```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Midweek day.");
}
// Output: Start of the work week.
```

---

### **2. Loops**

#### **2.1. While Loop**
Executes a block of code repeatedly as long as the condition is `true`.

**Syntax:**
```javascript
while (condition) {
  // Code to execute
}
```

**Example:**
```javascript
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
```

---

#### **2.2. Do-While Loop**
Executes a block of code at least once, then repeats as long as the condition is `true`.

**Syntax:**
```javascript
do {
  // Code to execute
} while (condition);
```

**Example:**
```javascript
let number = 1;
do {
  console.log("Number:", number);
  number++;
} while (number <= 3);
// Output:
// Number: 1
// Number: 2
// Number: 3
```

---

#### **2.3. For Loop**
The `for` loop is used when the number of iterations is known.

**Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
  // Code to execute
}
```

**Example:**
```javascript
for (let i = 1; i <= 5; i++) {
  console.log("i:", i);
}
// Output:
// i: 1
// i: 2
// i: 3
// i: 4
// i: 5
```

---

### **3. Control Statements**

#### **3.1. Break**
The `break` statement exits a loop or switch statement immediately.

**Example:**
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log("i:", i);
}
// Output:
// i: 1
// i: 2
```

---

#### **3.2. Continue**
The `continue` statement skips the current iteration and moves to the next one.

**Example:**
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("i:", i);
}
// Output:
// i: 1
// i: 2
// i: 4
// i: 5
```

---

#### **3.3. Nested Loops**
Loops can be nested within one another for handling multi-dimensional data or patterns.

**Example:**
```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
// Output:
// i=1, j=1
// i=1, j=2
// i=2, j=1
// i=2, j=2
// i=3, j=1
// i=3, j=2
```

---

#### **3.4. Infinite Loops**
Infinite loops run forever unless explicitly stopped (e.g., with `break`).

**Example:**
```javascript
let i = 0;
while (true) {
  if (i >= 3) break;
  console.log("i:", i);
  i++;
}
// Output:
// i: 0
// i: 1
// i: 2
```

---

### **4. For-In and For-Of Loops**

#### **4.1. For-In Loop**
The `for-in` loop is used to iterate over the properties of an object or the indices of an array.

**Syntax:**
```javascript
for (let key in object) {
  // Code to execute
}
```

**Example:**
```javascript
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30-how-js-works
// city: New York
```

---

#### **4.2. For-Of Loop**
The `for-of` loop is used to iterate over the values of an iterable object like arrays, strings, etc.

**Syntax:**
```javascript
for (let value of iterable) {
  // Code to execute
}
```

**Example:**
```javascript
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry
```

---

### **5. Practice Problems**

#### **5.1. Check Leap Year**
```javascript
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
// Output: 2024 is a leap year.
```

---

#### **5.2. Multiplication Table**
```javascript
let table = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} * ${i} = ${table * i}`);
}
// Output:
// 7 * 1 = 7
// 7 * 2 = 14
// ...
// 7 * 10 = 70
```

---

#### **5.3. Right-Angle Triangle Pattern**
```javascript
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *
```

---