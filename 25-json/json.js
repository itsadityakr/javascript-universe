// ======================= JSON in JavaScript: Complete Guide =======================
// JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data.
// It is widely used in web applications, APIs, and databases.

// ---------------------------------------------------------------------------------
// 1. JSON BASICS - Example JSON Data
// ---------------------------------------------------------------------------------

const jsonString = `{
  "name": "Alice",
  "age": 28,
  "isStudent": false,
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}`;

console.log("\nJSON String:\n", jsonString);
/*
Output:
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
*/

// ---------------------------------------------------------------------------------
// 2. JSON PARSING (Convert JSON String → JavaScript Object)
// ---------------------------------------------------------------------------------

try {
  const jsonObject = JSON.parse(jsonString);
  console.log("\nParsed JSON Object:", jsonObject);
  console.log("Name:", jsonObject.name); // Output: Alice
  console.log("Skills:", jsonObject.skills); // Output: [ 'JavaScript', 'React', 'Node.js' ]
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}

// ---------------------------------------------------------------------------------
// 3. JSON STRINGIFYING (Convert JavaScript Object → JSON String)
// ---------------------------------------------------------------------------------

const person = { name: "Bob", age: 30, city: "Los Angeles" };
const jsonStr = JSON.stringify(person);

console.log("\nJSON Stringified:", jsonStr);
// Output: {"name":"Bob","age":30,"city":"Los Angeles"}

// ---------------------------------------------------------------------------------
// 4. PRETTY PRINTING JSON (Adding indentation for readability)
// ---------------------------------------------------------------------------------

console.log("\nPretty JSON:\n", JSON.stringify(person, null, 2));
/*
Output:
{
  "name": "Bob",
  "age": 30,
  "city": "Los Angeles"
}
*/

// ---------------------------------------------------------------------------------
// 5. FILTERING KEYS WHEN STRINGIFYING JSON
// ---------------------------------------------------------------------------------

const filteredJson = JSON.stringify(person, ["name", "city"]);
console.log("\nFiltered JSON:", filteredJson);
// Output: {"name":"Bob","city":"Los Angeles"}

// ---------------------------------------------------------------------------------
// 6. STORING JSON IN LOCAL STORAGE (Web Browsers Only)
// ---------------------------------------------------------------------------------

// Store object as JSON string in localStorage
localStorage.setItem("userData", JSON.stringify(person));

// Retrieve JSON string from localStorage and parse it back into an object
const storedUser = JSON.parse(localStorage.getItem("userData"));

console.log("\nRetrieved from LocalStorage:", storedUser);
// Output: { name: 'Bob', age: 30, city: 'Los Angeles' }

// ---------------------------------------------------------------------------------
// 7. HANDLING NESTED JSON OBJECTS
// ---------------------------------------------------------------------------------

const nestedJsonString = `{
  "user": {
    "name": "Emma",
    "contacts": {
      "email": "emma@example.com",
      "phone": "123456789"
    }
  }
}`;

const nestedData = JSON.parse(nestedJsonString);
console.log("\nNested JSON Email:", nestedData.user.contacts.email);
// Output: emma@example.com

// ---------------------------------------------------------------------------------
// 8. ERROR HANDLING WHEN PARSING JSON (Invalid JSON)
// ---------------------------------------------------------------------------------

try {
  JSON.parse("{ name: 'John' }"); // Incorrect JSON (missing quotes)
} catch (error) {
  console.error("Invalid JSON format:", error.message);
}

// ---------------------------------------------------------------------------------
// 9. HANDLING `undefined` VALUES IN JSON
// ---------------------------------------------------------------------------------

const objWithUndefined = { name: "Alice", age: undefined };
console.log("\nJSON with `undefined`:", JSON.stringify(objWithUndefined));
// Output: {"name":"Alice"} (age is removed because JSON does not support `undefined`)

// ---------------------------------------------------------------------------------
// 10. DEEP COPYING OBJECTS WITH JSON (Removes References)
// ---------------------------------------------------------------------------------

const originalObject = { name: "Eve", details: { age: 22 } };
const deepCopy = JSON.parse(JSON.stringify(originalObject));

deepCopy.details.age = 30;

console.log("\nOriginal Object:", originalObject);
// Output: { name: 'Eve', details: { age: 22 } }

console.log("Deep Copied Object:", deepCopy);
// Output: { name: 'Eve', details: { age: 30 } }

// ---------------------------------------------------------------------------------
// 11. JSON VS JAVASCRIPT OBJECT DIFFERENCES
// ---------------------------------------------------------------------------------

const jsObject = { name: "John", age: 25, greet: function() { return "Hello"; } };
const jsonConverted = JSON.stringify(jsObject);

console.log("\nJavaScript Object:", jsObject);
// Output: { name: 'John', age: 25, greet: [Function: greet] }

console.log("JSON Converted:", jsonConverted);
// Output: {"name":"John","age":25} (Function is removed)

// ---------------------------------------------------------------------------------
// 12. COMPARING OBJECTS IN JSON (Memory References)
// ---------------------------------------------------------------------------------

const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };

console.log("\nObject Comparison:", obj1 === obj2);
// Output: false (Different memory references)

const obj3 = obj1;
console.log("Same Reference Comparison:", obj1 === obj3);
// Output: true (Both reference the same object in memory)

// ---------------------------------------------------------------------------------
// 13. CIRCULAR REFERENCE ERROR IN JSON
// ---------------------------------------------------------------------------------

let circularObj = {};
circularObj.self = circularObj;

try {
  JSON.stringify(circularObj);
} catch (error) {
  console.error("Circular Reference Error:", error.message);
}

// ---------------------------------------------------------------------------------
// 14. CHECKING IF A STRING IS VALID JSON
// ---------------------------------------------------------------------------------

function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

console.log("\nIs valid JSON:", isValidJSON('{"name": "John"}'));
// Output: true

console.log("Is valid JSON:", isValidJSON("{name: John}"));
// Output: false (Invalid format)

// ---------------------------------------------------------------------------------
// 15. USING STRUCTURED CLONE FOR BETTER DEEP COPYING
// ---------------------------------------------------------------------------------

const deepClone = structuredClone(originalObject);
deepClone.details.age = 40;

console.log("\nOriginal Object:", originalObject);
// Output: { name: 'Eve', details: { age: 22 } }

console.log("Structured Clone:", deepClone);
// Output: { name: 'Eve', details: { age: 40 } }

// ---------------------------------------------------------------------------------
// SUMMARY
// ---------------------------------------------------------------------------------

// - JSON.parse() converts JSON strings into JavaScript objects.
// - JSON.stringify() converts JavaScript objects into JSON strings.
// - JSON does not support functions, undefined, or circular references.
// - JSON is widely used in data exchange, local storage, and configuration files.
// - Use JSON for deep cloning objects but note that it removes functions and special types.
