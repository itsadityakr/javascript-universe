// **JavaScript Strings: A Beginner's Guide**
// Strings are one of the most commonly used data types in JavaScript.
// They represent sequences of characters, such as words, sentences, or even numbers treated as text.

// **1. What is a String in JavaScript?**
// Strings in JavaScript can be written using single quotes (' '), double quotes (" "), or backticks (` `).

// Example of string declaration:
let str1 = 'Hello, World!'; // Single quotes
let str2 = "Hello, World!"; // Double quotes
let str3 = `Hello, World!`; // Backticks allow template literals (useful for embedding variables or expressions).

// Backticks can include variables or expressions using ${ }.
let name = "John";
let greeting = `Hello, ${name}!`; // Embeds the variable 'name' into the string.
console.log(greeting); // Output: Hello, John!

// **2. String Properties**
// Strings have properties and methods that you can use to manipulate or retrieve information about them.
// The `.length` property returns the total number of characters in the string, including spaces, punctuation, and special characters.

let sampleString = "Hello, JavaScript!";
console.log(sampleString.length); // Output: 18
// Explanation: "Hello, JavaScript!" has 18 characters, counting the letters, comma, space, and exclamation mark.

// **3. Escape Characters**
// Some characters have special meanings in JavaScript (like quotes or newlines).
// To include such characters in a string, use a backslash (\) before them. These are called escape sequences.

// Common Escape Sequences:
let escapeExample = "I\'m learning \"JavaScript\".\nHere is a new line.\tAnd here is a tab.";
console.log(escapeExample);

// Explanation of escape characters:
// - \'   Allows a single quote inside single-quoted strings.
// - \"   Allows a double quote inside double-quoted strings.
// - \\   Represents a literal backslash.
// - \n   Inserts a new line.
// - \t   Inserts a horizontal tab.

// **4. String Search Methods**
// JavaScript provides methods to search for specific content within strings.

// a) `indexOf()`
// Finds the first occurrence of a substring in a string and returns its index (position). If the substring is not found, it returns -1.

let text = "JavaScript is awesome!";
console.log(text.indexOf("is")); // Output: 10 (index where "is" starts)
console.log(text.indexOf("Python")); // Output: -1 (not found)

// b) `lastIndexOf()`
// Finds the last occurrence of a substring in a string.

let repeatedText = "JavaScript is fun. JavaScript is powerful.";
console.log(repeatedText.lastIndexOf("JavaScript")); // Output: 23 (position of the last "JavaScript")

// c) `includes()`
// Checks whether a string contains a specific substring. Returns true or false.

console.log(text.includes("awesome")); // Output: true
console.log(text.includes("Python")); // Output: false

// d) `startsWith()`
// Checks if a string begins with a specific substring.

console.log(text.startsWith("JavaScript")); // Output: true
console.log(text.startsWith("awesome")); // Output: false

// e) `endsWith()`
// Checks if a string ends with a specific substring.

console.log(text.endsWith("awesome!")); // Output: true
console.log(text.endsWith("JavaScript")); // Output: false

// **5. Extracting Parts of a String**
// To get a portion of a string, you can use methods like `slice()`, `substring()`, or `substr()` (deprecated).

// a) `slice()`
// Extracts part of a string and returns it as a new string. The original string remains unchanged.
let exampleText = "Hello, World!";
console.log(exampleText.slice(0, 5)); // Output: "Hello" (characters from index 0 to 4)
console.log(exampleText.slice(-6));  // Output: "World!" (last 6 characters)

// b) `substring()`
// Similar to `slice()`, but doesn't support negative indices. If start > end, it swaps the indices.

console.log(exampleText.substring(0, 5)); // Output: "Hello"
console.log(exampleText.substring(5, 0)); // Output: "Hello" (indices are swapped)

// **6. String Character Extraction**
// JavaScript provides methods to extract individual characters or their Unicode values.

// a) `charAt()`
// Returns the character at a specific index.
console.log(exampleText.charAt(0)); // Output: "H" (character at index 0)

// b) `charCodeAt()`
// Returns the Unicode value of the character at a specific index.
console.log(exampleText.charCodeAt(0)); // Output: 72 (Unicode value of "H")

// c) `at()`
// Similar to `charAt()`, but supports negative indices to access characters from the end.
console.log(exampleText.at(-1)); // Output: "!" (last character)

// **7. Replacing String Content**
// Use `replace()` or `replaceAll()` to replace parts of a string with new content.

// a) `replace()`
// Replaces the first occurrence of a substring with a new value.
let replaceExample = "I love JavaScript!";
console.log(replaceExample.replace("JavaScript", "Python")); // Output: "I love Python!"

// b) `replaceAll()`
// Replaces all occurrences of a substring (requires modern browsers or Node.js).
let replaceAllExample = "JavaScript is great. JavaScript is powerful.";
console.log(replaceAllExample.replaceAll("JavaScript", "Python"));
// Output: "Python is great. Python is powerful."

// **8. Other Useful String Methods**
// Here are some additional methods for working with strings:

// a) `toUpperCase()` and `toLowerCase()`a
// Converts a string to uppercase or lowercase.
let caseText = "Hello, JavaScript!";
console.log(caseText.toUpperCase()); // Output: "HELLO, JAVASCRIPT!"
console.log(caseText.toLowerCase()); // Output: "hello, javascript!"

// b) `trim()`
// Removes whitespace from both ends of the string.
let messyText = "   Hello, World!   ";
console.log(messyText.trim()); // Output: "Hello, World!"

// c) `split()`
// Splits a string into an array of substrings based on a specified delimiter.
let fruitString = "apple,orange,banana";
console.log(fruitString.split(",")); // Output: ["apple", "orange", "banana"]

// **9. Regular Expressions in Strings**
// Regular expressions (regex) are patterns used to match parts of strings.
// Flags:
// - `/g`: Global search (find all matches)
// - `/i`: Case-insensitive search

let regexText = "JavaScript is awesome. javascript is versatile.";
let regex = /javascript/gi; // Case-insensitive global search
console.log(regexText.match(regex)); // Output: ["JavaScript", "javascript"]

// **10. Practice Questions**
// These questions are great for hands-on practice with string methods.

// Question 1: Print letters 'a' to 'z'.
for (let char = 97; char <= 122; char++) {
  console.log(String.fromCharCode(char)); // Convert Unicode to character
}

// Question 2: Count the number of vowels in a string.
const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
};
console.log(countVowels("Hello World")); // Output: 3

// Question 3: Check if all vowels are present in a string.
const checkAllVowels = (str) => {
  const vowels = "aeiou";
  for (let char of vowels) {
    if (!str.toLowerCase().includes(char)) return false;
  }
  return true;
};
console.log(checkAllVowels("Education")); // Output: true

// Question 4: Check if a string is a Pangram.
const isPangram = (str) => {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  for (let char of str.toLowerCase()) {
    alphabet.delete(char);
  }
  return alphabet.size === 0;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true

// matchAll()

// let text = "I love JavaScript. JavaScript is fun!";
// let regex = /JavaScript/gi;

// // matchAll returns an iterator, so we use [...spread] to convert it into an array.
// let matches = [...text.matchAll(regex)];

// console.log(matches);

// // Output: Array of Match Objects
// // [
// //   {0: 'JavaScript', index: 7, input: 'I love JavaScript. JavaScript is fun!', groups: undefined},
// //   {0: 'JavaScript', index: 20, input: 'I love JavaScript. JavaScript is fun!', groups: undefined}
// // ]

// // Access match details
// matches.forEach(match => {
//   console.log(`Found '${match[0]}' at index ${match.index}`);
// });
// // Output:
// // Found 'JavaScript' at index 7
// // Found 'JavaScript' at index 20
