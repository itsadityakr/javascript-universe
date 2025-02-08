# JSON in JavaScript

## 1. What is JSON?  
- JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging data.  
- It is not a programming language but a structured way to represent data.  
- JSON is widely used in web development, APIs, configuration files, databases, and data exchange between systems.  

### Key Features  
- **Human-readable** and easy to understand.  
- **Lightweight** and efficient.  
- **Language-independent** and works across different programming languages.  
- **Easily parsed and generated** in JavaScript and other languages.  

## 2. JSON Syntax and Structure  

### JSON Basics  
- JSON consists of **key-value pairs**.  
- Keys must be **strings enclosed in double quotes**.  
- Values can be:  
  - **Strings**: `"Hello"`  
  - **Numbers**: `42, 3.14`  
  - **Booleans**: `true, false`  
  - **Null**: `null`  
  - **Arrays**: `[1, 2, 3]`  
  - **Objects**: `{ "name": "John", "age": 30 }`  

### Example JSON Object  
```json
{
  "name": "Alice",
  "age": 28,
  "isStudent": false,
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}
```

### JSON Rules  
1. Keys must be **enclosed in double quotes**.  
   ```json
   { "name": "John" }  // Correct
   { name: "John" }    // Incorrect
   ```
2. Values must be **valid JSON types** (strings, numbers, booleans, null, arrays, or objects).  
3. **No trailing commas** are allowed.  
   ```json
   { "name": "John", "age": 30 }  // Correct
   { "name": "John", "age": 30, } // Incorrect
   ```
4. JSON **does not support comments**.  

---

## 3. Converting JSON to JavaScript Object  

### `JSON.parse()`
- Converts a **JSON string** into a **JavaScript object**.  
- Used when receiving JSON data from an API or a file.  

#### Example  
```js
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John
console.log(jsonObject.age);  // Output: 30
```

### Handling Errors  
- If JSON is **malformed**, `JSON.parse()` throws a `SyntaxError`.  
```js
try {
    JSON.parse("{ name: 'John' }"); // Missing double quotes on keys
} catch (error) {
    console.error("Invalid JSON format:", error.message);
}
```

---

## 4. Converting JavaScript Object to JSON  

### `JSON.stringify()`
- Converts a **JavaScript object** into a **JSON string**.  
- Used when sending data to a server or storing in local storage.  

#### Example  
```js
const person = { name: "Alice", age: 25 };
const jsonStr = JSON.stringify(person);

console.log(jsonStr); // Output: '{"name":"Alice","age":25}'
```

### Pretty Formatting  
- You can format JSON for better readability using spacing.  
```js
console.log(JSON.stringify(person, null, 2));
```
Output:
```json
{
  "name": "Alice",
  "age": 25
}
```

### Filtering Keys  
- You can filter specific properties using an array as the second parameter.  
```js
const user = { name: "John", age: 30, city: "New York" };
const filteredJson = JSON.stringify(user, ["name", "city"]);

console.log(filteredJson); // Output: '{"name":"John","city":"New York"}'
```

---

## 5. Handling Nested JSON  

### Parsing Nested JSON  
- JSON can have **nested objects and arrays**.  

#### Example  
```js
const data = `{
  "user": {
    "name": "Emma",
    "contacts": {
      "email": "emma@example.com",
      "phone": "123456789"
    }
  }
}`;

const parsedData = JSON.parse(data);
console.log(parsedData.user.contacts.email); // Output: emma@example.com
```

---

## 6. Local Storage with JSON  

### Storing JSON in `localStorage`  
- **LocalStorage** stores data as **strings**, so JSON must be converted using `JSON.stringify()`.  

#### Example  
```js
const user = { name: "Mike", age: 28 };

// Store in localStorage
localStorage.setItem("userData", JSON.stringify(user));

// Retrieve from localStorage
const storedUser = JSON.parse(localStorage.getItem("userData"));

console.log(storedUser.name); // Output: Mike
```

---

## 7. JSON vs JavaScript Object  

| Feature         | JSON | JavaScript Object |
|---------------|------|------------------|
| Data Type     | String | Object |
| Keys          | Must be in double quotes | No quotes needed |
| Methods      | `JSON.parse()`, `JSON.stringify()` | Direct property access |
| Supports Functions? | No | Yes |
| Supports `undefined`? | No | Yes |

---

## 8. Common Errors with JSON  

### 1. Invalid JSON Format  
```js
JSON.parse("{name: 'John'}"); // ❌ Error: Unexpected token n
```
✅ Fix:  
```js
JSON.parse('{"name": "John"}'); // Correct
```

### 2. Handling `undefined` Values  
- `undefined` is **not** a valid JSON data type.  
```js
const obj = { name: "Alice", age: undefined };
console.log(JSON.stringify(obj)); // Output: '{"name":"Alice"}'
```
- The `undefined` value is **removed** when converted to JSON.

### 3. Circular References  
- JSON does not support **circular structures** (objects that reference themselves).  
```js
let obj = {};
obj.self = obj;
JSON.stringify(obj); // ❌ Error: Converting circular structure to JSON
```
✅ Fix: Remove circular references before stringifying.

---

## 9. Deep Copying Objects with JSON  

- JSON can be used to **deep clone** objects.  
- Unlike `Object.assign()` or spread operator (`{ ...obj }`), JSON removes references.  

#### Example  
```js
const original = { name: "Eve", details: { age: 22 } };
const clone = JSON.parse(JSON.stringify(original));

clone.details.age = 30;

console.log(original.details.age); // Output: 22
```
- The original object remains unchanged because `JSON.parse(JSON.stringify(obj))` creates a new independent copy.

---

## 10. When to Use JSON?  

### Suitable Cases  
- Data exchange between client and server.  
- Storing and retrieving structured data in localStorage.  
- Saving application settings in config files.  
- Deep cloning objects (when no functions are involved).  

### When Not to Use JSON?  
- When objects contain functions or special JavaScript values like `undefined`, `NaN`, or `Infinity`.  
- When circular references exist in objects.  

---

## Summary  

- **`JSON.parse()`** converts JSON strings into JavaScript objects.  
- **`JSON.stringify()`** converts JavaScript objects into JSON strings.  
- JSON is widely used in web applications, localStorage, and APIs.  
- JSON does not support `undefined`, functions, or circular references.  
- JSON is useful for deep cloning objects but removes methods.  

---