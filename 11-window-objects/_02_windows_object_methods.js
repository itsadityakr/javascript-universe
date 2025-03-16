// =============================
// Window Object Methods in Depth
// =============================

// 1. Navigation Methods
// These methods deal with opening, closing, and controlling the window.

console.log("===== Navigation Methods =====");

// `window.open(url, name, specs)` - Opens a new browser window or tab with the specified URL, window name, and optional window specifications (like size).
let newWindow = window.open('https://example.com', 'newWindow', 'width=800,height=600');

// `window.close()` - Closes the current window. Often used with windows opened by `window.open()`.
setTimeout(() => {
  newWindow.close();
  console.log("New window closed.");
}, 5000);

// `window.stop()` - Stops the loading of resources. Can be used to stop page loading in case of heavy resources.
window.stop();

// `window.focus()` - Brings the current window to the front, making it active and focused.
window.focus();

// `window.blur()` - Removes focus from the window, making it lose active status.
window.blur();

// `window.print()` - Opens the browser's print dialog to print the current page.
setTimeout(() => {
  window.print();
}, 3000);

// ==============================
// URL and Location Methods
// These methods allow you to control the page's location or interact with it.

console.log("===== URL and Location Methods =====");

// `window.alert(message)` - Displays an alert dialog box with a given message.
window.alert("This is an alert message.");

// `window.confirm(message)` - Displays a confirmation dialog with an OK/Cancel option. Returns true if OK is clicked, false if Cancel is clicked.
let userConfirmed = window.confirm("Do you want to proceed?");
console.log("User confirmed:", userConfirmed);

// `window.prompt(message, default)` - Displays a prompt dialog with a text input field. Returns the entered value, or null if canceled.
let userInput = window.prompt("Enter your name:", "John Doe");
console.log("User input:", userInput);

// `window.location.assign(url)` - Loads a new document at the specified URL, navigating to that page.
setTimeout(() => {
  window.location.assign('https://example.com');
}, 5000);

// `window.location.reload(forceReload)` - Reloads the current page. If `forceReload` is true, it reloads from the server instead of the cache.
setTimeout(() => {
  window.location.reload();
}, 10000);

// `window.location.replace(url)` - Replaces the current document with a new one at the specified URL, and it does not create a new entry in the browser's history.
setTimeout(() => {
  window.location.replace('https://example.com');
}, 15000);

// ==============================
// Timer Methods
// These methods allow you to set up time-based actions, such as delays and intervals.

console.log("===== Timer Methods =====");

// `setTimeout(callback, delay)` - Executes the provided `callback` function once after the specified `delay` (in milliseconds).
let timeoutId = setTimeout(() => {
  console.log("This message is displayed after a 2-second delay.");
}, 2000);

// `clearTimeout(id)` - Cancels a previously set timeout identified by `id`.
clearTimeout(timeoutId);
console.log("Timeout canceled.");

// `setInterval(callback, delay)` - Executes the provided `callback` function repeatedly at the specified `delay` (in milliseconds).
let intervalId = setInterval(() => {
  console.log("This message is displayed every 3 seconds.");
}, 3000);

// `clearInterval(id)` - Cancels a previously set interval identified by `id`.
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval canceled.");
}, 12000);

// ==============================
// Scrolling Methods
// These methods allow you to control window scrolling.

console.log("===== Scrolling Methods =====");

// `window.scrollTo(x, y)` - Scrolls the window to the specified coordinates (x, y).
window.scrollTo(0, 500);

// `window.scrollBy(x, y)` - Scrolls the window by the specified amount (x, y) relative to its current position.
window.scrollBy(0, 200);

// `window.scroll(x, y)` - Alias for `scrollTo(x, y)`. Performs the same action.
window.scroll(0, 1000);

// ==============================
// CSS and Computed Styles Methods
// These methods help to retrieve the computed styles of elements.

console.log("===== CSS and Computed Styles Methods =====");

// `window.getComputedStyle(element, pseudoElement)` - Returns the computed styles of a specified element.
// The `pseudoElement` parameter is optional and is used if you want the styles for a pseudo-element like `::before`.
let element = document.getElementById('someElement');
let computedStyle = window.getComputedStyle(element);
console.log("Computed Background Color:", computedStyle.backgroundColor);

// ==============================
// Event Listener Methods
// These methods allow you to add and remove event listeners to handle various events.

console.log("===== Event Listener Methods =====");

// `window.addEventListener(event, handler)` - Adds an event listener to the window for the specified event type and handler function.
window.addEventListener('resize', () => {
  console.log("Window resized!");
});

// `window.removeEventListener(event, handler)` - Removes an event listener from the window for the specified event type and handler function.
setTimeout(() => {
  window.removeEventListener('resize', () => {
    console.log("Window resized!");
  });
  console.log("Resize event listener removed.");
}, 5000);

// ==============================
// Media Queries Methods
// These methods allow you to check if certain media queries match.

console.log("===== Media Queries Methods =====");

// `window.matchMedia(mediaQuery)` - Checks if a given media query matches the current window's state (e.g., screen size, orientation).
let mediaQuery = window.matchMedia("(max-width: 600px)");
console.log("Media Query Match (max-width: 600px):", mediaQuery.matches);

// Example of using the `matchMedia` method with event listeners to dynamically change styles based on screen size.
mediaQuery.addEventListener('change', () => {
  if (mediaQuery.matches) {
    console.log("Screen width is 600px or less!");
  } else {
    console.log("Screen width is greater than 600px!");
  }
});

// ==============================
// Conclusion
// The window object methods provide robust functionality for navigation, handling dialogs, manipulating time, controlling scrolling, and interacting with styles, events, and media queries.
// These methods enable interactive and dynamic behavior in modern web applications.
