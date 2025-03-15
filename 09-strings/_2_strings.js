// 1. concat() - Combines two or more strings.
let concatExample = "Hello".concat(" ", "World");
console.log(concatExample); // Output: "Hello World"

// 2. toUpperCase() - Converts string to uppercase.
let upperCaseExample = "hello".toUpperCase();
console.log(upperCaseExample); // Output: "HELLO"

// 3. toLowerCase() - Converts string to lowercase.
let lowerCaseExample = "HELLO".toLowerCase();
console.log(lowerCaseExample); // Output: "hello"

// 4. trim() - Removes whitespace from both ends of the string.
let trimExample = "  Hello  ".trim();
console.log(trimExample); // Output: "Hello"

// 5. trimStart() / trimLeft() - Removes whitespace from the start of the string.
let trimStartExample = "  Hello  ".trimStart();
console.log(trimStartExample); // Output: "Hello  "

// 6. trimEnd() / trimRight() - Removes whitespace from the end of the string.
let trimEndExample = "  Hello  ".trimEnd();
console.log(trimEndExample); // Output: "  Hello"

// 7. padStart() - Pads the string with characters at the start.
let padStartExample = "5".padStart(3, '0');
console.log(padStartExample); // Output: "005"

// 8. padEnd() - Pads the string with characters at the end.
let padEndExample = "5".padEnd(3, '0');
console.log(padEndExample); // Output: "500"

// 9. repeat() - Repeats the string a specified number of times.
let repeatExample = "Hi".repeat(3);
console.log(repeatExample); // Output: "HiHiHi"

// 10. indexOf() - Returns the index of the first occurrence of a substring.
let indexOfExample = "Hello".indexOf("e");
console.log(indexOfExample); // Output: 1

// 11. lastIndexOf() - Returns the index of the last occurrence of a substring.
let lastIndexOfExample = "Hello".lastIndexOf("l");
console.log(lastIndexOfExample); // Output: 3

// 12. includes() - Checks if a substring is found in the string.
let includesExample = "Hello".includes("e");
console.log(includesExample); // Output: true

// 13. startsWith() - Checks if the string starts with a substring.
let startsWithExample = "Hello".startsWith("H");
console.log(startsWithExample); // Output: true

// 14. endsWith() - Checks if the string ends with a substring.
let endsWithExample = "Hello".endsWith("o");
console.log(endsWithExample); // Output: true

// 15. search() - Searches for a match using regex and returns its position.
let searchExample = "Hello".search("e");
console.log(searchExample); // Output: 1

// 16. slice() - Extracts a portion of the string and returns it.
let sliceExample = "Hello".slice(1, 4);
console.log(sliceExample); // Output: "ell"

// 17. substring() - Extracts characters between two indices.
let substringExample = "Hello".substring(1, 4);
console.log(substringExample); // Output: "ell"

// 18. substr() *(Deprecated)* - Extracts characters from a starting index for a specified length.
let substrExample = "Hello".substr(1, 3);
console.log(substrExample); // Output: "ell"

// 19. charAt() - Returns the character at a specified index.
let charAtExample = "Hello".charAt(1);
console.log(charAtExample); // Output: "e"

// 20. charCodeAt() - Returns the Unicode value of the character at the specified index.
let charCodeAtExample = "Hello".charCodeAt(1);
console.log(charCodeAtExample); // Output: 101 (Unicode for "e")

// 21. at() - Returns the character at a specified index (supports negative).
let atExample = "Hello".at(-1);
console.log(atExample); // Output: "o"

// 22. replace() - Replaces a substring with another string.
let replaceExample = "Hello".replace("e", "a");
console.log(replaceExample); // Output: "Hallo"

// 23. replaceAll() - Replaces all occurrences of a substring with another string.
let replaceAllExample = "Hello".replaceAll("l", "z");
console.log(replaceAllExample); // Output: "Hezzo"

// 24. split() - Splits a string into an array of substrings.
let splitExample = "Hello".split("");
console.log(splitExample); // Output: ["H", "e", "l", "l", "o"]

// 25. localeCompare() - Compares two strings in the current locale.
let localeCompareExample = "a".localeCompare("b");
console.log(localeCompareExample); // Output: -1 (because "a" comes before "b")

// 26. match() - Matches the string against a regex.
let matchExample = "Hello123".match(/\d+/);
console.log(matchExample); // Output: ["123"]

// 27. matchAll() - Returns all matches of a string against a regex.
let matchAllExample = "Hello123".matchAll(/\d+/g);
for (const match of matchAllExample) {
    console.log(match[0]); // Output: "123"
}

// 28. test() *(via `RegExp`)* - Tests if a pattern matches the string.
let testExample = /\d/.test("Hello123");
console.log(testExample); // Output: true

// 29. exec() *(via `RegExp`)* - Executes a search for a match in the string.
let execExample = /\d/.exec("Hello123");
console.log(execExample); // Output: ["1"]

// 30-how-js-works. length - Returns the length of the string.
let lengthExample = "Hello".length;
console.log(lengthExample); // Output: 5

// 31-sync-vs-async. fromCharCode() *(Static)* - Converts Unicode values to characters.
let fromCharCodeExample = String.fromCharCode(72, 101, 108, 108, 111);
console.log(fromCharCodeExample); // Output: "Hello"

// 32. codePointAt() - Returns the Unicode code point of the character.
let codePointAtExample = "𝄞".codePointAt(0);
console.log(codePointAtExample); // Output: 119070 (Unicode for "𝄞")

// 33. fromCodePoint() *(Static)* - Converts Unicode code points to characters.
let fromCodePointExample = String.fromCodePoint(119070);
console.log(fromCodePointExample); // Output: "𝄞"

// 34. isNaN() - Checks if a character is not a number.
let isNaNExample = isNaN("a");
console.log(isNaNExample); // Output: true

// 35. normalize() - Normalizes a string to a canonical form.
let normalizeExample = "e\u0301".normalize();
console.log(normalizeExample); // Output: "é"

// 36. Array.from() - Converts a string to an array of characters.
let arrayFromExample = Array.from("Hello");
console.log(arrayFromExample); // Output: ["H", "e", "l", "l", "o"]

// 37. for...of - Iterates over each character in a string.
for (const char of "Hello") {
    console.log(char); // Output: "H" "e" "l" "l" "o"
}

// 38. split("") - Splits the string into an array of individual characters.
let splitCharExample = "Hello".split("");
console.log(splitCharExample); // Output: ["H", "e", "l", "l", "o"]

// 39. toUpperCase() - Converts string characters to uppercase (again).
let upperCaseAgainExample = "hello".toUpperCase();
console.log(upperCaseAgainExample); // Output: "HELLO"

// 40. toLowerCase() - Converts string characters to lowercase (again).
let lowerCaseAgainExample = "HELLO".toLowerCase();
console.log(lowerCaseAgainExample); // Output: "hello"

// 41. charAt() - Returns the character at a specified index (again).
let charAtAgainExample = "Hello".charAt(2);
console.log(charAtAgainExample); // Output: "l"
