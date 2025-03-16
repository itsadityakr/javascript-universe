# JS Interview Questions #9
---

## **JavaScript String Operations**  

---

### **1. What is the difference between string primitives and String objects in JavaScript?**  

#### **Important Terms:**  
- **String Primitive**: A simple immutable sequence of characters.  
- **String Object**: A wrapper around a string primitive that provides methods.  

#### **Answer:**  
```javascript
let strPrimitive = "Hello"; // String primitive
let strObject = new String("Hello"); // String object

console.log(typeof strPrimitive); // "string"
console.log(typeof strObject); // "object"
```
**Key Difference:**  
| Feature | String Primitive | String Object |  
|---------|----------------|--------------|  
| Type | `"string"` | `"object"` |  
| Memory Efficiency | More efficient | Less efficient |  
| Methods Available | Implicit conversion | Direct access |  

For performance, **use string primitives** unless you need an object explicitly.  

---

### **2. How does JavaScript handle string immutability?**  

#### **Important Terms:**  
- **Immutability**: Strings cannot be modified after creation.  
- **New Strings**: Any modification creates a new string instead of modifying the original.  

#### **Answer:**  
```javascript
let str = "Hello";
str[0] = "Y"; // No effect
console.log(str); // "Hello"

str = "Yellow"; // New string assigned
```
Since strings are **immutable**, JavaScript creates a new string instead of modifying the existing one.  

---

### **3. What are template literals, and how do they differ from regular strings?**  

#### **Important Terms:**  
- **Template Literals (` `` `)**: Allow multi-line strings and embedded expressions.  
- **Interpolation**: Using `${}` to insert variables.  

#### **Answer:**  
```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`; // Template literal
console.log(greeting); // "Hello, Alice!"
```
| Feature | Template Literals | Regular Strings |  
|---------|----------------|---------------|  
| Multi-line Support | ✅ Yes | ❌ No |  
| Variable Interpolation | ✅ Yes | ❌ No |  

---

### **4. How do you efficiently concatenate large strings in JavaScript?**  

#### **Important Terms:**  
- **String Concatenation (`+`)**: Works for small strings.  
- **`.join()` with Arrays**: Faster for large strings.  

#### **Answer:**  
```javascript
let arr = ["Hello", "World", "!"];
let result = arr.join(" ");
console.log(result); // "Hello World!"
```
For large strings, **use `.join()` with an array** to reduce memory overhead.  

---

### **5. What is the difference between `.charAt()` and accessing a character using bracket notation (`[]`)?**  

#### **Important Terms:**  
- **`.charAt(index)`**: Returns character at a position.  
- **Bracket Notation (`str[index]`)**: More modern but doesn't work in older browsers.  

#### **Answer:**  
```javascript
let str = "Hello";

console.log(str.charAt(1)); // "e"
console.log(str[1]); // "e"
```
**Key Difference:**  
- `.charAt()` returns `""` (empty string) for out-of-bounds indices.  
- `str[index]` returns `undefined`.  

---

### **6. How do `.slice()`, `.substring()`, and `.substr()` differ?**  

#### **Important Terms:**  
- **`.slice(start, end)`**: Supports negative indices.  
- **`.substring(start, end)`**: Doesn't support negative indices.  
- **`.substr(start, length)`**: Extracts a specific length.  

#### **Answer:**  
```javascript
let str = "JavaScript";

console.log(str.slice(0, 4)); // "Java"
console.log(str.substring(0, 4)); // "Java"
console.log(str.substr(0, 4)); // "Java"
```
| Method | Supports Negative Index | Second Argument |  
|--------|------------------|----------------|  
| `.slice()` | ✅ Yes | `end index` |  
| `.substring()` | ❌ No | `end index` |  
| `.substr()` | ✅ Yes | `length` |  

`.substr()` is deprecated; use `.slice()` instead.  

---

### **7. What is the difference between `.split()` and `.join()`?**  

#### **Important Terms:**  
- **`.split(separator)`**: Converts a string into an array.  
- **`.join(separator)`**: Converts an array into a string.  

#### **Answer:**  
```javascript
let str = "apple,banana,orange";
let arr = str.split(",");
console.log(arr); // ["apple", "banana", "orange"]

let newStr = arr.join(" - ");
console.log(newStr); // "apple - banana - orange"
```
`.split()` and `.join()` are commonly used for **string manipulation and formatting**.  

---

### **8. How does `.replace()` work, and how can you use it with regular expressions?**  

#### **Important Terms:**  
- **`.replace(old, new)`**: Replaces the first occurrence.  
- **Regular Expressions**: Allow multiple replacements.  

#### **Answer:**  
```javascript
let str = "I love JavaScript";
console.log(str.replace("JavaScript", "Python")); // "I love Python"

let regexStr = "apple apple apple";
console.log(regexStr.replace(/apple/g, "banana")); // "banana banana banana"
```
**Key Difference:**  
- **Without regex**: Replaces **only the first match**.  
- **With regex (`/pattern/g`)**: Replaces **all matches**.  

---

### **9. What is the difference between `.trim()`, `.trimStart()`, and `.trimEnd()`?**  

#### **Important Terms:**  
- **`.trim()`**: Removes whitespace from both sides.  
- **`.trimStart()`**: Removes leading whitespace.  
- **`.trimEnd()`**: Removes trailing whitespace.  

#### **Answer:**  
```javascript
let str = "   Hello World!   ";

console.log(str.trim()); // "Hello World!"
console.log(str.trimStart()); // "Hello World!   "
console.log(str.trimEnd()); // "   Hello World!"
```
Use `.trim()` when cleaning user input to remove unwanted spaces.  

---

### **10. How do `.toLowerCase()` and `.toUpperCase()` handle locale-specific characters?**  

#### **Important Terms:**  
- **`.toLowerCase()` and `.toUpperCase()`**: Change case but may not work correctly with all languages.  
- **`.toLocaleLowerCase()` and `.toLocaleUpperCase()`**: Consider locale-specific rules.  

#### **Answer:**  
```javascript
console.log("İSTANBUL".toLowerCase()); // "i̇stanbul" (Incorrect in Turkish)
console.log("İSTANBUL".toLocaleLowerCase("tr")); // "istanbul" (Correct in Turkish)
```
| Method | Locale-Aware? |  
|--------|--------------|  
| `.toLowerCase()` | ❌ No |  
| `.toLocaleLowerCase()` | ✅ Yes |  

Use **locale-aware methods** for language-specific conversions.  

---

### **11. How do you count the occurrences of a character in a string efficiently?**  

#### **Important Terms:**  
- **Looping Method**: Iterate and count occurrences.  
- **Regular Expressions (`match`)**: Count using regex.  
- **`.split().length - 1` Trick**: Efficient alternative.  

#### **Answer:**  
```javascript
function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

console.log(countOccurrences("hello world", "o")); // 2
```
**Other Methods:**  
```javascript
// Using reduce
function countChar(str, char) {
  return [...str].reduce((count, c) => count + (c === char), 0);
}

// Using regex
function countRegex(str, char) {
  return (str.match(new RegExp(char, "g")) || []).length;
}
```
Using `.split()` is **efficient** because it avoids unnecessary looping.  

---

### **12. How can you check if a string starts or ends with a specific substring?**  

#### **Important Terms:**  
- **`.startsWith(substring)`**: Checks prefix.  
- **`.endsWith(substring)`**: Checks suffix.  

#### **Answer:**  
```javascript
let str = "Hello, JavaScript!";

console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
```
These methods **avoid unnecessary substring creation**, making them **faster** than alternatives like `.indexOf()`.  

---

### **13. What is the difference between `.indexOf()`, `.lastIndexOf()`, and `.includes()`?**  

#### **Important Terms:**  
- **`.indexOf(substring)`**: Finds the first occurrence index (`-1` if not found).  
- **`.lastIndexOf(substring)`**: Finds the last occurrence index.  
- **`.includes(substring)`**: Checks existence (`true` or `false`).  

#### **Answer:**  
```javascript
let text = "hello world hello";

console.log(text.indexOf("hello")); // 0
console.log(text.lastIndexOf("hello")); // 12
console.log(text.includes("world")); // true
```
Use `.includes()` for **existence checks** and `.indexOf()` when **index matters**.  

---

### **14. How do you reverse a string in JavaScript without using built-in methods?**  

#### **Important Terms:**  
- **Looping**: Swap elements manually.  
- **Recursion**: Divide and conquer.  

#### **Answer:**  
```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
```
**Recursive Approach:**  
```javascript
function reverseRecursive(str) {
  return str === "" ? "" : reverseRecursive(str.slice(1)) + str[0];
}
```
Using a **loop is more efficient** than recursion due to stack overhead.  

---

### **15. What are escape sequences in JavaScript strings, and how do they work?**  

#### **Important Terms:**  
- **Escape Sequences (`\n`, `\t`, `\"`, `\'`, `\\`)**: Special characters.  

#### **Answer:**  
```javascript
console.log("Line 1\nLine 2"); // Newline
console.log("Tab\tSpace"); // Tab
console.log("He said, \"Hello!\""); // Quotes
```
Escape sequences **help format strings correctly**.  

---

### **16. How can you interpolate variables inside a string without using `+`?**  

#### **Important Terms:**  
- **Template Literals (` `` `)**: Allow embedding variables with `${}`.  

#### **Answer:**  
```javascript
let name = "Alice";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```
Using template literals **improves readability**.  

---

### **17. How do you find the longest word in a sentence using JavaScript?**  

#### **Important Terms:**  
- **Splitting (`.split()`)**: Convert sentence to words.  
- **Sorting (`.sort()`)**: Arrange by length.  

#### **Answer:**  
```javascript
function findLongestWord(sentence) {
  return sentence.split(" ").reduce((longest, word) => 
    word.length > longest.length ? word : longest, "");
}

console.log(findLongestWord("JavaScript is awesome")); // "JavaScript"
```
Using `.reduce()` **avoids unnecessary sorting**.  

---

### **18. What is the best way to check if a string contains only numbers?**  

#### **Important Terms:**  
- **Regular Expressions (`/^\d+$/`)**: Checks numeric characters.  
- **`.every()` with `.split("")`**: Iterates over digits.  

#### **Answer:**  
```javascript
function isNumeric(str) {
  return /^\d+$/.test(str);
}

console.log(isNumeric("12345")); // true
console.log(isNumeric("123a45")); // false
```
Using regex is **efficient** compared to looping.  

---

### **19. How can you remove duplicate characters from a string?**  

#### **Important Terms:**  
- **Set (`new Set()`)**: Removes duplicates.  
- **Array Methods (`.join("")`)**: Convert back to string.  

#### **Answer:**  
```javascript
function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("banana")); // "ban"
```
Using `Set` is **optimal** for removing duplicates.  

---

### **20. How do you generate a random string of a given length in JavaScript?**  

#### **Important Terms:**  
- **Random Characters (`Math.random()`)**: Generate random numbers.  
- **Character Pool (`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`)**: Allowed characters.  

#### **Answer:**  
```javascript
function randomString(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

console.log(randomString(10)); // Example: "aZ2xY8pTqL"
```
Using `Math.random()` ensures **randomization**.  

---


### **21. Reverse Words in a Sentence**  

#### **Important Terms:**  
- **Splitting (`.split(" ")`)**: Converts a sentence into an array of words.  
- **Reversing (`.reverse()`)**: Reverses the order of words.  
- **Joining (`.join(" ")`)**: Converts an array back into a string.  

#### **Answer:**  
```javascript
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World from JavaScript"));  
// Output: "JavaScript from World Hello"
```
Using `.split()` and `.reverse()` is **efficient** for reversing words.  

---

### **22. Find the Longest Palindromic Substring**  

#### **Important Terms:**  
- **Palindrome**: A string that reads the same forward and backward.  
- **Expanding Around Center**: Checks for palindromes from the middle.  
- **Dynamic Programming (`O(n²)`)**: Stores previous results to optimize performance.  

#### **Answer (Expand Around Center Approach):**  
```javascript
function longestPalindrome(s) {
  if (!s || s.length < 2) return s;

  let start = 0, maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // Odd-length palindrome
    expandAroundCenter(i, i + 1); // Even-length palindrome
  }

  return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad")); // "bab" or "aba"
```
The **Expand Around Center** method runs in **O(n²) time**, which is **faster than brute force**.  

---

### **23. Check if Two Strings Are Anagrams**  

#### **Important Terms:**  
- **Anagram**: A word or phrase formed by rearranging the letters of another (e.g., "listen" → "silent").  
- **Sorting (`.split("").sort().join("")`)**: Helps compare words.  
- **Frequency Map (`Object`)**: More efficient than sorting.  

#### **Answer (Sorting Method):**  
```javascript
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
```
#### **Answer (Using Frequency Map - Efficient for Large Inputs):**  
```javascript
function isAnagramOptimized(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {};

  for (let char of str1) count[char] = (count[char] || 0) + 1;
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

console.log(isAnagramOptimized("listen", "silent")); // true
```
Using a **frequency map** avoids sorting, making it **O(n) instead of O(n log n)**.  

---

### **24. Compress a String Using Character Counts**  

#### **Important Terms:**  
- **Run-Length Encoding (RLE)**: Compresses repeated characters.  
- **String Iteration (`.charAt(i)`)**: Checks character frequency.  

#### **Answer:**  
```javascript
function compressString(str) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }

  return compressed.length < str.length ? compressed : str;
}

console.log(compressString("aaabbcddd")); // "a3b2cd3"
console.log(compressString("abcdef")); // "abcdef" (no compression)
```
Using **Run-Length Encoding (RLE)** reduces **storage for repetitive strings**.  

---

### **25. Find the First Non-Repeating Character in a String**  

#### **Important Terms:**  
- **Character Frequency (`Map` or `Object`)**: Counts occurrences.  
- **First Unique Character (`O(n) time`)**: Two-pass approach (one for counting, one for finding).  

#### **Answer (Using Map for Efficient Lookup):**  
```javascript
function firstUniqueChar(str) {
  let charCount = new Map();

  for (let char of str) charCount.set(char, (charCount.get(char) || 0) + 1);

  for (let i = 0; i < str.length; i++) {
    if (charCount.get(str[i]) === 1) return str[i];
  }

  return null;
}

console.log(firstUniqueChar("swiss")); // "w"
console.log(firstUniqueChar("aabb")); // null
```
Using **Map** instead of an object allows **faster lookups** and **preserves order**.  

---

![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)