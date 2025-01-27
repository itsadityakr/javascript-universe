# Browser Object Model (BOM) in JavaScript

The **Browser Object Model (BOM)** provides the means for JavaScript to interact with the browser environment outside the content of the web page (i.e., outside the Document Object Model or DOM). BOM objects provide functionality for controlling the browser window, interacting with the user's environment, and managing browser settings and behavior.

---

**BOM (Browser Object Model)** and **DOM (Document Object Model)** are closely associated with the **`window` object**, but they are not technically subparts of it. Instead, the `window` object acts as the global object in the browser, and it encompasses both the **DOM** and **BOM**. Here’s how they relate:

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(1).png" alt="Browser Manipulation" width="500">

### 1. **`window` Object**:
- The `window` object is the global object in the browser. It represents the entire browser window and provides access to the browser's features and functionality. It is the root object that holds references to the BOM and DOM.
- Almost everything that you interact with in JavaScript when working with the browser environment is accessed through the `window` object.
  
### 2. **DOM (Document Object Model)**:
- The **DOM** represents the **HTML document** that is loaded in the browser. It provides a structured representation of the webpage’s elements (like `div`, `p`, `img`, etc.), which can be accessed and manipulated using JavaScript.
- **DOM is a part of the window object**: When you interact with the `document` object (which is part of the DOM), you are essentially using the `window.document` property.
  
  **Example**:
  ```javascript
  window.document.getElementById("myElement");  // Accessing the DOM via the window object
  ```

### 3. **BOM (Browser Object Model)**:
- The **BOM** is a collection of objects that provides a way to interact with the **browser itself** and the environment around the document (like the `location`, `history`, `navigator`, `screen`, and others). It allows you to control aspects of the browser window, such as opening new windows, navigating to different pages, managing browser history, etc.
- **BOM is also part of the window object**: The various BOM objects (like `window.location`, `window.history`, `window.navigator`, etc.) are properties or methods of the `window` object.
  
  **Example**:
  ```javascript
  window.location.href = "https://www.example.com";  // Accessing BOM via the window object
  ```

### 4. **Are DOM and BOM subparts of `window`?**
While it's not entirely accurate to describe BOM and DOM as "subparts," they are closely related to the `window` object:
- **DOM** is accessible via `window.document` (meaning it's part of the window environment).
- **BOM** is accessed via various properties like `window.location`, `window.history`, `window.navigator`, etc.

Thus, we can say that **BOM and DOM are tightly coupled with the `window` object** and interact with it directly. When working with JavaScript in the browser, you are often manipulating the DOM (for page content) or BOM (for browser-related actions) via the `window` object.

### Visualizing the Relationship:
- **`window`** ➔ Contains **`document`** (DOM) and **BOM Objects** (like `location`, `history`, `navigator`, etc.)

### Example (All together):
```javascript
console.log(window.document.getElementById("myElement"));  // DOM manipulation (document)
console.log(window.location.href);  // BOM manipulation (location)
```

### Conclusion:
- **The `window` object** is the global object and serves as a container for both the **DOM** and **BOM**.
- The **DOM** is used to interact with and manipulate the document (web page).
- The **BOM** is used to interact with the browser environment and its features.

---

## Key Concepts

- **BOM vs. DOM**:
    - **BOM** refers to objects that interact with the browser environment (window, history, etc.).
    - **DOM** refers to the objects that represent the web page's HTML structure.

- **JavaScript and BOM**: JavaScript interacts with BOM through the window object, which serves as the root object that contains all other BOM objects.

---

## Common BOM Objects

### 1. **`window` Object**
Represents the browser window. Almost all other BOM objects are properties or methods of this object. It's the global object in the browser's JavaScript environment.

#### Syntax:
```javascript
window.<property or method>
```

- **Example**:
```javascript
window.alert("Welcome to BOM!");  // Display an alert
console.log(window.innerWidth);  // Get the width of the browser's viewport
```

---

### 2. **`document` Object**
Represents the HTML document that is displayed in the browser. It is part of the **DOM**, but it's accessible via the `window` object.

#### Syntax:
```javascript
document.<method or property>
```

- **Example**:
```javascript
document.getElementById("header");  // Select an element by ID
```

---

### 3. **`location` Object**
Provides information about the current URL of the browser window. It also allows manipulation of the URL to navigate to other pages.

#### Syntax:
```javascript
location.<method or property>
```

- **Example**:
```javascript
console.log(location.href);  // Log the current URL
location.replace("https://www.example.com");  // Navigate to a new URL
```

---

### 4. **`history` Object**
Allows access to the browser's session history (pages the user has visited in the current window). It provides methods for navigating backward and forward through the history.

#### Syntax:
```javascript
history.<method>
```

- **Example**:
```javascript
history.back();  // Navigate back to the previous page
history.forward();  // Navigate forward to the next page
history.go(-2);  // Go back two pages in history
```

---

### 5. **`navigator` Object**
Contains information about the browser and its environment, such as the browser name, version, language, and more.

#### Syntax:
```javascript
navigator.<property or method>
```

- **Example**:
```javascript
console.log(navigator.userAgent);  // Get the browser's user agent string
console.log(navigator.language);  // Get the browser's default language
```

---

### 6. **`screen` Object**
Provides information about the user's screen, such as screen width, height, and color depth.

#### Syntax:
```javascript
screen.<property>
```

- **Example**:
```javascript
console.log(screen.width);  // Log the screen's width
console.log(screen.height);  // Log the screen's height
```

---

### 7. **`setTimeout()` & `setInterval()`**
These functions are used to execute code after a delay or repeatedly at a set interval.

#### Syntax:
```javascript
setTimeout(function, delay);
setInterval(function, interval);
```

- **Example**:
```javascript
setTimeout(() => alert("This will show after 3 seconds"), 3000);
```

---

### 8. **`alert()`, `confirm()`, and `prompt()`**
Simple user interaction methods that allow you to show messages, ask for confirmation, or gather input.

#### Syntax:
```javascript
alert("Message");
confirm("Are you sure?");
prompt("What is your name?");
```

- **Example**:
```javascript
let userResponse = prompt("What's your favorite color?");
console.log(userResponse);
```

---

### 9. **`localStorage` and `sessionStorage`**
These objects allow for storing data in the browser. `localStorage` stores data persistently, while `sessionStorage` stores data only for the duration of the session.

#### Syntax:
```javascript
localStorage.setItem("key", "value");
localStorage.getItem("key");
sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");
```

- **Example**:
```javascript
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));  // Get stored theme value
```

---

### 10. **`console` Object**
Used for debugging and logging output to the browser's console.

#### Syntax:
```javascript
console.<method>
```

- **Example**:
```javascript
console.log("Debug message");  // Log a message
console.error("Error occurred");  // Log an error message
```

---

## Additional BOM Objects

### 11. **`XMLHttpRequest` Object**
The `XMLHttpRequest` object allows JavaScript to send HTTP requests to the server and receive responses. It's a fundamental part of AJAX (Asynchronous JavaScript and XML).

#### Syntax:
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://example.com", true);
xhr.send();
```

---

### 12. **`Geolocation` Object**
Provides access to the geographical location of the user (with their permission).

#### Syntax:
```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
```

- **Example**:
```javascript
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude);  // Latitude of the user
});
```

---

### 13. **`performance` Object**
Used for measuring performance and getting metrics about the performance of the page.

#### Syntax:
```javascript
performance.<method or property>
```

- **Example**:
```javascript
console.log(performance.now());  // Log the high-precision time
```

---

### 14. **`Notification` Object**
Allows web pages to send notifications to users outside the page, even if the page is not in focus.

#### Syntax:
```javascript
Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
        new Notification("This is a notification!");
    }
});
```

- **Example**:
```javascript
Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
        new Notification("You have a new message!");
    }
});
```

---

### 15. **`Web Storage API`**
Provides a way to store data persistently or for the duration of a session. This includes `localStorage` and `sessionStorage`, which we have already discussed.

#### Syntax:
```javascript
localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");
```

---

### 16. **`Canvas` Object**
Provides an area in the browser where you can draw graphics via JavaScript.

#### Syntax:
```javascript
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI * 2, true);
ctx.fill();
```

---

## Summary of BOM Objects and Their Functions

- **`window`**: Represents the browser window. It contains other BOM objects like `location`, `history`, `navigator`, etc.
- **`document`**: Represents the HTML document.
- **`location`**: Allows navigation and URL manipulation.
- **`history`**: Manages the browser's history.
- **`navigator`**: Provides information about the browser.
- **`screen`**: Provides information about the screen.
- **`setTimeout()`** and **`setInterval()`**: Control timed actions.
- **`alert()`**, **`confirm()`**, **`prompt()`**: Handle user interactions.
- **`localStorage`** and **`sessionStorage`**: Store data in the browser.
- **`console`**: Provides debugging and logging functionality.
- **`XMLHttpRequest`**: Enables AJAX requests.
- **`Geolocation`**: Retrieves the geographical location of the user.
- **`performance`**: Measures performance metrics.
- **`Notification`**: Sends browser notifications.
- **`Canvas`**: Draw graphics within a browser element.

---

## Conclusion

The Browser Object Model (BOM) plays a crucial role in enabling JavaScript to interact with the browser environment. It allows for a rich and interactive user experience, from manipulating the browser window to communicating with external servers using AJAX. Understanding these objects and how they work will help developers build better, more dynamic web applications.

---

### References
- [MDN Web Docs - BOM](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [JavaScript Info - BOM](https://javascript.info/browser-environment)

---