// =============================
// Window Object Objects
// =============================

// 1. Core Objects
// These are important objects provided by the `window` object for various purposes.

// ==============================
// document Object
// Represents the HTML document and is used to access and manipulate the DOM.

console.log("===== document Object =====");

// `document` refers to the loaded HTML document in the window. You can use it to interact with the DOM (Document Object Model).
let element = document.getElementById('sampleElement'); // Select an element by its ID
element.textContent = "Hello, this is dynamically updated."; // Modify the content of the element

// ==============================
// location Object
// Provides information and control over the current URL.

console.log("===== location Object =====");

// `location` contains the URL of the current document. You can modify it to navigate or reload the page.
console.log("Current URL:", window.location.href);

// `location.assign(url)` - Navigates to a new URL.
window.location.assign('https://example.com');

// `location.reload()` - Reloads the current page.
window.location.reload();

// `location.replace(url)` - Replaces the current document with a new one.
window.location.replace('https://example.com');

// ==============================
// history Object
// Provides access to the browser's session history.

console.log("===== history Object =====");

// `history` allows interaction with the browser's history (back/forward navigation).
window.history.back(); // Navigates to the previous page in the history

// `history.forward()` - Navigates to the next page in the history.
window.history.forward();

// `history.go()` - Can move forward or backward by a specific number of pages.
window.history.go(-2); // Moves back two pages

// ==============================
// navigator Object
// Provides information about the browser, operating system, and environment.

console.log("===== navigator Object =====");

// `navigator` contains browser-related information like the user agent, platform, and language.
console.log("User Agent:", window.navigator.userAgent); // Information about the browser
console.log("Platform:", window.navigator.platform); // Operating system platform
console.log("Language:", window.navigator.language); // Browser language

// ==============================
// performance Object
// Provides timing-related metrics like page load performance.

console.log("===== performance Object =====");

// `performance.now()` - Returns the time elapsed since the page load, in milliseconds (with sub-millisecond precision).
let startTime = performance.now();
// Simulate some operations
setTimeout(() => {
  let endTime = performance.now();
  console.log(`Operation took ${endTime - startTime} milliseconds.`);
}, 1000);

// ==============================
// 2. Storage Objects
// These objects allow you to store data persistently (localStorage) or temporarily (sessionStorage).

console.log("===== Storage Objects =====");

// ==============================
// localStorage Object
// Provides persistent key-value storage that survives page reloads.

console.log("===== localStorage =====");

// `localStorage` allows you to store data persistently across sessions.
localStorage.setItem('userName', 'JohnDoe'); // Store data
let storedUserName = localStorage.getItem('userName'); // Retrieve stored data
console.log("Stored User Name:", storedUserName);

// `localStorage.removeItem(key)` - Removes a specific item from storage.
localStorage.removeItem('userName');

// `localStorage.clear()` - Clears all stored items from localStorage.
localStorage.clear();

// ==============================
// sessionStorage Object
// Provides storage for the duration of the page session (until the tab is closed).

console.log("===== sessionStorage =====");

// `sessionStorage` allows you to store data for the current page session.
sessionStorage.setItem('sessionID', 'abc123');
let sessionID = sessionStorage.getItem('sessionID');
console.log("Stored Session ID:", sessionID);

// `sessionStorage.removeItem(key)` - Removes a specific item from sessionStorage.
sessionStorage.removeItem('sessionID');

// `sessionStorage.clear()` - Clears all items from sessionStorage.
sessionStorage.clear();

// ==============================
// 3. JavaScript Objects in Global Scope
// These objects are part of the global JavaScript environment and provide various utility functions.

console.log("===== JavaScript Objects in Global Scope =====");

// ==============================
// Math Object
// Provides methods for mathematical constants and operations.

console.log("===== Math Object =====");

console.log("PI:", Math.PI); // Mathematical constant Pi
console.log("Random number:", Math.random()); // Generates a random number between 0 and 1
console.log("Square root of 16:", Math.sqrt(16)); // Calculates the square root
console.log("Maximum value (5, 10, 15):", Math.max(5, 10, 15)); // Returns the largest of the values

// ==============================
// JSON Object
// Provides methods for working with JSON data (parsing and stringifying).

console.log("===== JSON Object =====");

let jsonString = '{"name":"John", "age":30-how-js-works}'; // A JSON string
let parsedObject = JSON.parse(jsonString); // Converts JSON string to JavaScript object
console.log("Parsed JSON Object:", parsedObject);

let stringifiedObject = JSON.stringify(parsedObject); // Converts JavaScript object to JSON string
console.log("Stringified JSON:", stringifiedObject);

// ==============================
// Date Object
// Provides methods for handling dates and times.

console.log("===== Date Object =====");

let currentDate = new Date(); // Creates a new Date object for the current date and time
console.log("Current Date and Time:", currentDate);
console.log("Current Year:", currentDate.getFullYear()); // Retrieves the current year
console.log("Current Month:", currentDate.getMonth() + 1); // Retrieves the current month (0-11, so we add 1)
console.log("Current Day:", currentDate.getDate()); // Retrieves the current day of the month

// ==============================
// 4. Miscellaneous Objects
// These objects are used for various specialized functionalities.

console.log("===== Miscellaneous Objects =====");

// ==============================
// console Object
// Provides methods for logging information, debugging, and displaying errors.

console.log("===== console Object =====");

console.log("This is a log message.");
console.warn("This is a warning message.");
console.error("This is an error message.");

// ==============================
// crypto Object
// Provides cryptographic functions for secure operations, like generating random numbers or hashes.

console.log("===== crypto Object =====");

// `crypto` provides various cryptographic functions. Here's an example of generating a secure random number.
let randomValue = crypto.getRandomValues(new Uint32Array(1)); // Generates a cryptographically secure random value
console.log("Random Value (crypto):", randomValue[0]);

// ==============================
// customElements Object
// Allows the definition of custom HTML elements (Web Components).

console.log("===== customElements Object =====");

// `customElements` is used to define new HTML elements.
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<p>Hello from my custom element!</p>";
  }
}

// Define the custom element
customElements.define('my-custom-element', MyCustomElement);

// Now, you can use <my-custom-element></my-custom-element> in your HTML document.


// ==============================
// Conclusion
// The `window` object contains many important objects that help interact with the browser, manage storage, perform mathematical operations, work with dates, and handle cryptographic and custom element functionalities.
// These objects are essential for building dynamic, interactive, and secure web applications.
