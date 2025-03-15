### **JavaScript Data Types - Notes**

Data types define the kind of values that variables can hold. Understanding data types is essential for effective JavaScript programming.

---

### **1. Types of Primitive Data Types**
JavaScript has 7 primitive data types. These are immutable and directly hold values.

#### **a. Number**
- Represents numeric values, including integers and floating-point numbers.
- Example:
  ```javascript
  var favoriteNumber = -15;
  console.log(favoriteNumber); // Output: -15
  ```

#### **b. String**
- Represents a sequence of characters enclosed in single (`'`) or double (`"`) quotes.
- Example:
  ```javascript
  var userName = 'Alice';
  console.log(userName); // Output: 'Alice'
  ```

#### **c. Boolean**
- Represents logical values: `true` or `false`.
- Example:
  ```javascript
  var isSnowing = true;
  console.log(isSnowing); // Output: true
  ```

#### **d. undefined**
- A variable declared but not assigned a value.
- Example:
  ```javascript
  var currentTask;
  console.log(currentTask); // Output: undefined
  ```

#### **e. Null**
- Represents the intentional absence of a value.
- Example:
  ```javascript
  var memoryToForget = null;
  console.log(memoryToForget); // Output: null
  ```

#### **f. BigInt**
- Used for integers larger than the `Number` type can safely handle.
- Introduced in ECMAScript 2020.
- Example:
  ```javascript
  const largeValue = 987654321012345678901234567890123456789n;
  console.log(largeValue); // Output: 987654321012345678901234567890123456789n
  ```

#### **g. Symbol**
- Represents unique and immutable values, often used for unique identifiers.
- Example:
  ```javascript
  const uniqueIdentifier = Symbol("uniqueID");
  console.log(uniqueIdentifier); // Output: Symbol(uniqueID)
  ```

---

### **2. Key Concepts and Interview Questions**

#### **a. Difference Between `null` and `undefined`**
- `null`: Represents an **empty value**, explicitly set by the programmer.
- `undefined`: Represents a **lack of value**, usually due to an uninitialized variable.

Real-life analogy:
- **`null`**: An empty box.
- **`undefined`**: A box that hasn't been opened yet.

#### **b. Purpose of `typeof` Operator**
- Determines the data type of a variable.
- Example:
  ```javascript
  var userAge = 25;
  console.log(typeof userAge); // Output: 'number'
  ```

#### **c. Quirk of `typeof null`**
- Returns `'object'` due to a known bug in JavaScript.
- Example:
  ```javascript
  var emptyMemory = null;
  console.log(typeof emptyMemory); // Output: 'object'
  ```

#### **d. Primitive Data Types**
- `Number`, `String`, `Boolean`, `undefined`, `Null`, `BigInt`, `Symbol`.

#### **e. String to Number Conversion**
1. Using the `+` operator:
   ```javascript
   var stringAge = "30-how-js-works";
   console.log(typeof +stringAge); // Output: 'number'
   ```
2. Using `Number()`:
   ```javascript
   console.log(typeof Number(stringAge)); // Output: 'number'
   ```

#### **f. Number to String Conversion**
1. Using concatenation with an empty string:
   ```javascript
   var score = 42;
   console.log(typeof (score + "")); // Output: 'string'
   ```

---

### **3. Truthy and Falsy Values**

#### **Truthy Values**
- Evaluated as `true` in Boolean contexts.
- Examples: `true`, `"hello"`, `1`, `{}`, `[]`.

#### **Falsy Values**
- Evaluated as `false` in Boolean contexts.
- Examples: `false`, `0`, `''`, `null`, `undefined`, `NaN`.

Example to check:
```javascript
var temperature = 0;
if (temperature) {
  console.log("This is a truthy value");
} else {
  console.log("This is a falsy value"); // Output: This is a falsy value
}
```

---

### **4. `parseInt` and `parseFloat`**

#### **a. `parseInt`**
- Converts a string to an integer (ignores the decimal part).
- Example:
  ```javascript
  const stringValue = "89.7";
  console.log(parseInt(stringValue)); // Output: 89
  ```

#### **b. `parseFloat`**
- Converts a string to a floating-point number (includes the decimal part).
- Example:
  ```javascript
  console.log(parseFloat(stringValue)); // Output: 89.7
  ```

#### **c. Key Differences**
- `parseInt`: Processes only the integer part.
- `parseFloat`: Processes the entire number, including decimals.

#### **Additional Examples**
```javascript
console.log(parseInt("567xyz")); // Output: 567
console.log(parseFloat("567.89abc")); // Output: 567.89
console.log(parseInt("&567")); // Output: NaN
```

---

### **5. NaN (Not a Number)**
- Represents a value that is not a valid number.
- Example:
  ```javascript
  console.log(isNaN("unknown")); // Output: true
  console.log(parseInt("random")); // Output: NaN
  ```

#### **Unique Behavior: NaN !== NaN**
- `NaN` is not equal to itself.
- Example:
  ```javascript
  if (NaN === NaN) {
    console.log("Both are equal");
  } else {
    console.log("NaN is not equal to NaN"); // This will execute
  }
  ```

---

### **6. Summary Table of Primitive Data Types**

| Data Type   | Description                           | Example                                      |
|-------------|---------------------------------------|----------------------------------------------|
| **Number**  | Numeric values                        | `42`, `-3.14`                               |
| **String**  | Sequence of characters                | `"hello"`, `'world'`                        |
| **Boolean** | Logical true/false values             | `true`, `false`                             |
| **undefined** | Uninitialized variable             | `var x; // undefined`                       |
| **Null**    | Intentional absence of value          | `var x = null;`                             |
| **BigInt**  | Arbitrary precision integers          | `123456789012345678901234567890123456789n`  |
| **Symbol**  | Unique identifiers                   | `Symbol("id")`                              |

---