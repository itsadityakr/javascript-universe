## Events in JS

### **1. What Are Events in JavaScript?**
Events are actions or occurrences that happen in the browser, such as:
- Clicking a button.
- Typing in a text box.
- Moving the mouse.
- Pressing a key on the keyboard.

JavaScript allows you to "listen" for these events and respond to them with code.

---

### **2. Three Ways to Handle Events in JavaScript**

#### **1. Inline Event Handlers**
This is the simplest way to handle events. You write the event directly inside the HTML element using attributes like `onclick`, `onmouseover`, etc.

##### Example:
```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

##### Explanation:
- When the button is clicked, the `onclick` attribute runs the JavaScript code inside it (`alert('Button clicked!')`).
- **Pros**: Easy to write and understand.
- **Cons**:
  - Mixes HTML and JavaScript, which is not a good practice.
  - Only one event handler can be assigned per event.

---

#### **2. DOM Event Handlers**
This method assigns event handlers directly to DOM elements using JavaScript. It’s better than inline handlers but still has limitations.

##### Example:
```javascript
document.getElementById("myButton").onclick = function() {
    alert('Button clicked!');
};
```

##### Explanation:
- The `onclick` property is assigned a function that runs when the button is clicked.
- **Pros**: Separates HTML and JavaScript.
- **Cons**:
  - Only one event handler can be assigned per event.
  - If you reassign the handler, the old one is overwritten.

---

#### **3. `addEventListener` Method**
This is the **most recommended way** to handle events. It allows you to attach multiple event listeners to the same element and provides better control.

##### Example:
```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert('Button clicked!');
});
```

##### Explanation:
- The `addEventListener` method takes two arguments:
  1. The event type (e.g., `"click"`).
  2. The function to run when the event occurs.
- **Pros**:
  - Supports multiple event listeners for the same event.
  - Can be easily removed using `removeEventListener`.
- **Cons**: Slightly more code to write.

---

### **3. Input Events**
Input events are triggered when the user interacts with form elements like `<input>`, `<textarea>`, or `<select>`.

#### Common Input Events:
1. **`input`**: Fires when the value of an element changes (e.g., typing in a text field).
2. **`change`**: Fires when the value changes and the element loses focus.
3. **`focus`**: Fires when the element gains focus.
4. **`blur`**: Fires when the element loses focus.

##### Example:
```javascript
const inputElement = document.querySelector("input");

inputElement.addEventListener("input", (event) => {
    console.log("Input value:", event.target.value);
});

inputElement.addEventListener("change", (event) => {
    console.log("Value changed:", event.target.value);
});
```

##### Explanation:
- The `input` event fires every time the user types something.
- The `change` event fires when the user finishes typing and moves away from the input field.

---

### **4. Event Object**
When an event occurs, JavaScript automatically creates an **Event Object** that contains information about the event. This object is passed to the event handler function.

#### Key Properties of the Event Object:
- **`event.type`**: The type of event (e.g., "click", "keydown").
- **`event.target`**: The element that triggered the event.
- **`event.key`**: The key pressed (for keyboard events).
- **`event.clientX` / `event.clientY`**: Mouse pointer coordinates.

##### Example:
```javascript
document.addEventListener("click", (event) => {
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
    console.log("Mouse coordinates:", event.clientX, event.clientY);
});
```

---

### **5. Mouse Events**
Mouse events are triggered when the user interacts with the mouse.

#### Common Mouse Events:
- **`click`**: Single click on an element.
- **`dblclick`**: Double-click on an element.
- **`mousedown`**: Mouse button is pressed.
- **`mouseup`**: Mouse button is released.
- **`mouseenter`**: Pointer enters an element.
- **`mouseleave`**: Pointer leaves an element.
- **`mousemove`**: Pointer moves over an element.

##### Example:
```javascript
const box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "white";
});
```

---

### **6. Keyboard Events**
Keyboard events are triggered when the user presses or releases a key.

#### Common Keyboard Events:
- **`keydown`**: Fires when a key is pressed down.
- **`keyup`**: Fires when a key is released.
- **`keypress`**: (Deprecated) Fires when a key produces a character value.

#### Key Properties:
- **`event.key`**: The value of the key pressed (e.g., "a", "Enter").
- **`event.code`**: The physical key on the keyboard (e.g., "KeyA", "Enter").
- **`event.ctrlKey`**, **`event.shiftKey`**: Boolean values indicating if modifier keys are pressed.

##### Example:
```javascript
document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
    console.log("Key code:", event.code);
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // Prevent default behavior (e.g., saving the page)
        console.log("Ctrl + S pressed");
    }
});
```

---

### **7. Difference Between `onclick` and `click` in Inline Events and `addEventListener`**

#### Inline `onclick`:
- Written directly in HTML.
- Only one event handler can be assigned.
- Example:
  ```html
  <button onclick="handleClick()">Click Me</button>
  ```

#### `addEventListener`:
- Attached via JavaScript.
- Allows multiple event listeners for the same event.
- Example:
  ```javascript
  document.querySelector("button").addEventListener("click", handleClick);
  ```

---

### **8. `classList.add`**
The `classList` property provides methods to manipulate the class attribute of an element. The `add` method adds one or more CSS classes.

##### Example:
```javascript
document.getElementById("myElement").classList.add("active", "highlight");
```

---

### **9. `document.getElementById.style`**
The `style` property allows direct manipulation of an element's inline styles.

##### Example:
```javascript
document.getElementById("myElement").style.backgroundColor = "yellow";
```

---

### **10. Input Event Handling in Depth**

##### Example:
```javascript
const handleInput = (event) => {
    console.log("Input value:", event.target.value);
    console.log("Input name:", event.target.name);
    console.log("Input type:", event.target.type);
    console.log("Event type:", event.type);
};

document.querySelector("input").addEventListener("input", handleInput);
```

---

### **11. Change Event vs Input Event**

#### `change` Event:
- Fires when the value changes and the element loses focus.
- Example:
  ```javascript
  document.querySelector("input").addEventListener("change", (event) => {
      console.log("Value changed:", event.target.value);
  });
  ```

#### `input` Event:
- Fires immediately when the value changes.
- Example:
  ```javascript
  document.querySelector("input").addEventListener("input", (event) => {
      console.log("Input value:", event.target.value);
  });
  ```

---

### **12. Notes on Input Events**
- **Input Events** are used to track user interactions with form elements.
- Common use cases:
  - Validating input in real-time.
  - Updating the UI based on user input.
  - Handling form submissions dynamically.
- Key properties:
  - `event.target.value`: The current value of the input.
  - `event.target.name`: The `name` attribute of the input.
  - `event.target.type`: The `type` attribute of the input (e.g., "text", "password").
- Events:
  - `input`: Tracks every change in the input value.
  - `change`: Tracks changes after the input loses focus.
  - `focus`/`blur`: Tracks when the input gains or loses focus.

---

### **13. Practical Example: Creating Notes with Input Events**
Let’s create a simple app where users can type notes, and the notes are displayed in real-time.

##### HTML:
```html
<input type="text" id="noteInput" placeholder="Type your note here">
<div id="notesContainer"></div>
```

##### JavaScript:
```javascript
const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");

noteInput.addEventListener("input", (event) => {
    const noteText = event.target.value;
    notesContainer.textContent = noteText;
});
```

##### Explanation:
- As the user types in the input field, the text is displayed in real-time inside the `notesContainer`.

---