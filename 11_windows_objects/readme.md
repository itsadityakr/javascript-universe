# Detailed Overview of the Window Object in JavaScript

The `window` object in JavaScript provides a global context for interacting with the browser's environment, controlling the browser's window, managing storage, handling events, and accessing various properties. Below is a detailed description of its properties, methods, objects, and events.

## 1. Window Object Properties

### Window Dimensions
These properties return the dimensions of the browser window or viewport:
- **`innerWidth`**: Returns the width of the viewport (the part of the browser window where content is visible), excluding scrollbars.
- **`innerHeight`**: Returns the height of the viewport (the part of the browser window where content is visible), excluding scrollbars.
- **`outerWidth`**: Returns the total width of the browser window, including toolbars and scrollbars.
- **`outerHeight`**: Returns the total height of the browser window, including toolbars and scrollbars.
- **`screenX`**: Returns the horizontal distance (in pixels) of the window from the left side of the screen.
- **`screenY`**: Returns the vertical distance (in pixels) of the window from the top of the screen.
- **`scrollX`**: Returns the number of pixels that the document is currently scrolled horizontally.
- **`scrollY`**: Returns the number of pixels that the document is currently scrolled vertically.
- **`pageXOffset`**: Alias for `scrollX`, returns the horizontal scroll offset.
- **`pageYOffset`**: Alias for `scrollY`, returns the vertical scroll offset.

### Screen Information
The `screen` property provides information about the user's screen:
- **`screen.width`**: The width of the screen in pixels.
- **`screen.height`**: The height of the screen in pixels.
- **`screen.availWidth`**: The width of the available screen area (excluding system UI elements like taskbars).
- **`screen.availHeight`**: The height of the available screen area (excluding system UI elements).
- **`screen.colorDepth`**: The color depth of the screen in bits per pixel.
- **`screen.pixelDepth`**: The pixel depth of the screen, generally the same as `colorDepth`.

### Location and History
- **`location`**: An object that represents the current URL of the document loaded in the window.
  - **`location.href`**: The entire URL of the document.
  - **`location.protocol`**: The protocol part of the URL (e.g., "http:", "https:").
  - **`location.hostname`**: The domain of the URL (e.g., "example.com").
  - **`location.pathname`**: The path of the URL (e.g., "/path/to/page").
  - **`location.search`**: The query string (e.g., "?q=value").
  - **`location.hash`**: The anchor part of the URL (e.g., "#section").
- **`history`**: Provides access to the browser's session history. You can navigate through the history stack.
  - **`history.back()`**: Navigates to the previous page.
  - **`history.forward()`**: Navigates to the next page.
  - **`history.go(delta)`**: Navigates by the given number of pages (e.g., `history.go(-1)`).

### Storage
- **`localStorage`**: A key-value storage object that persists data even after the browser is closed. Each key-value pair is stored as strings.
  - **`localStorage.setItem(key, value)`**: Sets a value in `localStorage`.
  - **`localStorage.getItem(key)`**: Retrieves the value for a given key.
  - **`localStorage.removeItem(key)`**: Removes a specific item.
  - **`localStorage.clear()`**: Clears all stored data.
- **`sessionStorage`**: Similar to `localStorage`, but the data is only available for the duration of the page session.
  - **`sessionStorage.setItem(key, value)`**: Sets a value in `sessionStorage`.
  - **`sessionStorage.getItem(key)`**: Retrieves the value for a given key.
  - **`sessionStorage.removeItem(key)`**: Removes a specific item.
  - **`sessionStorage.clear()`**: Clears all stored data.

### Document and DOM
- **`document`**: Represents the HTML document loaded in the window. It provides methods and properties to manipulate the DOM.
- **`frames`**: An array of the `<iframe>` elements embedded in the current window, or `null` if no frames exist.
- **`length`**: The number of frames (iframes) within the window.

### Browser Information
- **`navigator`**: Provides information about the browser and operating system.
  - **`navigator.userAgent`**: A string identifying the browser and its version.
  - **`navigator.platform`**: The platform (operating system) the browser is running on.
  - **`navigator.language`**: The language of the browser.
  - **`navigator.cookieEnabled`**: Returns `true` if cookies are enabled, otherwise `false`.
  - **`navigator.geolocation`**: Allows access to the user's geographical location.

### Performance
- **`performance`**: Provides methods for measuring page load times and performance metrics.
  - **`performance.now()`**: Returns a high-resolution time stamp (in milliseconds) useful for measuring durations.

### Other Properties
- **`closed`**: Returns `true` if the window has been closed.
- **`opener`**: Reference to the window that opened the current window, or `null` if the current window wasn't opened by another.
- **`parent`**: Reference to the parent window (if the current window is a frame).
- **`self`**: Reference to the current window object.
- **`top`**: Reference to the topmost window object, useful in nested iframes.
- **`window`**: Reference to itself (the `window` object).
- **`status`**: The text to display in the browser's status bar.
- **`name`**: The name of the window, which can be set to identify the window.

---

## 2. Window Object Methods

### Navigation
- **`open(url, name, specs)`**: Opens a new window or tab with the specified URL, name, and window features.
- **`close()`**: Closes the current window.
- **`stop()`**: Stops the loading of resources in the current window.
- **`focus()`**: Brings the current window to the front.
- **`blur()`**: Removes focus from the current window.
- **`print()`**: Opens the print dialog to print the current page.

### URL and Location
- **`alert(message)`**: Displays an alert dialog with the specified message.
- **`confirm(message)`**: Displays a confirmation dialog with OK and Cancel buttons.
- **`prompt(message, default)`**: Displays a prompt dialog with a text input field.
- **`location.assign(url)`**: Loads a new document from the specified URL.
- **`location.reload(forceReload)`**: Reloads the current page. If `forceReload` is `true`, the page is reloaded from the server rather than cache.
- **`location.replace(url)`**: Replaces the current document with a new one, removing the current page from the session history.

### Timers
- **`setTimeout(callback, delay)`**: Executes the specified callback function after a delay (in milliseconds).
- **`clearTimeout(id)`**: Cancels a previously set timeout with the specified ID.
- **`setInterval(callback, delay)`**: Executes the specified callback function at regular intervals (in milliseconds).
- **`clearInterval(id)`**: Cancels a previously set interval with the specified ID.

### Scrolling
- **`scrollTo(x, y)`**: Scrolls the window to the specified position (in pixels).
- **`scrollBy(x, y)`**: Scrolls the window by a specified amount (in pixels).
- **`scroll(x, y)`**: Alias for `scrollTo()`.

### CSS and Computed Styles
- **`getComputedStyle(element, pseudoElement)`**: Returns the computed styles for the specified element, including styles inherited from parent elements.

### Event Listeners
- **`addEventListener(event, handler)`**: Adds an event listener to the window object for the specified event type.
- **`removeEventListener(event, handler)`**: Removes a previously added event listener from the window object.

### Media Queries
- **`matchMedia(mediaQuery)`**: Returns a `MediaQueryList` object representing the results of the specified media query.

---

## 3. Window Object Events

### Page Lifecycle
- **`onload`**: Triggered when the page has finished loading.
- **`onbeforeunload`**: Triggered before the page is unloaded (e.g., when navigating away from the page).
- **`onunload`**: Triggered when the page is being unloaded.
- **`onerror`**: Triggered when an error occurs while loading a script or resource.
- **`onoffline`**: Triggered when the browser loses internet connectivity.
- **`ononline`**: Triggered when the browser gains internet connectivity.

### User Interaction
- **`onfocus`**: Triggered when the window or an element within the window gains focus.
- **`onblur`**: Triggered when the window or an element within the window loses focus.
- **`onresize`**: Triggered when the window is resized.
- **`onscroll`**: Triggered when the window is scrolled.

### Media and Input
- **`onkeydown`**: Triggered when a key is pressed.
- **`onkeyup`**: Triggered when a key is released.
- **`onmousemove`**: Triggered when the mouse is moved within the window.
- **`onclick`**: Triggered when the mouse is clicked within the window.
- **`onmousedown`**: Triggered when a mouse button is pressed.
- **`onmouseup`**: Triggered when a mouse button is released.

### Timers and Animation
- **`onanimationstart`**: Triggered when a CSS animation starts.
- **`onanimationend`**: Triggered when a CSS animation ends.
- **`ontransitionend`**: Triggered when a CSS transition ends.

---

Example - HTML Code. ⬇️
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/html_doc_code.png" alt="HTML Code" width="500">

Example - Document WebPage. ⬇️

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/html_doc.png" alt="HTML Document" width="300">

---

Representation of the window object in JavaScript, typically found in web browsers' developer tools or during debugging. The window object is a global object in web browsers that provides an interface to the browser's window, allowing access to various browser-related features and APIs. ⬇️

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/718357fbb51ed1a7d5355dc904db8c288bb5192b/%CE%A9_assets/images/window.png" alt="Window Object" width="500">

---
This is a representation of the window.history object in JavaScript, which is part of the browser's History API. It allows you to interact with the browser's session history — a record of the pages visited during the current browser session. ⬇️

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/window_objects.png" alt="Window Object and Methods" width="500">

---

This is an example of JavaScript code execution and its output in the browser's developer console. It demonstrates the usage of various window and document object methods and properties for interacting with the webpage and its content. ⬇️

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/window_object_properties.png" alt="Window Object Properties" width="500">

---
## 4. Example Code

```javascript
// Accessing Window Object Properties
console.log(window.innerWidth); // Viewport width
console.log(window.location.href); // Current URL

// Window Object Methods
window.alert("Welcome to the site!"); // Alert box
window.scrollTo(0, 500); // Scroll to position (x=0, y=500)
setTimeout(() => alert("Hello after 2 seconds!"), 2000); // Alert after 2 seconds

// Event Handling
window.onload = () => console.log("Page Loaded Successfully!");
window.onresize = () => console.log("Window resized!");
window.onscroll = () => console.log("Page scrolled!");
