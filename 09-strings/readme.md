
# **JavaScript Strings**

## **1. What is a String in JavaScript?**
A **string** in JavaScript is a sequence of characters enclosed in quotes. JavaScript allows you to create strings using **single quotes (`'`)**, **double quotes (`"`)**, or **backticks (`` ` ``)**.

- **Example**:
  ```javascript
  let str1 = 'Hello, World!';
  let str2 = "Hello, World!";
  let str3 = `Hello, World!`;  // Template literals, can include expressions.
  ```

---

## **2. String Properties**

- **`length` Property**: This property returns the number of characters in a string (including spaces).

  - **Example**:
    ```javascript
    let str = "Hello, World!";
    console.log(str.length); // Output: 13 (includes the comma, space, and exclamation mark)
    ```

---

## **3. Escape Characters**

An **escape character** is a backslash (`\`) used to insert special characters in strings.

- **Common Escape Sequences**:
  - **`\'`**: Single quote (e.g., `'I\'m learning JavaScript'`)
  - **`\"`**: Double quote (e.g., `"She said, \"Hello!\" "`)
  - **`\\`**: Backslash (e.g., `"This is a backslash: \\"`)
  - **`\n`**: Newline (creates a new line)
  - **`\t`**: Tab (inserts a tab space)
  - **`\r`**: Carriage return (moves cursor to the start of the line)
  - **`\b`**: Backspace

  - **Example**:
    ```javascript
    let text = "Hello\nWorld!"; // Outputs 'Hello' on one line, 'World!' on the next line
    console.log(text);
    ```

---

## **4. String Search Methods**

### **a. `indexOf()`**
- **Purpose**: Finds the **first occurrence** of a substring and returns its index. Returns `-1` if not found.
- **Syntax**:
  ```javascript
  string.indexOf(searchString, position);
  ```
  - **Example**:
    ```javascript
    let text = "JavaScript is awesome!";
    console.log(text.indexOf("is")); // Output: 10
    console.log(text.indexOf("Java")); // Output: 0
    console.log(text.indexOf("hello")); // Output: -1 (not found)
    ```

### **b. `lastIndexOf()`**
- **Purpose**: Finds the **last occurrence** of a substring.
- **Syntax**:
  ```javascript
  string.lastIndexOf(searchString, position);
  ```
  - **Example**:
    ```javascript
    let text = "JavaScript is awesome. JavaScript is fun.";
    console.log(text.lastIndexOf("JavaScript")); // Output: 33
    ```

### **c. `search()`**
- **Purpose**: Searches a string for a pattern (either string or regex) and returns the position of the first match. Returns `-1` if no match is found.
- **Syntax**:
  ```javascript
  string.search(pattern);
  ```
  - **Example**:
    ```javascript
    let text = "Welcome to JavaScript!";
    console.log(text.search(/javascript/i)); // Output: 11 (case-insensitive search)
    ```

### **d. `match()`**
- **Purpose**: Searches for a match and returns all matches in an array (or `null` if no match is found).
- **Syntax**:
  ```javascript
  string.match(regex);
  ```
  - **Example**:
    ```javascript
    let text = "I love JavaScript, JavaScript is fun!";
    let result = text.match(/javascript/gi);
    console.log(result); // Output: ['JavaScript', 'JavaScript']
    ```
### **e. `matchAll()`**

-   **Purpose**: Returns an **iterator** containing all matched results for a regular expression. This is useful when you want more detailed match information (e.g., groups or index positions).
    
-   **Why Use `matchAll()` Instead of `match()`?**
    
    -   `matchAll()` provides additional match details like **groups** and the match **index**.
    -   It works with the `/g` (global) flag to iterate over all matches.
-   **Syntax**:
    
    ```javascript
    string.matchAll(regex);
    
    ```
    
-   **Example**:
    
    ```javascript
    let text = "I love JavaScript. JavaScript is fun!";
    let regex = /JavaScript/gi;
    
    // matchAll returns an iterator, so we use [...spread] to convert it into an array.
    let matches = [...text.matchAll(regex)];
    
    console.log(matches);
    
    // Output: Array of Match Objects
    // [
    //   {0: 'JavaScript', index: 7, input: 'I love JavaScript. JavaScript is fun!', groups: undefined},
    //   {0: 'JavaScript', index: 20, input: 'I love JavaScript. JavaScript is fun!', groups: undefined}
    // ]
    
    // Access match details
    matches.forEach(match => {
      console.log(`Found '${match[0]}' at index ${match.index}`);
    });
    // Output:
    // Found 'JavaScript' at index 7
    // Found 'JavaScript' at index 20
    
    ```

### **f. `includes()`**
- **Purpose**: Checks if a string contains a specified value, returns `true` or `false`.
- **Syntax**:
  ```javascript
  string.includes(searchString);
  ```
  - **Example**:
    ```javascript
    let text = "I love JavaScript!";
    console.log(text.includes("JavaScript")); // Output: true
    console.log(text.includes("Python")); // Output: false
    ```

### **g. `startsWith()`**
- **Purpose**: Checks if a string starts with a specified value.
- **Syntax**:
  ```javascript
  string.startsWith(searchString, position);
  ```
  - **Example**:
    ```javascript
    let text = "JavaScript is awesome!";
    console.log(text.startsWith("Java")); // Output: true
    ```

### **h. `endsWith()`**
- **Purpose**: Checks if a string ends with a specified value.
- **Syntax**:
  ```javascript
  string.endsWith(searchString);
  ```
  - **Example**:
    ```javascript
    let text = "I love JavaScript!";
    console.log(text.endsWith("JavaScript!")); // Output: true
    ```

---

## **5. Extracting Parts of a String**

### **a. `slice()`**
- **Purpose**: Extracts a section of a string and returns a new string.
- **Syntax**:
  ```javascript
  string.slice(start, end);
  ```
  - **Example**:
    ```javascript
    let text = "Hello, World!";
    console.log(text.slice(0, 5)); // Output: "Hello"
    ```

### **b. `substring()`**
- **Purpose**: Similar to `slice()`, but with a different behavior when indices are negative.
- **Syntax**:
  ```javascript
  string.substring(start, end);
  ```
  - **Example**:
    ```javascript
    let text = "Hello, World!";
    console.log(text.substring(0, 5)); // Output: "Hello"
    ```

### **c. `substr()` (deprecated)**
- **Purpose**: Extracts a substring from a string. **Avoid using this** since it’s deprecated.
- **Syntax**:
  ```javascript
  string.substr(start, length);
  ```
  - **Example**:
    ```javascript
    let text = "Hello, World!";
    console.log(text.substr(0, 5)); // Output: "Hello"
    ```

---

## **6. String Character Extraction**

### **a. `charAt()`**
- **Purpose**: Returns the character at the specified index.
- **Syntax**:
  ```javascript
  string.charAt(index);
  ```
  - **Example**:
    ```javascript
    let text = "Hello, World!";
    console.log(text.charAt(0)); // Output: "H"
    ```

### **b. `charCodeAt()`**
- **Purpose**: Returns the **Unicode** value (integer) of the character at the specified index.
- **Syntax**:
  ```javascript
  string.charCodeAt(index);
  ```
  - **Example**:
    ```javascript
    let text = "Hello, World!";
    console.log(text.charCodeAt(0)); // Output: 72 (Unicode value of "H")
    ```

### **c. `at()` (ES2022+)**
- **Purpose**: Similar to `charAt()`, but allows negative indices to access characters from the end of the string.
- **Syntax**:
  ```javascript
  string.at(index);
  ```
  - **Example**:
    ```javascript
    let text = "Hello, World!";
    console.log(text.at(-1)); // Output: "!" (last character)
    ```

---

## **7. Replacing String Content**

### **a. `replace()`**
- **Purpose**: Replaces the first occurrence of a specified substring with a new string.
- **Syntax**:
  ```javascript
  string.replace(searchValue, newValue);
  ```
  - **Example**:
    ```javascript
    let text = "I love JavaScript!";
    console.log(text.replace("JavaScript", "Python")); // Output: "I love Python!"
    ```

### **b. `replaceAll()`**
- **Purpose**: Replaces **all occurrences** of a substring with a new string.
- **Syntax**:
  ```javascript
  string.replaceAll(searchValue, newValue);
  ```
  - **Example**:
    ```javascript
    let text = "I love JavaScript. JavaScript is awesome!";
    console.log(text.replaceAll("JavaScript", "Python")); // Output: "I love Python. Python is awesome!"
    ```

---

## **8. Other Useful String Methods**

- **`toUpperCase()`**: Converts all characters in the string to uppercase.
  ```javascript
  let str = "hello";
  console.log(str.toUpperCase()); // Output: "HELLO"
  ```

- **`toLowerCase()`**: Converts all characters in the string to lowercase.
  ```javascript
  let str = "HELLO";
  console.log(str.toLowerCase()); // Output: "hello"
  ```

- **`trim()`**: Removes whitespace from both ends of the string.
  ```javascript
  let str = "   Hello, World!   ";
  console.log(str.trim()); // Output: "Hello, World!"
  ```

- **`split()`**: Splits the string into an array of substrings based on a delimiter.
  ```javascript
  let str = "apple,orange,banana";
  let arr = str.split(",");
  console.log(arr); // Output: ['apple', 'orange', 'banana']
  ```

---

## **9. Regular Expression Flags in JavaScript**


### **`/g` (Global Search)**

-   Searches for **all occurrences** of a pattern in the string instead of stopping at the first match.
    
-   **Example**:
    
    ```javascript
    let text = "JavaScript is JavaScript!";
    let regex = /JavaScript/g;
    
    let matches = text.match(regex); 
    console.log(matches); // Output: ['JavaScript', 'JavaScript']
    
    ```
    

### **`/i` (Case-Insensitive Search)**

-   Makes the pattern **case-insensitive**.
    
-   **Example**:
    
    ```javascript
    let text = "JavaScript is powerful!";
    let regex = /javascript/i;
    
    let match = text.match(regex); 
    console.log(match); // Output: ['JavaScript']
    
    ```
    

### **Combining Flags: `/gi`**

-   Use `/g` and `/i` together for a **case-insensitive search of all matches**.
    -   **Example**:
        
        ```javascript
        let text = "I love JavaScript. javascript is fun!";
        let regex = /javascript/gi;
        
        let matches = text.match(regex); 
        console.log(matches); // Output: ['JavaScript', 'javascript']
        
        ```
        

----------
## Questions
### 1. Print letters 'a' to 'z'.
```javascript
for (let char = 97; char <= 122; char++) {
  console.log(String.fromCharCode(char));
}
```

### 2. Count the number of vowels in a string.
```javascript
const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
};

console.log(countVowels("Hello World")); // Output: 3
```

### 3. Check if all vowels are present in a string.
```javascript
const checkAllVowels = (str) => {
  const vowels = "aeiou";
  for (let char of vowels) {
    if (!str.toLowerCase().includes(char)) return false;
  }
  return true;
};

console.log(checkAllVowels("Education")); // Output: true
```

### 4. Check if a string is a Pangram.
```javascript
const isPangram = (str) => {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  for (let char of str.toLowerCase()) {
    alphabet.delete(char);
  }
  return alphabet.size === 0;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true
```
---